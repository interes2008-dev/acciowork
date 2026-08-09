import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";

export const Route = createFileRoute("/api/public/blog-cover/$id")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const id = params.id;
        if (!/^[0-9a-f-]{36}$/i.test(id)) return new Response("Bad id", { status: 400 });

        const supabase = createClient(
          process.env.SUPABASE_URL!,
          process.env.SUPABASE_PUBLISHABLE_KEY!,
          { auth: { persistSession: false, autoRefreshToken: false } },
        );
        const { data, error } = await supabase
          .from("blog_articles")
          .select("cover_url")
          .eq("id", id)
          .eq("status", "published")
          .maybeSingle();
        const raw = (data?.cover_url as string | null) ?? null;
        if (error || !raw) return new Response("Not found", { status: 404 });

        const match = /^data:([^;]+);base64,(.*)$/s.exec(raw);
        if (!match) {
          return new Response(null, { status: 302, headers: { Location: raw } });
        }
        const bytes = Buffer.from(match[2], "base64");
        return new Response(bytes, {
          headers: {
            "Content-Type": match[1],
            "Cache-Control": "public, max-age=31536000, immutable",
          },
        });
      },
    },
  },
});