import type { Lang } from "@/lib/translations";
import { REFERRAL_URL } from "./FreeForeverPage";

type Dict = {
  badge: string;
  title: string;
  titleAccent: string;
  lead: string[];
  headline: string;
  sub: string;
  bullets: { icon: string; title: string; desc: string }[];
  beforeLabel: string;
  afterLabel: string;
  beforeNote: string;
  afterNote: string;
  cta: string;
  note: string;
};

const D: Record<Lang, Dict> = {
  en: {
    badge: "Product update",
    title: "Same plan.",
    titleAccent: "About 50% more done.",
    lead: [
      "“You're out of credits.” And it's not even mid-month.",
      "So we pushed that message further down the calendar.",
    ],
    headline: "We thought so too.",
    sub: "So we made every credit go further. Generate images. Build sites. Negotiate with suppliers. Tasks that used to burn lots of credits are now much cheaper.",
    bullets: [
      { icon: "🖼️", title: "Image generation", desc: "Product shots and ad creatives at a fraction of the previous credit cost." },
      { icon: "🌐", title: "Site building", desc: "Landing pages and stores generated end to end without draining your plan." },
      { icon: "🤝", title: "Supplier negotiation", desc: "Long agent conversations now cost far fewer credits per task." },
      { icon: "⚡", title: "Auto model", desc: "Pick the auto model and Accio Work chooses the cheapest engine per task." },
    ],
    beforeLabel: "Before",
    afterLabel: "Now",
    beforeNote: "20 / 20 credits, 100% used by mid-month",
    afterNote: "Same plan, roughly 50% more tasks completed",
    cta: "Update and try it free",
    note: "Update to the latest version, choose the auto model and see for yourself.",
  },
  ru: {
    badge: "Обновление продукта",
    title: "Тот же тариф.",
    titleAccent: "Примерно на 50% больше задач.",
    lead: [
      "«У вас закончились кредиты». А ведь ещё даже не середина месяца.",
      "Мы отодвинули это сообщение дальше по календарю.",
    ],
    headline: "Мы тоже так думали.",
    sub: "Поэтому сделали так, чтобы каждый кредит работал дольше. Генерация изображений, создание сайтов, переговоры с поставщиками, задачи, которые раньше съедали кучу кредитов, стали заметно дешевле.",
    bullets: [
      { icon: "🖼️", title: "Генерация изображений", desc: "Карточки товаров и креативы стоят в разы меньше кредитов." },
      { icon: "🌐", title: "Создание сайтов", desc: "Лендинги и магазины собираются целиком, не опустошая тариф." },
      { icon: "🤝", title: "Переговоры с поставщиками", desc: "Длинные диалоги агента теперь требуют значительно меньше кредитов." },
      { icon: "⚡", title: "Авто-модель", desc: "Включите авто-модель, Accio Work сам выберет самый экономный движок." },
    ],
    beforeLabel: "Было",
    afterLabel: "Стало",
    beforeNote: "20 / 20 кредитов, 100% израсходовано к середине месяца",
    afterNote: "Тот же тариф, примерно на 50% больше выполненных задач",
    cta: "Обновить и попробовать бесплатно",
    note: "Обновитесь до последней версии, выберите авто-модель и проверьте сами.",
  },
  de: {
    badge: "Produkt-Update",
    title: "Gleicher Plan.",
    titleAccent: "Rund 50% mehr erledigt.",
    lead: [
      "„Deine Credits sind aufgebraucht.“ Und es ist nicht einmal Monatsmitte.",
      "Also haben wir diese Meldung weiter nach hinten verschoben.",
    ],
    headline: "Das fanden wir auch.",
    sub: "Deshalb reicht jedes Credit jetzt weiter. Bilder generieren, Websites bauen, mit Lieferanten verhandeln, Aufgaben, die früher viele Credits verbrannt haben, sind deutlich günstiger.",
    bullets: [
      { icon: "🖼️", title: "Bildgenerierung", desc: "Produktfotos und Ad-Creatives für einen Bruchteil der bisherigen Credits." },
      { icon: "🌐", title: "Website-Erstellung", desc: "Landingpages und Shops komplett generiert, ohne den Plan zu leeren." },
      { icon: "🤝", title: "Lieferantenverhandlung", desc: "Lange Agenten-Dialoge kosten pro Aufgabe deutlich weniger Credits." },
      { icon: "⚡", title: "Auto-Modell", desc: "Auto-Modell wählen und Accio Work nimmt die günstigste Engine je Aufgabe." },
    ],
    beforeLabel: "Vorher",
    afterLabel: "Jetzt",
    beforeNote: "20 / 20 Credits, zur Monatsmitte zu 100% verbraucht",
    afterNote: "Gleicher Plan, rund 50% mehr erledigte Aufgaben",
    cta: "Updaten und kostenlos testen",
    note: "Auf die neueste Version updaten, Auto-Modell wählen und selbst sehen.",
  },
  it: {
    badge: "Aggiornamento prodotto",
    title: "Stesso piano.",
    titleAccent: "Circa il 50% in più di lavoro.",
    lead: [
      "«Crediti esauriti.» E non è nemmeno metà mese.",
      "Così abbiamo spostato quel messaggio più avanti nel calendario.",
    ],
    headline: "La pensavamo uguale.",
    sub: "Per questo ogni credito rende di più. Generare immagini, creare siti, trattare con i fornitori: attività che prima consumavano molti crediti ora costano molto meno.",
    bullets: [
      { icon: "🖼️", title: "Generazione immagini", desc: "Foto prodotto e creatività pubblicitarie a una frazione dei crediti." },
      { icon: "🌐", title: "Creazione siti", desc: "Landing page e store generati per intero senza svuotare il piano." },
      { icon: "🤝", title: "Trattative fornitori", desc: "Le lunghe conversazioni dell'agente costano molti meno crediti." },
      { icon: "⚡", title: "Modello auto", desc: "Scegli il modello auto: Accio Work usa il motore più economico per ogni task." },
    ],
    beforeLabel: "Prima",
    afterLabel: "Ora",
    beforeNote: "20 / 20 crediti, 100% usati a metà mese",
    afterNote: "Stesso piano, circa il 50% di attività in più completate",
    cta: "Aggiorna e prova gratis",
    note: "Aggiorna all'ultima versione, scegli il modello auto e verifica tu stesso.",
  },
  es: {
    badge: "Actualización de producto",
    title: "El mismo plan.",
    titleAccent: "Cerca de un 50% más de trabajo.",
    lead: [
      "«Te quedaste sin créditos». Y ni siquiera es mitad de mes.",
      "Así que empujamos ese mensaje más adelante en el calendario.",
    ],
    headline: "Nosotros pensábamos igual.",
    sub: "Por eso cada crédito rinde más. Generar imágenes, crear sitios, negociar con proveedores: tareas que antes consumían muchos créditos ahora cuestan mucho menos.",
    bullets: [
      { icon: "🖼️", title: "Generación de imágenes", desc: "Fotos de producto y creatividades por una fracción de los créditos." },
      { icon: "🌐", title: "Creación de sitios", desc: "Landings y tiendas generadas completas sin vaciar tu plan." },
      { icon: "🤝", title: "Negociación con proveedores", desc: "Las conversaciones largas del agente cuestan muchos menos créditos." },
      { icon: "⚡", title: "Modelo auto", desc: "Elige el modelo auto y Accio Work usa el motor más barato en cada tarea." },
    ],
    beforeLabel: "Antes",
    afterLabel: "Ahora",
    beforeNote: "20 / 20 créditos, 100% usados a mitad de mes",
    afterNote: "El mismo plan, cerca de un 50% más de tareas completadas",
    cta: "Actualiza y pruébalo gratis",
    note: "Actualiza a la última versión, elige el modelo auto y compruébalo.",
  },
  pt: {
    badge: "Atualização do produto",
    title: "O mesmo plano.",
    titleAccent: "Cerca de 50% mais entregue.",
    lead: [
      "“Seus créditos acabaram.” E nem chegou a metade do mês.",
      "Então empurramos essa mensagem para bem mais adiante no calendário.",
    ],
    headline: "Nós também achávamos isso.",
    sub: "Por isso cada crédito rende mais. Gerar imagens, criar sites, negociar com fornecedores: tarefas que antes queimavam muitos créditos ficaram bem mais baratas.",
    bullets: [
      { icon: "🖼️", title: "Geração de imagens", desc: "Fotos de produto e criativos por uma fração dos créditos anteriores." },
      { icon: "🌐", title: "Criação de sites", desc: "Landing pages e lojas geradas por completo sem esvaziar o plano." },
      { icon: "🤝", title: "Negociação com fornecedores", desc: "Conversas longas do agente custam bem menos créditos por tarefa." },
      { icon: "⚡", title: "Modelo auto", desc: "Escolha o modelo auto e o Accio Work usa o motor mais barato por tarefa." },
    ],
    beforeLabel: "Antes",
    afterLabel: "Agora",
    beforeNote: "20 / 20 créditos, 100% usados na metade do mês",
    afterNote: "O mesmo plano, cerca de 50% mais tarefas concluídas",
    cta: "Atualize e teste grátis",
    note: "Atualize para a versão mais recente, escolha o modelo auto e veja você mesmo.",
  },
  zh: {
    badge: "产品更新",
    title: "同样的套餐。",
    titleAccent: "多完成约 50% 的任务。",
    lead: [
      "“积分用完了。”可这个月才刚过一半。",
      "于是我们把这条提示，往后推到了更远的日子。",
    ],
    headline: "我们也这么觉得。",
    sub: "所以我们让每一点积分都更耐用。生成图片、搭建网站、与供应商谈判，过去很费积分的任务，现在便宜得多。",
    bullets: [
      { icon: "🖼️", title: "图片生成", desc: "产品图和广告素材的积分消耗大幅下降。" },
      { icon: "🌐", title: "网站搭建", desc: "落地页和店铺可一次生成，不再掏空套餐。" },
      { icon: "🤝", title: "供应商谈判", desc: "长对话的智能体任务，单次积分消耗明显更低。" },
      { icon: "⚡", title: "自动模型", desc: "选择自动模型，Accio Work 会为每个任务挑选最省的引擎。" },
    ],
    beforeLabel: "此前",
    afterLabel: "现在",
    beforeNote: "20 / 20 积分，月中已 100% 用完",
    afterNote: "同样的套餐，多完成约 50% 的任务",
    cta: "更新并免费体验",
    note: "更新到最新版本，选择自动模型，亲自体验。",
  },
  hi: {
    badge: "प्रोडक्ट अपडेट",
    title: "वही प्लान।",
    titleAccent: "लगभग 50% ज़्यादा काम।",
    lead: [
      "“आपके क्रेडिट खत्म हो गए।” और महीना अभी आधा भी नहीं हुआ।",
      "इसलिए हमने यह मैसेज कैलेंडर में काफ़ी आगे खिसका दिया।",
    ],
    headline: "हमें भी यही लगा।",
    sub: "इसलिए हमने हर क्रेडिट को ज़्यादा दूर तक चलाया। इमेज बनाना, साइट बनाना, सप्लायर से बातचीत, जो काम पहले बहुत क्रेडिट खाते थे, अब काफ़ी सस्ते हैं।",
    bullets: [
      { icon: "🖼️", title: "इमेज जनरेशन", desc: "प्रोडक्ट फ़ोटो और ऐड क्रिएटिव अब बहुत कम क्रेडिट में।" },
      { icon: "🌐", title: "साइट बनाना", desc: "लैंडिंग पेज और स्टोर पूरे बनते हैं, प्लान खाली किए बिना।" },
      { icon: "🤝", title: "सप्लायर बातचीत", desc: "एजेंट की लंबी बातचीत अब प्रति टास्क कम क्रेडिट लेती है।" },
      { icon: "⚡", title: "ऑटो मॉडल", desc: "ऑटो मॉडल चुनें, Accio Work हर टास्क के लिए सबसे किफ़ायती इंजन चुनेगा।" },
    ],
    beforeLabel: "पहले",
    afterLabel: "अब",
    beforeNote: "20 / 20 क्रेडिट, महीने के बीच में ही 100% खर्च",
    afterNote: "वही प्लान, लगभग 50% ज़्यादा टास्क पूरे",
    cta: "अपडेट करें और मुफ़्त आज़माएँ",
    note: "नए वर्ज़न पर अपडेट करें, ऑटो मॉडल चुनें और खुद देखें।",
  },
  fr: {
    badge: "Mise à jour produit",
    title: "Le même forfait.",
    titleAccent: "Environ 50% de tâches en plus.",
    lead: [
      "« Vous n'avez plus de crédits. » Et on n'est même pas à la moitié du mois.",
      "Nous avons donc repoussé ce message beaucoup plus loin dans le calendrier.",
    ],
    headline: "On s'est dit pareil.",
    sub: "Chaque crédit va désormais plus loin. Générer des images, créer des sites, négocier avec les fournisseurs : les tâches qui consommaient beaucoup de crédits coûtent bien moins cher.",
    bullets: [
      { icon: "🖼️", title: "Génération d'images", desc: "Visuels produits et créas publicitaires pour une fraction des crédits." },
      { icon: "🌐", title: "Création de sites", desc: "Landing pages et boutiques générées de bout en bout sans vider le forfait." },
      { icon: "🤝", title: "Négociation fournisseurs", desc: "Les longues conversations de l'agent coûtent bien moins de crédits." },
      { icon: "⚡", title: "Modèle auto", desc: "Choisissez le modèle auto : Accio Work prend le moteur le moins cher par tâche." },
    ],
    beforeLabel: "Avant",
    afterLabel: "Maintenant",
    beforeNote: "20 / 20 crédits, 100% utilisés à la mi-mois",
    afterNote: "Le même forfait, environ 50% de tâches en plus",
    cta: "Mettre à jour et essayer gratuitement",
    note: "Passez à la dernière version, choisissez le modèle auto et jugez par vous-même.",
  },
};

export function CreditsUpdate({ lang }: { lang: Lang }) {
  const d = D[lang];
  return (
    <section className="bg-[#F0FFF4] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold tracking-wide text-[#0FA44F] shadow-sm">
          {d.badge}
        </span>
        <h2 className="mt-5 text-[32px] font-bold leading-[1.15] tracking-tight md:text-[44px]">
          {d.title} <span className="text-[#0FA44F]">{d.titleAccent}</span>
        </h2>
        <div className="mt-4 max-w-[720px] space-y-1 text-[17px] leading-relaxed text-[#1a1a2e]/70 md:text-[18px]">
          {d.lead.map((l) => (
            <p key={l}>{l}</p>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-[28px] bg-card p-7 shadow-sm md:p-9">
            <h3 className="text-[24px] font-bold md:text-[28px]">{d.headline}</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-[#1a1a2e]/70">{d.sub}</p>

            <div className="mt-7 space-y-5">
              <div>
                <div className="flex items-center justify-between text-sm font-medium text-[#1a1a2e]/60">
                  <span>{d.beforeLabel}</span>
                  <span>100%</span>
                </div>
                <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-[#1a1a2e]/10">
                  <div className="h-full w-full rounded-full bg-[#e5484d]" />
                </div>
                <p className="mt-2 text-xs text-[#1a1a2e]/50">{d.beforeNote}</p>
              </div>
              <div>
                <div className="flex items-center justify-between text-sm font-medium text-[#1a1a2e]/60">
                  <span>{d.afterLabel}</span>
                  <span>+50%</span>
                </div>
                <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-[#1a1a2e]/10">
                  <div className="h-full w-[66%] rounded-full bg-[#0FA44F]" />
                </div>
                <p className="mt-2 text-xs text-[#1a1a2e]/50">{d.afterNote}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {d.bullets.map((b) => (
              <div key={b.title} className="rounded-[24px] bg-card p-6 shadow-sm">
                <div className="text-2xl">{b.icon}</div>
                <h4 className="mt-3 text-[16px] font-semibold">{b.title}</h4>
                <p className="mt-2 text-[14px] leading-relaxed text-[#1a1a2e]/65">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#1a1a2e] px-7 py-3.5 text-[15px] font-semibold text-white transition hover:bg-[#0FA44F]"
          >
            {d.cta}
          </a>
          <p className="text-[14px] text-[#1a1a2e]/60">{d.note}</p>
        </div>
      </div>
    </section>
  );
}
