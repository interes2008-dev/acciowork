
CREATE TABLE public.blog_topics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  seed_title TEXT NOT NULL,
  angle TEXT NOT NULL,
  keyword TEXT NOT NULL,
  audience TEXT NOT NULL,
  capability TEXT NOT NULL,
  used_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT ALL ON public.blog_topics TO service_role;
ALTER TABLE public.blog_topics ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.blog_articles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  topic_id UUID REFERENCES public.blog_topics(id) ON DELETE SET NULL,
  lang TEXT NOT NULL CHECK (lang IN ('en','ru','de')),
  slug TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  keywords TEXT[] NOT NULL DEFAULT '{}',
  cover_prompt TEXT,
  cover_url TEXT,
  body_md TEXT NOT NULL,
  reading_minutes INT NOT NULL DEFAULT 6,
  status TEXT NOT NULL DEFAULT 'published' CHECK (status IN ('draft','published')),
  published_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX blog_articles_lang_slug_key ON public.blog_articles(lang, slug);
CREATE INDEX blog_articles_lang_pub_idx ON public.blog_articles(lang, published_at DESC);
CREATE INDEX blog_articles_topic_idx ON public.blog_articles(topic_id);

GRANT SELECT ON public.blog_articles TO anon, authenticated;
GRANT ALL ON public.blog_articles TO service_role;
ALTER TABLE public.blog_articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read published articles"
  ON public.blog_articles FOR SELECT
  USING (status = 'published');

-- Seed 40 starter topics grounded in Accio Work capabilities
INSERT INTO public.blog_topics (seed_title, angle, keyword, audience, capability) VALUES
('How AI agents can run your daily operations','operator playbook','ai agents for business','founders','Agent Hub'),
('Building a personal CEO, CTO and CMO with AI','role-based agent teams','ai executive assistant','solo founders','Agent Hub'),
('Switching between Gemini, GPT and Claude for one workflow','model comparison','best llm for work','operators','Agent Hub'),
('Automating morning market briefings with scheduled agents','before-your-first-coffee routine','automated market research','ecommerce owners','Automations'),
('Daily competitor watch on autopilot','set once, forget','competitor monitoring tool','marketers','Automations'),
('Weekly Shopify report your team actually reads','scheduled reports','shopify automation','store owners','Automations'),
('Letting an agent browse the web for you','browser control primer','ai web automation','researchers','Browser'),
('Product research without a hundred open tabs','tab overload cure','ai product research','sourcing managers','Browser'),
('Turning your inbox into an assistant with Gmail connector','inbox triage','gmail automation','busy operators','Connectors'),
('Connecting LinkedIn to your AI workspace','sales prospecting','linkedin automation','sales teams','Connectors'),
('Reading Reddit and X in one AI dashboard','social listening','social listening tool','brand teams','Connectors'),
('Bringing Shopify orders into a chat you can question','conversational analytics','shopify analytics','ecommerce operators','Connectors'),
('Skills, or how to teach an agent something new','extending agents','ai agent skills','builders','Skills'),
('A library of 140 marketing skills you can install','marketing playbooks','marketing ideas library','marketers','Skills'),
('Writing your own agent skill in an afternoon','no-code skill authoring','custom ai skills','builders','Skills'),
('Answering customers in Telegram with your own agent','telegram bot without code','telegram ai bot','support leads','Channels'),
('Running a Discord community with an AI moderator','always-on presence','discord ai bot','community managers','Channels'),
('Pairing WeChat and Feishu to one workspace','multi-channel ops','wechat automation','asia-facing teams','Channels'),
('Approving what your bot can do, per user','permission model','ai bot access control','ops leads','Pairing'),
('Keeping every device on the same agent state','sync without fuss','ai across devices','remote teams','Pairing'),
('A team of agents that argue like a real board','multi-agent collaboration','ai team workspace','startup teams','Teams'),
('When to hand a task to a team versus a single agent','routing decisions','ai team vs agent','operators','Teams'),
('Sourcing suppliers on Alibaba without wading through pages','sourcing routine','alibaba supplier search','importers','Browser'),
('Trend analysis your marketing team can act on','from data to campaign','trend analysis tool','growth teams','Automations'),
('Content calendars your agent actually fills','from prompt to plan','ai content calendar','content leads','Skills'),
('SEO audits an agent runs for you every Monday','recurring seo checks','ai seo audit','seo specialists','Automations'),
('Writing product descriptions that sell, in bulk','listing quality','ai product descriptions','ecommerce owners','Skills'),
('Getting your first agent to write in your voice','voice and tone tuning','ai brand voice','solo founders','Agent Hub'),
('The end of manual data entry in customer support','ticket triage','ai customer support','support leads','Automations'),
('Meeting notes that turn into action items automatically','from transcript to task','ai meeting notes','managers','Automations'),
('A Monday routine for a data-driven store owner','operator ritual','ecommerce weekly review','store owners','Teams'),
('Choosing between chat, teams and automations','when to pick what','ai workspace decisions','new users','Agent Hub'),
('Growing a niche brand with a two-agent marketing team','indie marketing','indie brand marketing','indie founders','Teams'),
('Building a research team of AI analysts','deep research','ai research team','analysts','Teams'),
('Cutting your tool stack with one AI workspace','consolidation','reduce saas stack','operators','Connectors'),
('Turning Notion, Slack and Gmail into one command line','unified interface','ai command bar','power users','Connectors'),
('How local execution changes what you trust an agent with','privacy story','local ai agent','privacy-minded teams','Pairing'),
('Publishing across TikTok, Instagram and X without switching apps','one queue','social publishing tool','creators','Channels'),
('Weekly board updates written by your agent team','executive briefings','ai board report','executives','Teams'),
('From idea to landing page in one afternoon with AI','shipping speed','launch faster','indie hackers','Skills');
