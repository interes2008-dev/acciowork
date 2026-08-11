import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/public/blog-cover/$id")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        let articleId = params.id;

        for (let depth = 0; depth < 3; depth += 1) {
          const { data, error } = await supabaseAdmin
            .from("blog_articles")
            .select("cover_url, status")
            .eq("id", articleId)
            .eq("status", "published")
            .maybeSingle();

          if (error || !data?.cover_url) return new Response("Not found", { status: 404 });

          if (data.cover_url.startsWith("ref:")) {
            articleId = data.cover_url.slice(4);
            continue;
          }

          const match = data.cover_url.match(/^data:([^;,]+);base64,(.+)$/s);
          if (!match) return Response.redirect(data.cover_url, 302);

          const mimeType = match[1] ?? "image/png";
          const encoded = match[2];
          if (!encoded) return new Response("Not found", { status: 404 });

          const binary = atob(encoded);
          const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
          return new Response(bytes, {
            headers: {
              "Content-Type": mimeType,
              "Cache-Control": "public, max-age=31536000, immutable",
            },
          });
        }

        return new Response("Not found", { status: 404 });
      },
    },
  },
});