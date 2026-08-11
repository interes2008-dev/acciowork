import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "@/components/landing/LandingPage";

export const Route = createFileRoute("/hi/")({
  component: IndexHi,
  head: () => ({
    meta: [
      { title: "Accio Work | सोर्सिंग और बिज़नेस ऑटोमेशन के लिए AI प्लेटफ़ॉर्म" },
      {
        name: "description",
        content:
          "Accio Work, AI वर्कस्पेस: मार्केट एनालिसिस, सप्लायर तुलना, कंटेंट निर्माण और बिज़नेस प्रक्रियाओं का ऑटोमेशन, एक ही प्लेटफ़ॉर्म पर।",
      },
      {
        name: "keywords",
        content:
          "Accio Work, AI सोर्सिंग, सप्लायर सर्च, मार्केट एनालिसिस, बिज़नेस ऑटोमेशन, AI असिस्टेंट, ई-कॉमर्स, प्रतिस्पर्धी विश्लेषण, AI कंटेंट",
      },
      { property: "og:locale", content: "hi_IN" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:title", content: "Accio Work | सोर्सिंग और बिज़नेस ऑटोमेशन के लिए AI प्लेटफ़ॉर्म" },
      {
        property: "og:description",
        content:
          "Accio Work, AI वर्कस्पेस: मार्केट एनालिसिस, सप्लायर तुलना, कंटेंट निर्माण और प्रक्रियाओं का ऑटोमेशन।",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Accio Work" },
      { property: "og:url", content: "https://acciowork.pro/hi" },
      { property: "og:image", content: "https://acciowork.pro/og/og-hi.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:alt", content: "Accio Work, सोर्सिंग, एनालिसिस और ऑटोमेशन के लिए AI वर्कस्पेस" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Accio Work | सोर्सिंग के लिए AI प्लेटफ़ॉर्म" },
      { name: "twitter:description", content: "AI वर्कस्पेस: सोर्सिंग, प्रतिस्पर्धी विश्लेषण, कंटेंट और ऑटोमेशन।" },
      { name: "twitter:image", content: "https://acciowork.pro/og/og-hi.png" },
      { name: "twitter:image:alt", content: "Accio Work, बिज़नेस के लिए AI प्लेटफ़ॉर्म" },
    ],
    links: [
      { rel: "canonical", href: "https://acciowork.pro/hi" },
      { rel: "alternate", hrefLang: "en", href: "https://acciowork.pro/" },
      { rel: "alternate", hrefLang: "ru", href: "https://acciowork.pro/ru" },
      { rel: "alternate", hrefLang: "de", href: "https://acciowork.pro/de" },
      { rel: "alternate", hrefLang: "it", href: "https://acciowork.pro/it" },
      { rel: "alternate", hrefLang: "es", href: "https://acciowork.pro/es" },
      { rel: "alternate", hrefLang: "zh", href: "https://acciowork.pro/zh" },
      { rel: "alternate", hrefLang: "pt", href: "https://acciowork.pro/pt" },
      { rel: "alternate", hrefLang: "hi", href: "https://acciowork.pro/hi" },
      { rel: "alternate", hrefLang: "fr", href: "https://acciowork.pro/fr" },
      { rel: "alternate", hrefLang: "x-default", href: "https://acciowork.pro/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Accio Work",
          url: "https://acciowork.pro/hi",
          inLanguage: "hi-IN",
          description:
            "AI वर्कस्पेस: मार्केट एनालिसिस, सप्लायर तुलना, कंटेंट निर्माण और प्रक्रियाओं का ऑटोमेशन।",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Accio Work",
          url: "https://acciowork.pro/",
          logo: "https://acciowork.pro/favicon.svg",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Accio Work",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, macOS, Windows",
          inLanguage: "hi-IN",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }),
      },
    ],
  }),
});

function IndexHi() {
  return <LandingPage />;
}