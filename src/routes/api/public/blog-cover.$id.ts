import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";

// Covers are stored as heavy base64 data URLs directly in blog_articles.cover_url.
// They must never be selected in list/detail queries (that times out Postgres).
// This endpoint is the only place that reads cover_url, by id, and streams the image.

function adminClient() {
  return createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

async function readCover(id: string, depth = 0): Promise<string | null> {
  if (depth > 3 || !id) return null;
  const supabase = adminClient();
  const { data, error } = await supabase
    .from("blog_articles")
    .select("cover_url")
    .eq("id", id)
    .maybeSingle();
  if (error || !data) return null;
  const val = (data as { cover_url: string | null }).cover_url;
  if (!val) return null;
  // Translations share one cover via "ref:<siblingId>".
  if (val.startsWith("ref:")) return readCover(val.slice(4).trim(), depth + 1);
  return val;
}

export const Route = createFileRoute("/api/public/blog-cover/$id")({
  server: {
    handlers: {
      GET: async ({ request, params }) => {
        const id =
          (params as { id?: string })?.id ??
          new URL(request.url).pathname.split("/").pop() ??
          "";
        const val = await readCover(id);
        if (!val) return new Response("Not found", { status: 404 });

        // External URLs: redirect.
        if (val.startsWith("http://") || val.startsWith("https://")) {
          return new Response(null, { status: 302, headers: { Location: val } });
        }

        // data:<mime>;base64,<payload>
        const m = val.match(/^data:([^;]+);base64,(.*)$/s);
        if (!m) return new Response("Unsupported cover format", { status: 415 });
        const mime = m[1];
        const b64 = m[2];
        const binary = atob(b64);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);

        return new Response(bytes, {
          headers: {
            "Content-Type": mime,
            "Cache-Control": "public, max-age=31536000, immutable",
          },
        });
      },
    },
  },
});
