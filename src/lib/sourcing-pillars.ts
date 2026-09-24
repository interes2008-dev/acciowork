export const SOURCING_CTA_URL =
  "https://www.accio.com/login?sId=KECtp1GttZ42%2FwpJUH5IxQ%3D%3D&ic=IC506004212009&tenant=accio&src=p_referral_IC506004212009&source=invite_center&return_url=https%3A%2F%2Fwww.accio.com%2Fwork%2F";

export type PillarRow = {
  supplier: string;
  type: string;
  price: string;
  moq: string;
  certs: string;
  risk: number; // 0-100, lower is safer
};

export type Pillar = {
  slug: string;
  n: number;
  badge: string;
  title: string;
  seoTitle: string;
  description: string;
  keywords: string[];
  readingMinutes: number;
  hookTitle: string;
  hook: string[];
  painStats: { value: string; label: string }[];
  prompt: string;
  newWay: string[];
  artifactCaption: string;
  rows: PillarRow[];
  artifactNote?: string;
  extraTable?: { caption: string; head: string[]; rows: string[][] };
  steps: { title: string; body: string }[];
  copyPrompts: { label: string; text: string }[];
  widget: "savings" | "landed";
  faq: { q: string; a: string }[];
};

export const PILLARS: Pillar[] = [
  {
    slug: "how-to-find-verified-china-suppliers-ai",
    n: 1,
    badge: "Supplier vetting",
    title: "How to Find and Vet Direct Chinese Manufacturers in Minutes (Without Middlemen)",
    seoTitle: "Find Verified China Suppliers with AI - Vet Factories Fast",
    description:
      "Tell real OEM/ODM factories from trading companies, check licenses and ISO/BSCI certificates automatically, and shortlist verified Chinese suppliers in minutes with an AI sourcing agent.",
    keywords: [
      "sourcing in China",
      "Alibaba verified suppliers",
      "vet factory China",
      "AI sourcing agent",
      "OEM factory China",
    ],
    readingMinutes: 8,
    hookTitle: "The real cost of \"just search Alibaba\"",
    hook: [
      "Type \"portable blender\" into any B2B marketplace and you get thousands of listings. A large share are trading companies reselling the same factory output with a markup - and many look identical to the actual manufacturer.",
      "The manual way: open 40 tabs, compare photos, message 15 sellers, wait for replies across time zones, then try to verify business licenses written in Chinese. Most buyers burn a full week before they even know who actually makes the product.",
    ],
    painStats: [
      { value: "5-10 days", label: "typical manual shortlist time" },
      { value: "15-30%", label: "markup a middleman can add" },
      { value: "0", label: "certificates you can read without Chinese" },
    ],
    prompt:
      "Find 5 verified OEM factories for portable blenders under $6, MOQ < 300, with CE certification. Exclude trading companies. For each: business license check, years in operation, factory size, certifications, and a risk score. Save as a spreadsheet.",
    newWay: [
      "Accio Work is not a chatbot that guesses. It is a team of AI agents that search live across Alibaba data - 400M+ products and 1.5M+ verified suppliers - read the supplier profiles and spec sheets, and return a structured shortlist.",
      "The agent flags who is a manufacturer vs. a trading company (registered business scope, factory address, production lines, R&D staff), checks the certificates listed on the profile, and scores each supplier by risk.",
    ],
    artifactCaption: "Agent output: verified OEM shortlist (sample format)",
    rows: [
      { supplier: "Ningbo factory A", type: "OEM/ODM manufacturer", price: "$4.80-5.60", moq: "200", certs: "CE, RoHS, ISO 9001", risk: 12 },
      { supplier: "Shenzhen factory B", type: "OEM manufacturer", price: "$5.10-5.90", moq: "300", certs: "CE, FCC, BSCI", risk: 18 },
      { supplier: "Zhongshan factory C", type: "ODM manufacturer", price: "$4.40-5.20", moq: "500", certs: "CE, ISO 9001", risk: 27 },
      { supplier: "Guangzhou seller D", type: "Trading company", price: "$5.50-6.40", moq: "100", certs: "CE (reseller copy)", risk: 61 },
    ],
    artifactNote:
      "Sample output format. Supplier names anonymized - your agent returns real profiles and links.",
    extraTable: {
      caption: "Manufacturer vs. trading company - what the agent checks",
      head: ["Signal", "Real factory", "Trading company"],
      rows: [
        ["Business scope on license", "Production / manufacturing", "Trade, import/export only"],
        ["Product range", "Narrow, one category", "Dozens of unrelated categories"],
        ["Factory address & photos", "Industrial zone, production lines", "Office building, stock photos"],
        ["Custom mold / OEM", "Offers tooling and logo work", "Redirects to \"our partner\""],
        ["Price vs. peers", "Lowest tier at volume", "Consistently higher"],
      ],
    },
    steps: [
      { title: "Always state your hard filters in the first prompt", body: "Price ceiling, MOQ, certifications and \"exclude trading companies\". Agents filter precisely when constraints are explicit." },
      { title: "Ask for the evidence, not just a verdict", body: "Request the license business scope, factory area and certificate numbers per supplier, so you can spot-check anything that looks off." },
      { title: "Keep 5, not 50", body: "A tight shortlist of 5 vetted factories beats 50 unknowns. Send RFQs only to the top 3-5 by risk score." },
      { title: "Re-verify certificates before paying", body: "Ask the agent to cross-check certificate numbers against the issuing body and note expiry dates." },
    ],
    copyPrompts: [
      { label: "Factory vs. trader check", text: "For these 10 supplier links, tell me which are real manufacturers and which are trading companies. Show the evidence for each (business scope, factory address, product range)." },
      { label: "Certificate audit", text: "List every certificate each supplier claims (CE, ISO 9001, BSCI, FCC). Flag missing, expired or unverifiable ones and save the results to a spreadsheet." },
    ],
    widget: "savings",
    faq: [
      { q: "How do I know if a Chinese supplier is a real factory?", a: "Check the registered business scope on the license (manufacturing vs. trade), the factory address and photos, product range width, and whether they offer custom tooling. Accio Work checks these signals automatically and flags trading companies." },
      { q: "Are Alibaba verified suppliers always manufacturers?", a: "No. Verification confirms the business exists and was inspected, but verified sellers can still be trading companies. Always check the business type." },
      { q: "Can AI read Chinese business licenses and certificates?", a: "Yes. Accio Work's agents read supplier profiles, spec sheets and documents and summarize them in your language." },
    ],
  },
  {
    slug: "ai-supplier-negotiation-moq-price",
    n: 2,
    badge: "Negotiation & RFQ",
    title: "Automating Supplier Negotiations: Getting Lower MOQs and Better Prices via AI",
    seoTitle: "Negotiate with Chinese Suppliers via AI - Lower MOQ & Price",
    description:
      "How autonomous AI agents draft professional RFQs in Chinese and English, follow up 24/7 and compare quotes in one spreadsheet - so you get lower MOQs and better prices from Chinese suppliers.",
    keywords: [
      "negotiate with Chinese suppliers",
      "lower MOQ Alibaba",
      "automated RFQ",
      "supplier bargaining AI",
    ],
    readingMinutes: 7,
    hookTitle: "Why most buyers overpay by default",
    hook: [
      "Suppliers quote high on the first message because most buyers never push back. The ones who get the best terms send clear RFQs to several factories at once, follow up fast, and compare apples to apples.",
      "Doing that manually means writing in a second language, tracking 10 threads across a 12-hour time difference, and rebuilding every quote into the same format. So most people accept the first reasonable offer.",
    ],
    painStats: [
      { value: "12 h", label: "time zone gap that slows replies" },
      { value: "1-2", label: "quotes most buyers compare" },
      { value: "5+", label: "quotes you need for real leverage" },
    ],
    prompt:
      "Send an RFQ to my 5 shortlisted suppliers for 500 units of portable blenders with custom logo. Write in English and Chinese. Ask for tiered pricing at 300/500/1000 units, MOQ flexibility, sample cost, lead time and payment terms. Follow up after 24h if no reply, then put all quotes in one comparison spreadsheet.",
    newWay: [
      "The agent writes a professional, specific RFQ in both languages - the kind factories take seriously - and sends it to every supplier on your list.",
      "It follows up on schedule, extracts each answer into the same columns and uses competing quotes as leverage: \"Supplier B offers MOQ 200 at $5.10 - can you match?\" You approve every counter-offer before it goes out.",
    ],
    artifactCaption: "Agent output: quote comparison after 2 negotiation rounds (sample)",
    rows: [
      { supplier: "Factory A", type: "OEM", price: "$5.60 -> $5.05", moq: "500 -> 250", certs: "CE, RoHS", risk: 14 },
      { supplier: "Factory B", type: "OEM", price: "$5.40 -> $5.10", moq: "300 -> 200", certs: "CE, FCC, BSCI", risk: 18 },
      { supplier: "Factory C", type: "ODM", price: "$5.20 -> $4.85", moq: "1000 -> 500", certs: "CE, ISO 9001", risk: 25 },
      { supplier: "Factory D", type: "OEM", price: "$6.10 (no reply)", moq: "300", certs: "CE", risk: 40 },
    ],
    artifactNote: "Illustrative numbers showing the format. Actual results depend on product, volume and supplier.",
    steps: [
      { title: "Quote at three volume tiers", body: "Asking for 300/500/1000 pricing reveals the supplier's real cost curve and where MOQ is negotiable." },
      { title: "Trade MOQ for something else", body: "Offer a slightly higher unit price, a longer lead time, or a standard color in exchange for a lower MOQ on your first order." },
      { title: "Use competing quotes - politely", body: "Share the best competing term without naming the supplier. Factories respond to specifics, not \"give me your best price\"." },
      { title: "Lock terms in writing", body: "Ask the agent to summarize final price, MOQ, sample cost, lead time and payment terms in one confirmation message." },
    ],
    copyPrompts: [
      { label: "Bilingual RFQ", text: "Draft an RFQ in English and Simplified Chinese for [product], [quantity] units, custom logo. Ask for pricing at 3 tiers, MOQ, sample cost, lead time, payment terms and packaging options." },
      { label: "Counter-offer round", text: "Compare all quotes in my spreadsheet. For each supplier, draft a polite counter-offer using the best competing term (without naming competitors). Wait for my approval before sending." },
    ],
    widget: "savings",
    faq: [
      { q: "Can I really get a lower MOQ from Alibaba suppliers?", a: "Often yes, especially on first orders, if you offer a trade-off such as a small unit price increase, standard colors or longer lead time, and show you have alternatives." },
      { q: "Does the AI send messages without my approval?", a: "You decide. Accio Work can draft messages for review or follow up automatically within the rules you set." },
      { q: "Should RFQs be in Chinese?", a: "A bilingual RFQ reduces misunderstandings and signals a serious buyer. The agent writes both versions for you." },
    ],
  },
  {
    slug: "china-import-risk-audit-landed-cost",
    n: 3,
    badge: "Landed cost & risk",
    title: "Safe B2B Importing in 2026: Landed Cost Calculation & Risk Audit Guide",
    seoTitle: "Calculate Landed Cost from China & Audit Import Risks (2026)",
    description:
      "A full landed cost breakdown - ex-works, freight, tariffs, customs and fees - plus a Trade Assurance and supplier risk audit checklist for importing from China safely in 2026.",
    keywords: [
      "calculate landed cost",
      "import from China risks",
      "Trade Assurance audit",
      "customs and shipping fees",
    ],
    readingMinutes: 9,
    hookTitle: "A $5 product is never a $5 product",
    hook: [
      "The factory price is only the start. Freight, duties, customs brokerage, inspection and payment fees can add a large share on top - and tariff rules keep changing.",
      "Buyers who price on ex-works alone discover their margin at the port. Add an unvetted supplier or an order placed outside Trade Assurance, and one bad shipment can wipe out a quarter's profit.",
    ],
    painStats: [
      { value: "EXW + 6", label: "cost layers in a real landed cost" },
      { value: "1", label: "bad shipment to lose a quarter's margin" },
      { value: "2026", label: "tariff rules keep shifting - recheck each order" },
    ],
    prompt:
      "Calculate the landed cost to the US for 500 portable blenders at $5.10 EXW Shenzhen, sea freight LCL. Include freight, insurance, current US duty for the HS code, customs brokerage and payment fees. Then run a risk audit on the supplier: Trade Assurance coverage, dispute history, certificate validity. Save both to a spreadsheet.",
    newWay: [
      "The agent looks up the likely HS code, current duty context and freight estimates, and builds a line-by-line landed cost per unit - so you price with real margins.",
      "In parallel it audits the supplier: Trade Assurance eligibility, years active, response and dispute signals, certificate validity. Everything lands in one file you can share with your partner or accountant.",
    ],
    artifactCaption: "Agent output: supplier risk audit (sample)",
    rows: [
      { supplier: "Factory B", type: "OEM, 9 yrs", price: "$5.10 EXW", moq: "200", certs: "CE, FCC, BSCI - valid", risk: 16 },
      { supplier: "Factory A", type: "OEM, 6 yrs", price: "$5.05 EXW", moq: "250", certs: "CE valid, RoHS expiring", risk: 29 },
      { supplier: "Factory C", type: "ODM, 3 yrs", price: "$4.85 EXW", moq: "500", certs: "ISO 9001 unverified", risk: 44 },
    ],
    extraTable: {
      caption: "Landed cost breakdown per unit (illustrative, 500 units, LCL)",
      head: ["Cost layer", "Per unit", "Notes"],
      rows: [
        ["Product (EXW)", "$5.10", "Factory gate price"],
        ["Inland + export handling", "$0.15", "To port, export docs"],
        ["Sea freight (LCL)", "$0.70", "Volume-based, varies by season"],
        ["Insurance", "$0.04", "~0.5-1% of cargo value"],
        ["Import duty", "varies", "Depends on HS code and current tariffs - verify per order"],
        ["Customs brokerage & fees", "$0.30", "Broker fee, port and processing fees"],
        ["Payment / FX fees", "$0.15", "Trade Assurance, card or wire"],
      ],
    },
    steps: [
      { title: "Price on landed cost, never EXW", body: "Build margin on the full per-unit cost. Use the calculator below to see how each layer moves the number." },
      { title: "Pay inside Trade Assurance", body: "Keep order terms, specs and inspection requirements inside the protected order - never switch to off-platform payment on request." },
      { title: "Recheck duties on every order", body: "Tariff rates change. Ask the agent to confirm the HS code and current rate before you commit to a price." },
      { title: "Book a pre-shipment inspection", body: "For first orders, a third-party inspection costs little compared to a rejected batch." },
    ],
    copyPrompts: [
      { label: "Landed cost sheet", text: "Build a landed cost spreadsheet for [product] from [city], [quantity] units, [EXW price], shipping to [country] by [sea/air]. Include freight, insurance, duty for the likely HS code, brokerage and payment fees. Show cost per unit and total." },
      { label: "Supplier risk audit", text: "Audit these suppliers for import risk: Trade Assurance coverage, years active, certificate validity, dispute signals, response rate. Give each a 0-100 risk score with reasons." },
    ],
    widget: "landed",
    faq: [
      { q: "What is included in landed cost?", a: "Product price plus inland handling, international freight, insurance, import duties and taxes, customs brokerage and port fees, and payment or FX fees." },
      { q: "Does Trade Assurance protect every order?", a: "It covers orders placed and paid through the platform under its terms. Orders paid off-platform are not protected - keep everything inside the order." },
      { q: "Can AI tell me the exact import duty?", a: "The agent researches the likely HS code and current duty context, but always confirm final classification with your customs broker." },
    ],
  },
  {
    slug: "chatgpt-vs-accio-sourcing-agents",
    n: 4,
    badge: "AI agents vs chatbots",
    title: "Why ChatGPT Fails at Sourcing: Chatbots vs. Action-Driven AI Agents",
    seoTitle: "ChatGPT for Alibaba Sourcing? Chatbots vs AI Agents Compared",
    description:
      "Generic chatbots write text about suppliers. Action-driven AI agents search Alibaba and 1688, read spec sheets and save real shortlists to files. A side-by-side comparison for supply chain teams.",
    keywords: [
      "AI for supply chain",
      "ChatGPT for Alibaba",
      "autonomous business agents vs chatbots",
      "AI sourcing agent",
    ],
    readingMinutes: 6,
    hookTitle: "Ask a chatbot for suppliers and you get a nice paragraph",
    hook: [
      "Ask a general chatbot \"find me 5 blender factories in China\" and you'll get confident text - sometimes with suppliers that don't exist, outdated prices, or generic advice like \"check their reviews\".",
      "Sourcing is not a writing task. It is a sequence of actions: search live catalogs, open profiles, read spec sheets, compare, message, and save the results. A chatbot stops where the real work starts.",
    ],
    painStats: [
      { value: "Text", label: "what a chatbot delivers" },
      { value: "Files", label: "what an agent delivers" },
      { value: "400M+", label: "products an Accio agent can search" },
    ],
    prompt:
      "Search Alibaba and 1688 for silicone kitchen utensil sets, food-grade LFGB or FDA, under $3 per set, MOQ below 500. Open each supplier's spec sheet, confirm material and certifications, and save the top 5 to a spreadsheet with links.",
    newWay: [
      "Accio Work runs a team of agents with real tools: live search across Alibaba data, a browser to open supplier pages, file creation, and memory of your preferences.",
      "The result is not advice - it is a finished artifact: a verified shortlist with links, specs, prices and risk scores, saved where you can use it.",
    ],
    artifactCaption: "Same prompt - what each tool returns",
    rows: [
      { supplier: "Live supplier search", type: "Chatbot: no / Agent: yes", price: "-", moq: "-", certs: "-", risk: 0 },
    ],
    extraTable: {
      caption: "Comparison matrix: generic LLM chatbot vs. Accio Work agents",
      head: ["Capability", "Generic chatbot", "Accio Work agents"],
      rows: [
        ["Searches live Alibaba / 1688 listings", "No - relies on training data", "Yes - 400M+ products, 1.5M+ suppliers"],
        ["Reads supplier spec sheets & profiles", "No", "Yes - opens pages and documents"],
        ["Factory vs. trader verification", "Generic tips", "Evidence per supplier"],
        ["Drafts and sends RFQs", "Drafts text only", "Drafts, sends and follows up"],
        ["Structured output", "Markdown in chat", "Spreadsheets and files saved"],
        ["Runs on a schedule", "No", "Yes - automations"],
        ["Risk of invented suppliers", "High", "Results link to real listings"],
      ],
    },
    steps: [
      { title: "Use chatbots for thinking, agents for doing", body: "Brainstorm product ideas with any LLM. Hand the execution - search, verification, outreach - to an agent." },
      { title: "Demand links for every supplier", body: "If a tool can't give a live link to the listing, treat the supplier as unverified." },
      { title: "Ask for files, not answers", body: "End every sourcing prompt with \"save as a spreadsheet\". Structured output is what you can act on." },
    ],
    copyPrompts: [
      { label: "Agent-style sourcing prompt", text: "Search Alibaba for [product] under [price], MOQ below [n], with [certification]. Open each spec sheet, verify material and certificates, and save the top 5 with links, price tiers and risk score to a spreadsheet." },
    ],
    widget: "savings",
    faq: [
      { q: "Can ChatGPT find suppliers on Alibaba?", a: "A general chatbot can describe how to search, but without live access to supplier data it cannot reliably return real, current suppliers with prices and certifications." },
      { q: "What is an action-driven AI agent?", a: "An AI that uses tools to complete tasks - searching, browsing, messaging, creating files - instead of only generating text." },
      { q: "Is Accio Work connected to Alibaba data?", a: "Yes. Accio Work agents are backed by Alibaba data covering 400M+ products and 1.5M+ verified suppliers." },
    ],
  },
  {
    slug: "case-study-sourcing-electronics-48-hours",
    n: 5,
    badge: "Case study",
    title: "Case Study: Sourcing 1,000 Units of Electronics in 48 Hours with Zero Chinese Skills",
    seoTitle: "China Sourcing Case Study: 1,000 Electronics Units in 48h",
    description:
      "A step-by-step B2B procurement workflow: from one product prompt to 5 finalized supplier offers for 1,000 units of consumer electronics in 48 hours - no Chinese, no agent fees.",
    keywords: [
      "China sourcing case study",
      "B2B procurement workflow",
      "e-commerce supply chain automation",
    ],
    readingMinutes: 8,
    hookTitle: "The brief: 1,000 wireless earbuds, launch in 6 weeks",
    hook: [
      "An e-commerce seller needs 1,000 units of private-label wireless earbuds with Bluetooth 5.3, CE/FCC and custom packaging. No sourcing agent, no Chinese, and a launch date that doesn't move.",
      "The traditional path - hire a sourcing agent (often 5-10% commission) or spend two weeks messaging suppliers - didn't fit. This is the illustrative workflow of doing it with Accio Work in 48 hours.",
    ],
    painStats: [
      { value: "48 h", label: "prompt to 5 final offers" },
      { value: "0", label: "words of Chinese needed" },
      { value: "5", label: "supplier offers ready to sign" },
    ],
    prompt:
      "I need 1,000 private-label TWS earbuds, Bluetooth 5.3, ENC, 30h battery with case, CE and FCC, custom box. Target under $7.50/unit. Find 10 verified OEM factories, vet them, send bilingual RFQs, negotiate, and deliver the best 5 offers with landed cost to the US in a spreadsheet.",
    newWay: [
      "Hour 0-4: the agent searched and filtered 10 OEM factories with Bluetooth and CE/FCC evidence, removed 3 trading companies. Hour 4-8: bilingual RFQs sent with 3 volume tiers and sample requests.",
      "Hour 8-40: automatic follow-ups, quote extraction, two rounds of counter-offers approved by the seller. Hour 40-48: landed cost per supplier, risk audit, and a final comparison with draft order terms.",
    ],
    artifactCaption: "Final deliverable: top 5 offers (illustrative)",
    rows: [
      { supplier: "Shenzhen OEM 1", type: "OEM, BT specialist", price: "$6.90", moq: "500", certs: "CE, FCC, RoHS", risk: 11 },
      { supplier: "Shenzhen OEM 2", type: "OEM/ODM", price: "$7.10", moq: "1000", certs: "CE, FCC, BQB", risk: 15 },
      { supplier: "Dongguan OEM 3", type: "OEM", price: "$6.60", moq: "1000", certs: "CE, FCC", risk: 24 },
      { supplier: "Huizhou ODM 4", type: "ODM", price: "$7.40", moq: "300", certs: "CE, FCC, ISO 9001", risk: 19 },
      { supplier: "Shenzhen OEM 5", type: "OEM", price: "$6.75", moq: "800", certs: "CE, FCC", risk: 31 },
    ],
    artifactNote: "Illustrative workflow and figures showing the process and output format.",
    extraTable: {
      caption: "48-hour timeline",
      head: ["Window", "Agent action", "Human action"],
      rows: [
        ["0-4 h", "Search, filter, verify 10 OEM factories", "Write one prompt"],
        ["4-8 h", "Bilingual RFQs + sample requests", "Approve RFQ template"],
        ["8-40 h", "Follow-ups, quote extraction, 2 counter rounds", "Approve counter-offers (15 min)"],
        ["40-48 h", "Landed cost, risk audit, final comparison", "Pick 5, request samples"],
      ],
    },
    steps: [
      { title: "Put the whole brief in one prompt", body: "Specs, certifications, quantity, target price and deliverable format. The more complete the brief, the fewer back-and-forth rounds." },
      { title: "Set approval checkpoints", body: "Approve the RFQ template and each counter-offer round. You stay in control, the agent does the legwork." },
      { title: "Order samples from the top 2-3", body: "Always test physical samples before a 1,000-unit order - especially for electronics." },
      { title: "Schedule a weekly re-quote", body: "Use an automation to re-check prices and stock with your shortlist before each reorder." },
    ],
    copyPrompts: [
      { label: "Full sourcing brief", text: "I need [quantity] units of [product] with [key specs] and [certifications], custom [packaging/logo]. Target under [$price]/unit. Find 10 verified OEM factories, vet them, send bilingual RFQs, negotiate, and deliver the best 5 offers with landed cost to [country] in a spreadsheet." },
      { label: "Weekly re-quote automation", text: "Every Monday, ask my 5 shortlisted suppliers for current price, stock and lead time for [product] and update the comparison spreadsheet. Flag any change above 5%." },
    ],
    widget: "savings",
    faq: [
      { q: "Can I source from China without speaking Chinese?", a: "Yes. Accio Work writes and reads supplier communication in Chinese and English and summarizes everything in your language." },
      { q: "Do I still need a sourcing agent?", a: "For many orders, no. AI agents handle search, vetting, RFQs and negotiation. For complex quality control, a local inspector is still valuable." },
      { q: "How long does it take to get supplier offers?", a: "With complete briefs, structured offers from several suppliers can arrive within 24-48 hours, depending on supplier response times." },
    ],
  },
];

export const getPillar = (slug: string) => PILLARS.find((p) => p.slug === slug);

export function pillarHead(p: Pillar) {
  const url = `https://acciowork.pro/blog/${p.slug}`;
  const img = "https://acciowork.pro/og/og-en.png";
  return {
    meta: [
      { title: p.seoTitle },
      { name: "description", content: p.description },
      { name: "keywords", content: p.keywords.join(", ") },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: "Accio Work" },
      { property: "og:title", content: p.title },
      { property: "og:description", content: p.description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { property: "og:image", content: img },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: p.title },
      { name: "twitter:description", content: p.description },
      { name: "twitter:image", content: img },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          description: p.description,
          inLanguage: "en",
          image: img,
          datePublished: "2026-09-24",
          dateModified: "2026-09-24",
          keywords: p.keywords.join(", "),
          timeRequired: `PT${p.readingMinutes}M`,
          author: { "@type": "Organization", name: "Accio Work", url: "https://acciowork.pro" },
          publisher: {
            "@type": "Organization",
            name: "Accio Work",
            logo: { "@type": "ImageObject", url: "https://acciowork.pro/favicon.svg" },
          },
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: p.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accio Work", item: "https://acciowork.pro" },
            { "@type": "ListItem", position: 2, name: "China Sourcing Hub", item: "https://acciowork.pro/blog/china-sourcing" },
            { "@type": "ListItem", position: 3, name: p.title, item: url },
          ],
        }),
      },
    ],
  };
}
