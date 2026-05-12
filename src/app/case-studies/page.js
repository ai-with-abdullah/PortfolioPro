import Link from "next/link";

export const metadata = {
  title: "AI Agent Case Studies & Results | Real ROI from Autonomous AI",
  description: "Real AI agent case studies: a real estate agency saving 300+ hours monthly with autonomous WhatsApp agents, a medical AI at 99.8% accuracy, and an e-commerce brand saving $8k/month. See what AI agents can do for your business.",
  keywords: ["AI agent case study", "agentic AI results", "AI agent ROI", "AI agent real estate", "whatsapp AI agent results", "business AI agent proof"],
  openGraph: {
    title: "AI Agent Case Studies & Results | Real ROI",
    description: "Real AI agent case studies with proven results. See how AI agents save 300+ hours monthly and generate real ROI for businesses.",
  },
  alternates: { canonical: "/case-studies" },
};

const studies = [
  {
    id: "real-estate",
    tag: "Real Estate AI Agent",
    flag: "🇰🇼",
    client: "Best Homes Kuwait",
    title: "From 77-minute response time to under 60 seconds",
    subtitle: "How an autonomous WhatsApp AI sales agent transformed a Gulf real estate agency's entire lead pipeline.",
    challenge: "Best Homes Kuwait was losing deals daily. Their sales team took an average of 77 minutes to respond to new WhatsApp leads — by then, prospects had already contacted 3 other agencies. Evening and weekend leads got zero response until the next business day. The team was manually tracking leads in spreadsheets, double-booking viewings, and forgetting to follow up after meetings.",
    solution: "I built an autonomous AI sales agent that runs 24/7 on WhatsApp. The moment a lead sends a message, the AI agent engages in natural Arabic/English conversation, qualifies them (budget, timeline, location, property type), queries the live property database, and sends matching listings with photos and links — all within 60 seconds. It then books viewings directly into the agents' Google Calendar, sends automated reminders 24 hours and 1 hour before each viewing, and follows up after every meeting with new matching listings.",
    results: [
      { num: "<60s", label: "Lead response time", prev: "from 77 minutes" },
      { num: "31", label: "Meetings booked per week", prev: "from 12/week" },
      { num: "6%", label: "No-show rate", prev: "from 28%" },
      { num: "100%", label: "Leads contacted in <5 min", prev: "from ~40%" },
    ],
    techStack: ["OpenAI GPT-4o", "N8N", "WhatsApp Business API", "Google Calendar API", "Google Sheets", "LangChain"],
    timeline: "3 weeks",
    testimonial: {
      quote: "Abdullah built a full AI sales agent for our real estate agency on WhatsApp. Our lead response time went from 77 minutes to under 60 seconds. We went from 12 booked meetings a week to 31. The ROI was immediate.",
      name: "Ahmed Al-Rashidi",
      role: "CEO, Best Homes Kuwait",
    },
    blogLink: "/blog/ai-real-estate-sales-agent",
    gradient: "linear-gradient(135deg, rgba(124,106,255,0.12), rgba(0,212,170,0.06))",
    accentColor: "var(--c-accent)",
  },
  {
    id: "dermafusion",
    tag: "Healthcare AI",
    flag: "🧬",
    client: "Medical Research Project",
    title: "99.8% diagnostic accuracy across 12 disease classes",
    subtitle: "A multi-agent AI diagnostic pipeline processing 15 heterogeneous medical imaging datasets.",
    challenge: "Diagnosing skin diseases from dermoscopic images requires years of specialized training. Existing AI solutions were trained on single datasets, leading to poor generalization across different imaging conditions, patient demographics, and disease distributions. The goal was to build a system that could handle real-world medical imaging diversity — not just perform well on clean, curated data.",
    solution: "I engineered DermaFusion — a Domain-Stratified Ensemble architecture that processes 15 heterogeneous medical imaging datasets simultaneously. The system uses calibrated confidence scoring to deliver clinical-grade predictions, with automatic domain detection that adapts to different imaging conditions. The pipeline includes automated data preprocessing, augmentation strategies specific to medical imaging, and a robust evaluation framework testing across all 15 data distributions.",
    results: [
      { num: "99.8%", label: "Diagnostic accuracy", prev: "across 12 disease classes" },
      { num: "15", label: "Datasets integrated", prev: "heterogeneous sources" },
      { num: "1.2s", label: "Inference time", prev: "per image prediction" },
      { num: "40%", label: "Faster diagnosis", prev: "vs. manual review" },
    ],
    techStack: ["PyTorch", "TorchVision", "OpenCV", "NumPy", "Pandas", "AWS SageMaker", "Python", "Scikit-learn"],
    timeline: "6 weeks",
    testimonial: null,
    blogLink: "/blog/dermafusion-ai-case-study",
    gradient: "linear-gradient(135deg, rgba(0,212,170,0.1), rgba(124,106,255,0.05))",
    accentColor: "var(--c-accent2)",
  },
  {
    id: "ecommerce",
    tag: "E-Commerce AI Agent",
    flag: "🛒",
    client: "E-Commerce Brand",
    title: "3 staff roles fully automated — $8,000+/month saved",
    subtitle: "An AI operations agent that handles the entire post-purchase workflow autonomously.",
    challenge: "An e-commerce brand had 3 staff members spending their entire day on repetitive post-purchase operations: manually processing orders from Shopify, updating inventory spreadsheets, emailing suppliers with purchase orders, generating daily/weekly sales reports, and reconciling payments. The process was error-prone — inventory mismatches happened weekly, and supplier notifications were frequently delayed or forgotten.",
    solution: "I built an AI operations agent triggered automatically by Shopify webhooks. When an order comes in, the agent processes the order data, updates inventory across all channels (Shopify + Google Sheets + supplier portal), generates and sends supplier purchase orders via email, creates internal Slack notifications for the team, and compiles automated daily sales summaries and weekly executive reports — all without any human touching the process.",
    results: [
      { num: "3 → 0", label: "Staff on manual operations", prev: "fully automated" },
      { num: "$8,000+", label: "Monthly savings", prev: "in operational costs" },
      { num: "100%", label: "Error-free reporting", prev: "from ~85% accuracy" },
      { num: "0", label: "Missed supplier orders", prev: "from 3-5 per week" },
    ],
    techStack: ["N8N", "Shopify API", "Google Sheets API", "Gmail API", "Slack API", "OpenAI GPT-4o"],
    timeline: "2 weeks",
    testimonial: null,
    blogLink: null,
    gradient: "linear-gradient(135deg, rgba(245,197,24,0.08), rgba(124,106,255,0.05))",
    accentColor: "#f5c518",
  },
  {
    id: "email-agent",
    tag: "Productivity AI Agent",
    flag: "📧",
    client: "Business Owner",
    title: "Email management: 3 hours/day → 20 minutes",
    subtitle: "An AI email agent that reads, classifies, prioritizes, drafts responses, and manages your inbox autonomously.",
    challenge: "A business owner was spending 3+ hours daily sorting through hundreds of emails — manually categorizing them, identifying urgent items, drafting responses to routine inquiries, and forwarding messages to the right team members. Important emails were buried under newsletters and notifications, causing missed opportunities and delayed responses to clients.",
    solution: "I built an AI email agent using N8N and OpenAI that monitors the inbox in real-time. The agent reads every incoming email, classifies it by urgency (critical / needs response / FYI / spam), drafts personalized responses for routine inquiries, creates task items for action-required emails, and sends a daily digest summarizing everything — organized by priority. The owner now spends just 20 minutes reviewing and approving drafted responses.",
    results: [
      { num: "3 hrs → 20 min", label: "Daily email time", prev: "85% reduction" },
      { num: "100%", label: "Emails auto-sorted", prev: "by urgency and type" },
      { num: "0", label: "Missed urgent emails", prev: "in 6 months" },
      { num: "< 2 min", label: "Average draft time", prev: "for routine replies" },
    ],
    techStack: ["N8N", "OpenAI GPT-4o", "Gmail API", "Google Sheets", "Slack API"],
    timeline: "1.5 weeks",
    testimonial: null,
    blogLink: "/blog/n8n-openai-email-assistant",
    gradient: "linear-gradient(135deg, rgba(66,133,244,0.08), rgba(124,106,255,0.05))",
    accentColor: "#4285f4",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="hero" style={{ paddingBottom: "2rem" }}>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="hero-badge hero-fade-in">
            <span className="pulse-dot"></span>
            All numbers from live, production systems
          </div>
          <h1 className="display hero-title hero-fade-in hero-delay-1">
            Real businesses. Real AI agents.{" "}
            <span className="text-gradient">Real ROI.</span>
          </h1>
          <p className="lead hero-fade-in hero-delay-2" style={{ margin: "0 auto" }}>
            Every result below is from a live project I built. No hypotheticals, no mockups — these AI agent systems run autonomously every single day.
          </p>

          {/* Aggregate Stats */}
          <div className="hero-fade-in hero-delay-3" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1rem", marginTop: "3rem", maxWidth: "700px", margin: "3rem auto 0" }}>
            {[
              { num: "300+", label: "Hours saved monthly" },
              { num: "99.8%", label: "AI model accuracy" },
              { num: "$8k+", label: "Monthly savings" },
              { num: "<60s", label: "Lead response time" },
            ].map((stat, i) => (
              <div key={i} style={{ padding: "1.25rem 1rem", background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)", textAlign: "center" }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 800, letterSpacing: "-0.03em", background: "linear-gradient(to bottom, #fff, #888)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{stat.num}</div>
                <div style={{ fontSize: "0.75rem", color: "var(--c-muted)", marginTop: "0.25rem" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CASE STUDIES ==================== */}
      {studies.map((study, idx) => (
        <section key={study.id} id={study.id} className="section" style={{ borderTop: "1px solid var(--c-border)" }}>
          <div className="wrap">

            {/* Study Header */}
            <div className="reveal" style={{ marginBottom: "3rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", color: "var(--c-accent)", padding: "0.3rem 0.8rem", background: "rgba(124,106,255,0.1)", borderRadius: "100px" }}>
                  {study.tag}
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", fontSize: "0.85rem", color: "var(--c-muted)" }}>
                  {study.flag} {study.client}
                </span>
              </div>
              <h2 className="h2" style={{ maxWidth: "800px" }}>{study.title}</h2>
              <p style={{ color: "var(--c-muted)", fontSize: "1.05rem", lineHeight: "1.7", marginTop: "1rem", maxWidth: "750px" }}>
                {study.subtitle}
              </p>
            </div>

            {/* Results Cards — the money numbers */}
            <div className="reveal reveal-delay-1" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem", marginBottom: "3rem" }}>
              {study.results.map((r, i) => (
                <div key={i} style={{ padding: "1.75rem 1.5rem", background: study.gradient, border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)", textAlign: "center", position: "relative", overflow: "hidden" }}>
                  {/* Subtle glow */}
                  <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: "2px", background: `linear-gradient(90deg, transparent, ${study.accentColor}, transparent)`, opacity: 0.5 }}></div>
                  <div style={{ fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "0.4rem", background: "linear-gradient(to bottom, #fff, #999)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {r.num}
                  </div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.3rem" }}>{r.label}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--c-muted)", fontFamily: "var(--font-mono)" }}>{r.prev}</div>
                </div>
              ))}
            </div>

            {/* Challenge + Solution — two column */}
            <div className="reveal reveal-delay-2" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1.5rem", marginBottom: "2.5rem" }}>
              {/* Challenge */}
              <div style={{ padding: "2.5rem", background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-lg)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--c-orange, #ff6b35), transparent)" }}></div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
                  <span style={{ fontSize: "1.3rem" }}>🚨</span>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", color: "var(--c-orange, #ff6b35)" }}>The Challenge</span>
                </div>
                <p style={{ color: "var(--c-muted)", fontSize: "0.92rem", lineHeight: "1.8", margin: 0 }}>{study.challenge}</p>
              </div>
              {/* Solution */}
              <div style={{ padding: "2.5rem", background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-lg)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, ${study.accentColor}, transparent)` }}></div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
                  <span style={{ fontSize: "1.3rem" }}>✅</span>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", color: "var(--c-accent2)" }}>The Solution</span>
                </div>
                <p style={{ color: "var(--c-muted)", fontSize: "0.92rem", lineHeight: "1.8", margin: 0 }}>{study.solution}</p>
              </div>
            </div>

            {/* Tech Stack + Timeline */}
            <div className="reveal reveal-delay-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1.5rem", padding: "1.5rem 2rem", background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)", flexWrap: "wrap", marginBottom: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", flex: 1 }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--c-accent)", whiteSpace: "nowrap" }}>Built With</span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                  {study.techStack.map(t => (
                    <span key={t} style={{ padding: "0.2rem 0.55rem", background: "rgba(124,106,255,0.08)", border: "1px solid rgba(124,106,255,0.15)", borderRadius: "100px", fontSize: "0.75rem", color: "var(--c-muted)", fontFamily: "var(--font-mono)" }}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", whiteSpace: "nowrap" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--c-accent)" }}>Delivered In</span>
                <span style={{ fontSize: "1.1rem", fontWeight: 700 }}>{study.timeline}</span>
              </div>
            </div>

            {/* Testimonial */}
            {study.testimonial && (
              <div className="reveal" style={{ padding: "2.5rem", background: study.gradient, border: "1px solid var(--c-border)", borderRadius: "var(--radius-lg)", position: "relative", marginBottom: "1rem" }}>
                {/* Quote mark */}
                <div style={{ position: "absolute", top: "1.5rem", left: "2rem", fontSize: "4rem", lineHeight: 1, color: "rgba(124,106,255,0.15)", fontFamily: "Georgia, serif" }}>&ldquo;</div>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "var(--c-muted)", position: "relative", zIndex: 1, paddingLeft: "0.5rem", marginBottom: "1.5rem", fontStyle: "italic" }}>
                  &ldquo;{study.testimonial.quote}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--c-surface2)", border: "1px solid var(--c-border)", display: "grid", placeItems: "center", fontSize: "1.3rem" }}>
                    {study.flag}
                  </div>
                  <div>
                    <strong style={{ display: "block", fontSize: "0.95rem" }}>{study.testimonial.name}</strong>
                    <span style={{ color: "var(--c-muted)", fontSize: "0.82rem" }}>{study.testimonial.role}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Read Full Case Study link */}
            {study.blogLink && (
              <div className="reveal" style={{ marginTop: "1rem" }}>
                <Link href={study.blogLink} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--c-accent)", fontWeight: 600, fontSize: "0.95rem", transition: "gap 0.2s" }}>
                  Read the full case study →
                </Link>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* ==================== INDUSTRIES SERVED ==================== */}
      <section className="section" style={{ borderTop: "1px solid var(--c-border)" }}>
        <div className="wrap">
          <div className="section-header reveal">
            <p className="section-eyebrow">Industries</p>
            <h2 className="h2">AI agents work in <span className="text-gradient">every industry.</span></h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
            {[
              { icon: "🏠", name: "Real Estate", desc: "Lead qualification, property matching, viewing booking" },
              { icon: "🏥", name: "Healthcare", desc: "Medical imaging, patient intake, diagnosis support" },
              { icon: "🛒", name: "E-Commerce", desc: "Order processing, inventory, supplier management" },
              { icon: "🏢", name: "Professional Services", desc: "Client intake, scheduling, reporting" },
              { icon: "📧", name: "Business Operations", desc: "Email management, task routing, daily reports" },
              { icon: "🎓", name: "Education", desc: "Student engagement, grading, admin automation" },
            ].map((ind, i) => (
              <div key={i} className={`reveal reveal-delay-${i % 4}`} style={{ padding: "1.75rem 1.5rem", background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)", textAlign: "center", transition: "border-color 0.3s, transform 0.3s" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{ind.icon}</div>
                <h4 style={{ fontSize: "0.95rem", marginBottom: "0.5rem" }}>{ind.name}</h4>
                <p style={{ color: "var(--c-muted)", fontSize: "0.82rem", lineHeight: "1.5", margin: 0 }}>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section className="section" style={{ borderTop: "1px solid var(--c-border)" }}>
        <div className="wrap">
          <div className="section-header reveal">
            <p className="section-eyebrow">From Idea to Live System</p>
            <h2 className="h2">How I deliver <span className="text-gradient">results like these.</span></h2>
          </div>

          <div className="process-steps">
            {[
              { n: "01", title: "Free Discovery Call", desc: "30-minute call to map your operations and identify the highest-ROI automation opportunities." },
              { n: "02", title: "Architecture & Proposal", desc: "Detailed proposal with system design, timeline, and fixed pricing — you approve before work begins." },
              { n: "03", title: "Build, Test & Iterate", desc: "I build the AI agent, integrate with your tools, and test rigorously. You review at every checkpoint." },
              { n: "04", title: "Deploy & Monitor", desc: "System goes live. I monitor for 30 days, optimize performance, and hand over full documentation." },
            ].map((step, i) => (
              <div key={step.n} className={`step-card reveal reveal-delay-${i}`}>
                <div className="step-num">{step.n}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="section">
        <div className="wrap">
          <div className="reveal" style={{ background: "linear-gradient(135deg, rgba(124,106,255,0.15), rgba(0,212,170,0.08))", border: "1px solid rgba(124,106,255,0.3)", borderRadius: "var(--radius-lg)", padding: "4rem 3rem", textAlign: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(0,212,170,0.12)", border: "1px solid rgba(0,212,170,0.3)", borderRadius: "999px", padding: "0.35rem 1rem", marginBottom: "1.5rem", fontSize: "0.82rem", color: "var(--c-accent2)" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--c-accent2)", display: "inline-block", animation: "pulse 2s infinite" }}></span>
              Currently accepting new projects
            </div>
            <h2 className="h2" style={{ marginBottom: "1rem" }}>Your business could be the next case study.</h2>
            <p className="lead" style={{ margin: "0 auto 2.5rem" }}>Book a free 30-minute call. I will audit your operations and show you exactly where AI agents can deliver the highest ROI — before you commit to anything.</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-primary btn-lg">Book a Free Strategy Call →</Link>
              <Link href="/gulf-real-estate-ai" className="btn btn-ghost btn-lg">Gulf Real Estate AI</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
