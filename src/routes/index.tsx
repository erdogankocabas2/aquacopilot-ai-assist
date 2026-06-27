import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-aquarium.jpg";
import {
  Activity, Beaker, Camera, CalendarCheck, LineChart, BookOpen, Layers, Bell,
  Sparkles, Brain, Cpu, ShieldCheck, ArrowRight, Droplets, Fish, Leaf, Waves,
  AlertTriangle, CheckCircle2, ScanLine, FileText,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const nav = [
  { href: "#audience", label: "Audience" },
  { href: "#pain", label: "Pain Points" },
  { href: "#problem", label: "Problem" },
  { href: "#concept", label: "Concept" },
  { href: "#ai", label: "AI" },
  { href: "#features", label: "Features" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#sources", label: "Sources" },
];

const segments = [
  {
    icon: Fish, title: "Beginner Freshwater Owners", tag: "Scale segment",
    behavior: "Set up first tank from store advice; uneven testing cadence.",
    pain: "Cycling confusion; conflicting advice on ammonia/nitrite/nitrate.",
    why: "Largest US base (~10M households) — the broad onboarding wedge.",
  },
  {
    icon: Leaf, title: "Planted Tank Hobbyists", tag: "Engaged",
    behavior: "Tune light, CO₂, ferts; chase algae and plant growth balance.",
    pain: "Algae is a multivariable balance problem, not a single fix.",
    why: "High retention; need ranked action plans, not more articles.",
  },
  {
    icon: Waves, title: "Reef / Saltwater Owners", tag: "High value",
    behavior: "Manage salinity, alk, Ca, Mg, NO₃, PO₄; dose and log daily.",
    pain: "Reef stability is cognitively heavy; small drift = big risk.",
    why: "~2M US households, higher spend, premium intelligence buyers.",
  },
  {
    icon: Layers, title: "Advanced Multi-Tank Owners", tag: "Power user",
    behavior: "Run several tanks; track logs in spreadsheets/notebooks.",
    pain: "Fragmented tools; no cross-tank trend layer.",
    why: "Unified, intelligent log layer is unmet need.",
  },
];


const pains = [
  { icon: Beaker, title: "Cycling & setup confusion",
    body: "Beginners get conflicting advice and struggle to interpret ammonia, nitrite, and nitrate during the first weeks.",
    ev: "Reddit r/Aquariums beginner cycling threads" },
  { icon: Leaf, title: "Algae & tank balance",
    body: "Planted tank owners juggle light, CO₂, ferts, and water changes without knowing which lever to pull first.",
    ev: "r/PlantedTank, Buce Plant & Aquarium Co-Op guides" },
  { icon: Droplets, title: "Water tests are hard to interpret",
    body: "Color-based test kits are ambiguous, and readings rarely translate into a clear next action.",
    ev: "Forum threads on test reading & app reviews" },
  { icon: CalendarCheck, title: "Maintenance is repetitive & easy to delay",
    body: "Water changes, top-offs, filter and glass cleaning pile up across reminders, notebooks, and memory.",
    ev: "Aquarium Co-Op maintenance guidance & community" },
  { icon: Activity, title: "Reef stability is cognitively heavy",
    body: "Reef owners must hold salinity, alkalinity, calcium, magnesium, NO₃, PO₄, and dosing in their head simultaneously.",
    ev: "Bulk Reef Supply & Reef2Reef threads" },
  { icon: Layers, title: "Existing tools are fragmented",
    body: "Owners stitch together notebooks, spreadsheets, forum searches, reminders, and hardware apps.",
    ev: "Aquarimate, Aquarium Log, Apex Fusion, Seneye, ReefBeat reviews" },
];


const screens = [
  { icon: Activity, name: "Daily Tank Dashboard", body: "Today's status, anomalies, and the single most important next action." },
  { icon: ScanLine, name: "Scan Water Test", body: "Photograph a strip or vial — AI reads it under calibrated lighting." },
  { icon: Camera, name: "AI Photo Triage", body: "Spot algae types, cloudy water, or stressed livestock from a tank photo." },
  { icon: CalendarCheck, name: "Maintenance Planner", body: "Adaptive cadence based on volatility, tank age, and missed tasks." },
  { icon: LineChart, name: "Trend & Stability Alerts", body: "Time-series detection for drift in NO₃, alk, Ca, salinity." },
];

const aiCards = [
  { icon: Camera, title: "Computer Vision",
    body: "Reads test strips, color cards, vial tests, algae patterns, and tank photos with calibration prompts." },
  { icon: Brain, title: "Personalized Decision Engine",
    body: "Interprets readings against tank type, size, age, livestock, plants/corals, and history." },
  { icon: LineChart, title: "Time-Series Intelligence",
    body: "Detects trends and volatility in NO₃, alkalinity, calcium, salinity, and pH over time." },
  { icon: BookOpen, title: "Source-Grounded RAG",
    body: "Recommendations cite Aquarium Co-Op, BRS, Reef2Reef and APPA — with explicit uncertainty." },
];

const features = [
  { icon: ScanLine, name: "AI Water Test Scanner", body: "Camera-first reading of strips & vials with calibration card." },
  { icon: Camera, name: "Tank Photo Diagnosis", body: "Identifies algae types, cloudy water, and visible symptoms." },
  { icon: CalendarCheck, name: "Adaptive Maintenance Planner", body: "Cadence shifts with volatility, tank age, and missed tasks." },
  { icon: Waves, name: "Reef Stability Assistant", body: "Dosing-aware tracking for alk, Ca, Mg, salinity drift." },
  { icon: Leaf, name: "Algae Troubleshooting Guide", body: "Ranked action plan — change one variable, wait, re-test." },
  { icon: Layers, name: "Multi-Tank Dashboard", body: "Cross-tank trends, alerts, and shared maintenance plans." },
  { icon: Bell, name: "Smart Reminders", body: "Batched, context-aware tasks that respect your week." },
  { icon: BookOpen, name: "Source-Cited Recommendations", body: "Every answer shows its sources and confidence range." },
  { icon: FileText, name: "Inventory & Consumables Forecasting", body: "Predicts when you'll run out of salt, reagents, ferts." },
];

const roadmap = [
  { tag: "MVP — 0 to 3 months", items: ["Onboarding by tank type", "Parameter logging", "AI test scan", "Daily checklist", "Basic photo journal", "AI Q&A with citations"] },
  { tag: "Version 2 — 3 to 6 months", items: ["Algae & symptom triage", "Trend detection", "Adaptive maintenance plans", "Multi-tank dashboard"] },
  { tag: "Version 3 — 6 to 12 months+", items: ["Hardware integrations", "Reef controller imports", "Inventory forecasting", "Local fish store partnerships"] },
];

const sources = [
  { id: "S1", label: "APPA — Fish & Reptile Ownership Evolves in 2025", url: "https://americanpetproducts.org/news/from-bigger-tanks-to-stronger-bonds-fish-reptile-ownership-evolves-in-2025" },
  { id: "S2", label: "APPA — New Demand for Custom Aquariums", url: "https://americanpetproducts.org/blog/new-demand-for-custom-aquariums-enriched-environments-what-todays-fish-reptile-owners-want-most" },
  { id: "S3", label: "APPA — 2024 Fish & Reptile Owner Insight Report", url: "https://americanpetproducts.org/news/the-american-pet-products-association-appa-releases-2024-fish-and-reptile-owner-insight-report" },
  { id: "S4", label: "Reddit r/Aquariums — Beginner cycling confusion", url: "https://www.reddit.com/r/Aquariums/comments/1bcy2le/are_ammonia_and_quick_start_necessary_for/" },
  { id: "S5", label: "Reddit r/Aquariums — Novice tank setup", url: "https://www.reddit.com/r/Aquariums/comments/1evgc0l/confused_on_how_a_novice_is_supposed_to_start_a/" },
  { id: "S6", label: "Reddit r/PlantedTank — Algae overwhelm thread", url: "https://www.reddit.com/r/PlantedTank/comments/1sutksl/at_my_wits_end_please_help/" },
  { id: "S7", label: "Buce Plant — Planted tank care guides", url: "https://www.buceplant.com/" },
  { id: "S13", label: "Aquarium Co-Op — Maintenance guides", url: "https://www.aquariumcoop.com/" },
  { id: "S14", label: "Buce Plant — Algae & balance content", url: "https://www.buceplant.com/blogs/aquarium-plants-101" },
  { id: "S15", label: "Bulk Reef Supply — Weekly saltwater checklist", url: "https://www.bulkreefsupply.com/content/post/weekly-saltwater-aquarium-maintenance-checklist" },
  { id: "S16", label: "Bulk Reef Supply — Reef additives FAQ", url: "https://www.bulkreefsupply.com/content/post/reef-aquarium-additives-faq-what-to-dose-how-much-and-when" },
  { id: "S17", label: "Reef2Reef — Overwhelmed by reef information", url: "https://www.reef2reef.com/threads/how-do-you-not-get-overwhelmed.1083962/" },
  { id: "S18", label: "Reef2Reef — Maintenance apps discussion", url: "https://www.reef2reef.com/threads/aquarium-maintenance-apps-non-controller-related.947969/" },
  { id: "S19", label: "Reddit r/Aquariums — Tracking app discussion", url: "https://www.reddit.com/r/Aquariums/comments/11gcpyr/tank_app_what_app_does_everyone_use_to_track/" },
  { id: "S21", label: "Aquarimate — Product website", url: "https://www.aquarimate.com/" },
  { id: "S22", label: "App Store — Aquarimate reviews", url: "https://apps.apple.com/us/app/aquarimate/id587215055" },
  { id: "S23", label: "Google Play — Aquarium Log", url: "https://play.google.com/store/apps/details?id=com.kosick.aquadiary.android&hl=en" },
  { id: "S24", label: "Neptune Systems — Apex Fusion", url: "https://www.neptunesystems.com/apex-fusion/" },
  { id: "S25", label: "Seneye — Official product", url: "https://www.seneye.com/" },
  { id: "S26", label: "App Store — Seneye V2", url: "https://apps.apple.com/us/app/seneye-v2/id1242229399" },
];

function Section({ id, kicker, title, sub, children }: { id?: string; kicker?: string; title: string; sub?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative py-24 px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-14">
          {kicker && <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4"><Sparkles className="h-3.5 w-3.5" />{kicker}</div>}
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">{title}</h2>
          {sub && <p className="mt-4 text-lg text-muted-foreground">{sub}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto max-w-5xl grid lg:grid-cols-2 gap-10 items-center mb-4">
      <div className="order-2 lg:order-1">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
          <Sparkles className="h-3.5 w-3.5" /> Product Mockup
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold leading-tight">One glance. One next action.</h3>
        <p className="mt-3 text-muted-foreground">A simplified preview of the daily Tank Dashboard: live parameters, anomaly detection, and a single AI-ranked next step — instead of a wall of numbers.</p>
        <ul className="mt-5 space-y-2 text-sm">
          {["Camera-first water test scanning","Context-aware anomaly highlighting","Cited, ranked next actions","Adaptive maintenance reminders"].map(x => (
            <li key={x} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">{x}</span></li>
          ))}
        </ul>
      </div>
      <div className="order-1 lg:order-2 flex justify-center">
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
          <div className="relative w-[280px] h-[570px] rounded-[2.75rem] bg-gradient-to-b from-gray-200 to-gray-300 p-3 shadow-glow ring-1 ring-primary/20">
            <div className="absolute top-3 left-1/2 -translate-x-1/2 h-6 w-28 rounded-b-2xl bg-gray-300 z-10" />
            <div className="relative h-full w-full rounded-[2.25rem] bg-background overflow-hidden flex flex-col">
              <div className="px-5 pt-8 pb-3 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Reef · 75g</div>
                  <div className="text-base font-semibold">Good morning, Alex</div>
                </div>
                <div className="h-9 w-9 rounded-full bg-gradient-primary grid place-items-center shadow-glow">
                  <Droplets className="h-4 w-4 text-primary-foreground" />
                </div>
              </div>

              <div className="mx-4 mt-1 rounded-2xl bg-gradient-primary p-4 text-primary-foreground shadow-glow">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-wider opacity-80">
                  <span>Tank Health</span><span>Live</span>
                </div>
                <div className="mt-1 text-3xl font-semibold">92<span className="text-base opacity-80">/100</span></div>
                <div className="text-xs opacity-90 mt-0.5">Stable · 1 minor alert</div>
              </div>

              <div className="mx-4 mt-3 grid grid-cols-2 gap-2">
                {[
                  { k: "Salinity", v: "1.025", ok: true },
                  { k: "Alkalinity", v: "8.4 dKH", ok: true },
                  { k: "Nitrate", v: "12 ppm", ok: false },
                  { k: "Calcium", v: "430 ppm", ok: true },
                ].map(r => (
                  <div key={r.k} className="rounded-xl border border-border bg-card/60 px-3 py-2">
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{r.k}</div>
                    <div className={`text-sm font-mono mt-0.5 ${r.ok ? "text-foreground" : "text-accent"}`}>{r.v}{!r.ok && " ↑"}</div>
                  </div>
                ))}
              </div>

              <div className="mx-4 mt-3 rounded-xl bg-primary/10 border border-primary/30 p-3">
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-primary font-semibold">
                  <Sparkles className="h-3 w-3" /> Next Action
                </div>
                <p className="mt-1 text-xs text-foreground">Increase weekly water change by 5%. Recheck NO₃ in 48h.</p>
              </div>

              <div className="mt-auto mx-4 mb-5 grid grid-cols-4 gap-1 rounded-2xl bg-card/80 border border-border p-2">
                {[
                  { i: Activity, label: "Today" },
                  { i: ScanLine, label: "Scan" },
                  { i: LineChart, label: "Trends" },
                  { i: BookOpen, label: "Guide" },
                ].map((t, idx) => (
                  <div key={t.label} className={`flex flex-col items-center gap-0.5 py-1.5 rounded-xl ${idx === 0 ? "bg-primary/15 text-primary" : "text-muted-foreground"}`}>
                    <t.i className="h-4 w-4" />
                    <span className="text-[9px]">{t.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 glass">
        <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-semibold">
            <span className="h-8 w-8 rounded-lg bg-gradient-primary grid place-items-center shadow-glow"><Droplets className="h-4 w-4 text-primary-foreground" /></span>
            <span>Aquarium Copilot</span>
          </a>
          <nav className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground">
            {nav.map(n => <a key={n.href} href={n.href} className="hover:text-foreground transition">{n.label}</a>)}
          </nav>
          <a href="#concept" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow">See concept <ArrowRight className="h-4 w-4" /></a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-hero">
        <img src={heroImg} alt="" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
            <Sparkles className="h-3.5 w-3.5" /> Scate AI · Case Study Submission
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] max-w-4xl">
            Aquarium Copilot: <span className="text-gradient">AI-powered care</span> for healthier tanks
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
            A smart assistant that turns water tests, tank photos, maintenance history, and conflicting advice into clear, cited next actions — for every kind of aquarium owner.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#audience" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">Explore the Research <ArrowRight className="h-4 w-4" /></a>
            <a href="#concept" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-6 py-3 text-sm font-semibold">See the App Concept</a>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {[
              { k: "~10M", v: "US freshwater households" },
              { k: "~2M", v: "US saltwater households" },
              { k: "4", v: "Behavioral segments" },
              { k: "6", v: "Recurring pain points" },
            ].map(s => (
              <div key={s.k} className="glass rounded-2xl p-4 shadow-card">
                <div className="text-2xl md:text-3xl font-semibold text-gradient">{s.k}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <Section id="audience" kicker="Audience Snapshot" title="Aquarium owners in the US market" sub="Freshwater is the scale segment; reef and planted are the high-complexity, high-willingness-to-pay layers. The audience is behavioral, not monolithic.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {segments.map(s => (
            <div key={s.title} className="glass rounded-2xl p-6 shadow-card hover:ring-glow transition">
              <div className="flex items-center justify-between">
                <s.icon className="h-7 w-7 text-primary" />
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2 py-0.5">{s.tag}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div><dt className="text-muted-foreground text-xs uppercase tracking-wider">Behavior</dt><dd>{s.behavior}</dd></div>
                <div><dt className="text-muted-foreground text-xs uppercase tracking-wider">Main pain</dt><dd>{s.pain}</dd></div>
                <div><dt className="text-muted-foreground text-xs uppercase tracking-wider">Why they matter</dt><dd>{s.why}</dd></div>
              </dl>
              
            </div>
          ))}
        </div>
      </Section>

      {/* Pain */}
      <Section id="pain" kicker="Research Insights" title="What aquarium owners struggle with" sub="Six recurring pain points surfaced across Reddit, Reef2Reef, retail education blogs, and app reviews.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pains.map(p => (
            <div key={p.title} className="glass rounded-2xl p-6 shadow-card">
              <div className="h-11 w-11 rounded-xl bg-primary/10 grid place-items-center mb-4"><p.icon className="h-5 w-5 text-primary" /></div>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              <div className="mt-4 flex items-start gap-2 text-xs text-primary/80 border-t border-border pt-3">
                <BookOpen className="h-3.5 w-3.5 mt-0.5" /><span>Evidence: {p.ev}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Problem */}
      <section id="problem" className="relative py-28 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6"><AlertTriangle className="h-3.5 w-3.5" /> Core Problem</div>
          <p className="text-2xl md:text-4xl font-semibold leading-snug">
            Aquarium owners struggle not because they lack data, but because they struggle to interpret fragmented signals — <span className="text-gradient">test results, visual symptoms, past maintenance, and conflicting advice</span> — into the right next action for their specific tank.
          </p>
          <div className="mt-10 inline-block glass rounded-2xl px-6 py-4 shadow-glow">
            <span className="text-sm text-muted-foreground">The real gap is not tracking. </span>
            <span className="text-sm font-semibold text-primary">It is interpretation.</span>
          </div>
          
        </div>
      </section>

      {/* Concept */}
      <Section id="concept" kicker="App Concept" title="Meet Aquarium Copilot" sub="A camera-first, context-aware AI copilot that helps aquarium owners scan, interpret, plan, and act — across one or many tanks.">
        <PhoneMockup />
        <div className="grid lg:grid-cols-5 gap-5 mt-16">
          {screens.map((s, i) => (
            <div key={s.name} className={`glass rounded-2xl p-6 shadow-card ${i === 0 ? "lg:row-span-2 lg:col-span-2" : ""}`}>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-primary grid place-items-center shadow-glow"><s.icon className="h-5 w-5 text-primary-foreground" /></div>
                <h3 className="font-semibold">{s.name}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
              {i === 0 && (
                <div className="mt-6 rounded-xl border border-border bg-background/50 p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs"><span className="text-muted-foreground">Reef · 75g · 14 months</span><span className="text-primary">All clear</span></div>
                  {[
                    { k: "Salinity", v: "1.025", ok: true },
                    { k: "Alkalinity", v: "8.4 dKH", ok: true },
                    { k: "Nitrate", v: "12 ppm ↑", ok: false },
                    { k: "Calcium", v: "430 ppm", ok: true },
                  ].map(r => (
                    <div key={r.k} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{r.k}</span>
                      <span className={`font-mono ${r.ok ? "text-foreground" : "text-accent"}`}>{r.v}</span>
                    </div>
                  ))}
                  <div className="mt-3 rounded-lg bg-primary/10 border border-primary/30 p-3 text-xs">
                    <div className="font-semibold text-primary flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5" /> Next action</div>
                    <p className="mt-1 text-muted-foreground">Increase weekly water change by 5%; recheck NO₃ in 48h.</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* AI */}
      <Section id="ai" kicker="How AI Powers It" title="Four AI capabilities, one trusted copilot" sub="Recommendations always show sources and confidence — the app is framed as a copilot, not an authority.">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {aiCards.map(c => (
            <div key={c.title} className="glass rounded-2xl p-6 shadow-card">
              <div className="h-11 w-11 rounded-xl bg-gradient-primary grid place-items-center shadow-glow mb-4"><c.icon className="h-5 w-5 text-primary-foreground" /></div>
              <h3 className="font-semibold text-lg">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 glass rounded-2xl p-6 flex flex-wrap items-center gap-4">
          <ShieldCheck className="h-6 w-6 text-primary" />
          <p className="text-sm text-muted-foreground flex-1 min-w-[260px]">Every recommendation surfaces uncertainty ranges and links to credible sources (Aquarium Co-Op, Bulk Reef Supply, Reef2Reef, APPA) to reduce hallucination risk.</p>
        </div>
      </Section>

      {/* Workflow */}
      <Section kicker="Workflow Shift" title="From guesswork to guided action">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="glass rounded-2xl p-7 shadow-card border-destructive/20">
            <div className="text-xs uppercase tracking-wider text-destructive font-semibold mb-3">Current workflow</div>
            <ol className="space-y-3 text-sm">
              {["Test water","Guess color result","Write in notebook / spreadsheet","Search forums","Read conflicting opinions","Decide what to do"].map((s,i)=>(
                <li key={s} className="flex items-start gap-3"><span className="h-6 w-6 rounded-full bg-destructive/15 text-destructive grid place-items-center text-xs font-semibold">{i+1}</span><span className="text-muted-foreground">{s}</span></li>
              ))}
            </ol>
          </div>
          <div className="glass rounded-2xl p-7 shadow-glow ring-glow">
            <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-3 flex items-center gap-2"><Sparkles className="h-3.5 w-3.5" /> With Aquarium Copilot</div>
            <ol className="space-y-3 text-sm">
              {["Scan test or tank photo","AI interprets the result","Combines with tank history & trends","Gives ranked, cited next actions","Tracks outcome & adapts"].map((s,i)=>(
                <li key={s} className="flex items-start gap-3"><span className="h-6 w-6 rounded-full bg-primary/15 text-primary grid place-items-center text-xs font-semibold">{i+1}</span><span>{s}</span></li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section id="features" kicker="Key Features" title="Built for every kind of tank">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(f => (
            <div key={f.name} className="glass rounded-2xl p-6 shadow-card hover:ring-glow transition">
              <f.icon className="h-6 w-6 text-primary mb-3" />
              <h3 className="font-semibold">{f.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Roadmap */}
      <Section id="roadmap" kicker="MVP & Roadmap" title="From logbook to decision assistant">
        <div className="grid md:grid-cols-3 gap-5">
          {roadmap.map((r, i) => (
            <div key={r.tag} className="glass rounded-2xl p-6 shadow-card relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-primary opacity-60" />
              <div className="text-xs uppercase tracking-wider text-primary font-semibold">Phase {i+1}</div>
              <h3 className="mt-1 font-semibold">{r.tag}</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {r.items.map(it => (
                  <li key={it} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">{it}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Value */}
      <section className="relative py-28 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-60" />
        <div className="relative mx-auto max-w-6xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6"><Cpu className="h-3.5 w-3.5" /> Why this creates real value</div>
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight max-w-3xl">A trusted copilot, not another tracker.</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Reduces beginner mistakes during cycling and first-month setup",
              "Prevents fish loss from missed warning signs and parameter drift",
              "Lowers decision fatigue by ranking the single best next action",
              "Makes maintenance more consistent with adaptive cadence",
              "Helps planted & reef owners stabilize complex chemistry",
              "Replaces fragmented tools with one intelligent care system",
            ].map(v => (
              <div key={v} className="glass rounded-2xl p-5 shadow-card flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <p className="text-sm">{v}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-2xl md:text-3xl font-semibold max-w-3xl">
            Aquarium Copilot turns aquarium care from <span className="text-muted-foreground line-through">reactive troubleshooting</span> into <span className="text-gradient">proactive tank management</span>.
          </p>
        </div>
      </section>

      {/* Sources */}
      <Section id="sources" kicker="Research References" title="Sources" sub="All insights are grounded in publicly available research. Community threads are used as qualitative evidence, not representative survey data.">
        <div className="grid md:grid-cols-2 gap-3">
          {sources.map(s => (
            <a key={s.id} href={s.url} target="_blank" rel="noreferrer" className="glass rounded-xl p-4 flex items-start gap-3 hover:ring-glow transition group">
              <span className="text-xs font-mono text-primary border border-primary/30 rounded px-1.5 py-0.5 shrink-0">{s.id}</span>
              <span className="text-sm text-muted-foreground group-hover:text-foreground flex-1">{s.label}</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary shrink-0" />
            </a>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-6 md:px-10">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="h-7 w-7 rounded-lg bg-gradient-primary grid place-items-center"><Droplets className="h-3.5 w-3.5 text-primary-foreground" /></span>
            <span><span className="text-foreground font-medium">Aquarium Copilot</span> — Scate AI case study submission</span>
          </div>
          <div>Audience: Aquarium Owners · US Market</div>
        </div>
      </footer>
    </div>
  );
}
