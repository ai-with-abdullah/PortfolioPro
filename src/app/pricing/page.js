import Link from "next/link";

export const metadata = {
  title: "AI Agent Pricing — Transparent Project-Based Pricing for AI Automation",
  description: "Transparent, project-based pricing for AI agent development. Single agents from $1,200, multi-agent systems from $3,500, WhatsApp AI sales agents from $2,500. No hidden fees. Free 30-minute strategy call.",
  keywords: [
    "AI agent pricing",
    "AI automation cost",
    "how much does AI agent cost",
    "AI agent development price",
    "WhatsApp AI agent pricing",
    "AI automation pricing 2026",
    "AI consultant rates",
  ],
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "AI Agent Pricing — Abdullah AI",
    description: "Transparent pricing for AI agent development. From $1,200 for single agents to $5,000+ for complete AI sales systems. Free strategy call included.",
    type: "website",
    url: "https://ai-with-abdullah.vercel.app/pricing",
  },
};

const packages = [
  {
    name: "Starter Automation",
    price: "$800",
    period: "one-time",
    desc: "One focused automation workflow that solves a single, high-impact business problem.",
    features: [
      "1 automation workflow (up to 6 integrations)",
      "AI-powered text generation or classification",
      "Full documentation and handoff",
      "1 round of revisions",
      "14-day post-launch support",
    ],
    ideal: "Businesses that want to automate one specific process — like email sorting, form processing, or basic lead notifications.",
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "AI Lead System",
    price: "$2,500",
    period: "one-time",
    desc: "A complete AI-powered lead qualification and follow-up system that works 24/7.",
    features: [
      "Multi-step workflow with AI reasoning",
      "Lead qualification (Hot/Warm/Cold)",
      "WhatsApp or email auto-response in <60 seconds",
      "CRM integration (HubSpot, Salesforce, etc.)",
      "Agent notifications + reporting dashboard",
      "Full documentation and training",
      "30-day post-launch support",
    ],
    ideal: "Service businesses, agencies, and real estate teams drowning in manual lead follow-up.",
    cta: "Most Popular →",
    highlight: true,
  },
  {
    name: "AI Sales Agent",
    price: "$3,500–$5,000",
    period: "one-time",
    desc: "A full autonomous AI sales agent that handles the entire client journey — from first message to booked meeting.",
    features: [
      "Conversational AI with memory and context",
      "WhatsApp Business API integration",
      "Property/product matching and delivery",
      "Real-time calendar booking and management",
      "Automated reminders (24hr + 1hr before)",
      "Reschedule and cancellation handling",
      "Post-meeting follow-up sequences",
      "Complete notification system",
      "Full documentation and team training",
      "30-day post-launch support",
    ],
    ideal: "Real estate agencies, property developers, and sales teams who want a fully autonomous AI handling their WhatsApp leads.",
    cta: "Book a Call →",
    highlight: false,
  },
];

const addons = [
  { name: "Custom AI Model (CV, NLP)", price: "From $4,000", desc: "Custom-trained machine learning models for classification, detection, or prediction on your specific data." },
  { name: "Monthly Retainer", price: "$600/month", desc: "Ongoing monitoring, updates, optimization, and one new automation per month. Priority support included." },
  { name: "AI Strategy Audit", price: "Free (30 min)", desc: "A free discovery call where I audit your current operations and identify the top 3 automation opportunities with ROI projections." },
];

export default function PricingPage() {
  return (
    <>
      {/* Pricing Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "description": "AI Agent development pricing. Starter from $800, AI Lead System $2,500, Full AI Sales Agent $3,500-$5,000. Project-based, no hidden fees.",
          }),
        }}
      />

      {/* ==================== HERO ==================== */}
      <section className="hero" style={{ paddingBottom: "2rem" }}>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="wrap" style={{ textAlign: "center" }}>
          <h1 className="display hero-title hero-fade-in">
            Transparent <span className="text-gradient">Pricing</span>
          </h1>
          <p className="lead hero-fade-in hero-delay-1" style={{ margin: "0 auto" }}>
            Project-based pricing. No hidden fees. No hourly billing. You own everything I build.
          </p>
        </div>
      </section>

      {/* ==================== PRICING CARDS ==================== */}
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", alignItems: "start" }}>
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i}`}
                style={{
                  padding: "2.5rem 2rem",
                  background: pkg.highlight ? "linear-gradient(135deg, rgba(124,106,255,0.08), rgba(0,212,170,0.04))" : "var(--c-surface)",
                  border: pkg.highlight ? "2px solid rgba(124,106,255,0.4)" : "1px solid var(--c-border)",
                  borderRadius: "var(--radius-lg)",
                  position: "relative",
                }}
              >
                {pkg.highlight && (
                  <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: "var(--c-accent)", color: "#fff", padding: "0.25rem 1rem", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.05em" }}>
                    MOST POPULAR
                  </div>
                )}
                <h3 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>{pkg.name}</h3>
                <div style={{ marginBottom: "1rem" }}>
                  <span style={{ fontSize: "2rem", fontWeight: 700, color: "var(--c-accent)" }}>{pkg.price}</span>
                  <span style={{ color: "var(--c-muted)", fontSize: "0.85rem", marginLeft: "0.5rem" }}>{pkg.period}</span>
                </div>
                <p style={{ color: "var(--c-muted)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>{pkg.desc}</p>

                <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.5rem" }}>
                  {pkg.features.map((f, fi) => (
                    <li key={fi} style={{ display: "flex", gap: "0.6rem", fontSize: "0.88rem", color: "var(--c-muted)" }}>
                      <span style={{ color: "var(--c-accent2)", flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div style={{ padding: "1rem", background: "rgba(124,106,255,0.06)", borderRadius: "var(--radius-sm)", marginBottom: "1.5rem" }}>
                  <p style={{ fontSize: "0.82rem", color: "var(--c-muted)", margin: 0 }}>
                    <strong style={{ color: "var(--c-text)" }}>Ideal for:</strong> {pkg.ideal}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className={pkg.highlight ? "btn btn-primary" : "btn btn-ghost"}
                  style={{ width: "100%", textAlign: "center", display: "block" }}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ADD-ONS ==================== */}
      <section className="section" style={{ borderTop: "1px solid var(--c-border)" }}>
        <div className="wrap" style={{ maxWidth: "800px" }}>
          <div className="section-header reveal">
            <p className="section-eyebrow">Additional Services</p>
            <h2 className="h2">Add-ons & <span className="text-gradient">ongoing support.</span></h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "2.5rem" }}>
            {addons.map((addon, i) => (
              <div key={i} className={`reveal reveal-delay-${i}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1.5rem", padding: "1.5rem 2rem", background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)", flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: "200px" }}>
                  <h4 style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>{addon.name}</h4>
                  <p style={{ color: "var(--c-muted)", fontSize: "0.88rem", margin: 0, lineHeight: "1.6" }}>{addon.desc}</p>
                </div>
                <div style={{ fontWeight: 700, color: "var(--c-accent)", fontSize: "1rem", whiteSpace: "nowrap" }}>{addon.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ROI CALCULATOR ==================== */}
      <section className="section" style={{ borderTop: "1px solid var(--c-border)" }}>
        <div className="wrap" style={{ maxWidth: "750px" }}>
          <div className="section-header reveal">
            <p className="section-eyebrow">Is It Worth It?</p>
            <h2 className="h2">Calculate your <span className="text-gradient">ROI before you spend.</span></h2>
          </div>

          <div className="reveal" style={{ marginTop: "2.5rem", padding: "2.5rem", background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)" }}>
            <p style={{ color: "var(--c-muted)", fontSize: "0.95rem", lineHeight: "1.8", marginBottom: "1.5rem" }}>
              Use this formula before investing in any automation:
            </p>
            <div style={{ padding: "1.5rem", background: "var(--c-bg)", borderRadius: "var(--radius-sm)", fontFamily: "var(--font-mono)", fontSize: "0.85rem", lineHeight: "2", color: "var(--c-accent)", marginBottom: "2rem" }}>
              Monthly Hours Saved × Hourly Staff Cost = Monthly Savings<br />
              Monthly Savings × 12 = Annual Savings<br />
              Annual Savings ÷ Project Cost = ROI Multiple
            </div>

            <h4 style={{ marginBottom: "1rem" }}>Real Example: Gulf Real Estate Agency</h4>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
              {[
                { label: "Hours wasted/month", value: "198 hrs", detail: "3 agents × 3 hrs/day × 22 days" },
                { label: "Monthly cost of waste", value: "$3,960", detail: "198 hrs × $20/hr staff cost" },
                { label: "Project investment", value: "$3,000", detail: "Full AI lead system" },
                { label: "Payback period", value: "23 days", detail: "ROI: 15× in Year 1" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "1rem", background: "var(--c-bg)", borderRadius: "var(--radius-sm)", textAlign: "center" }}>
                  <div style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--c-accent2)", marginBottom: "0.25rem" }}>{item.value}</div>
                  <div style={{ fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>{item.label}</div>
                  <div style={{ fontSize: "0.72rem", color: "var(--c-muted)" }}>{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== GUARANTEES ==================== */}
      <section className="section" style={{ borderTop: "1px solid var(--c-border)" }}>
        <div className="wrap" style={{ maxWidth: "750px" }}>
          <div className="section-header reveal">
            <p className="section-eyebrow">What You Get</p>
            <h2 className="h2">Every project <span className="text-gradient">includes.</span></h2>
          </div>

          <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "2rem" }}>
            {[
              "Free 30-minute strategy call to scope the project properly",
              "Fixed project price — no hidden hourly charges",
              "Full documentation so your team can understand and operate the system",
              "You own 100% of the code and workflows — no lock-in",
              "Direct communication — you work with me, not an agency team",
              "Post-launch support included (14–30 days depending on package)",
            ].map((item, i) => (
              <li key={i} className={`reveal reveal-delay-${i % 4}`} style={{ display: "flex", gap: "0.75rem", padding: "1rem 1.5rem", background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-sm)", color: "var(--c-muted)", fontSize: "0.95rem" }}>
                <span style={{ color: "var(--c-accent2)", flexShrink: 0 }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="section">
        <div className="wrap">
          <div className="reveal" style={{ background: "linear-gradient(135deg, rgba(124,106,255,0.15), rgba(0,212,170,0.08))", border: "1px solid rgba(124,106,255,0.3)", borderRadius: "var(--radius-lg)", padding: "4rem 3rem", textAlign: "center" }}>
            <h2 className="h2" style={{ marginBottom: "1rem" }}>Ready to get a real quote?</h2>
            <p className="lead" style={{ margin: "0 auto 2.5rem" }}>Book a free 30-minute call. I will scope your project, tell you exactly what it will cost, and show you the expected ROI — before you commit to anything.</p>
            <Link href="/contact" className="btn btn-primary btn-lg">Book Your Free Strategy Call →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
