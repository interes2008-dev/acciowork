import { createFileRoute } from "@tanstack/react-router";

async function loadCover(id: string, depth = 0): Promise<string | null> {
  if (depth > 2) return null;
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data, error } = await supabaseAdmin
    .from("blog_articles")
    .select("cover_url")
    .eq("id", id)
    .maybeSingle();
  if (error || !data?.cover_url) return null;
  const value = data.cover_url;
  if (value.startsWith("ref:")) return loadCover(value.slice(4), depth + 1);
  return value;
}

export const Route = createFileRoute("/api/public/blog-cover/$id")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const id = (params as { id: string }).id;
        if (!/^[0-9a-f-]{36}$/i.test(id)) return new Response("Bad id", { status: 400 });

        const value = await loadCover(id);
        if (!value) return new Response("Not found", { status: 404 });

        if (value.startsWith("http")) {
          return new Response(null, { status: 302, headers: { Location: value } });
        }

        const match = /^data:([^;,]+);base64,(.*)$/s.exec(value);
        if (!match) return new Response("Unsupported cover format", { status: 415 });
        const [, mime, b64] = match;
        const binary = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
        return new Response(binary, {
          headers: {
            "Content-Type": mime,
            "Cache-Control": "public, max-age=31536000, immutable",
          },
        });
      },
    },
  },
});
