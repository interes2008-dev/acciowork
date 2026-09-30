import { createFileRoute } from "@tanstack/react-router";
import { SOURCING_CTA_URL } from "@/lib/sourcing-pillars";

// Click-tracking redirect: logs the click, then 302s to the signup URL.
// Usage: /api/public/go?src=<article-slug>&lang=<lang>
export const Route = createFileRoute("/api/public/go")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const src = (url.searchParams.get("src") || "unknown").slice(0, 120);
        const lang = (url.searchParams.get("lang") || "en").slice(0, 8);
        const ref = (request.headers.get("referer") || "").slice(0, 500);

        // Fire-and-forget: never block the redirect on logging.
        try {
          const { supabaseAdmin } = await import(
            "@/integrations/supabase/client.server"
          );
          await supabaseAdmin.from("cta_clicks").insert({
            source: src,
            lang,
            referrer: ref,
          });
        } catch {
          // swallow — redirect must always succeed
        }

        return new Response(null, {
          status: 302,
          headers: { Location: SOURCING_CTA_URL, "Cache-Control": "no-store" },
        });
      },
    },
  },
});
