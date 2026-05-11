import Link from "next/link";

export const metadata = {
  title: "AI Automation Services for Small Business | N8N Expert & AI Consultant — Abdullah AI",
  description: "Hire an N8N automation expert and AI consultant to eliminate manual work from your business. Workflow automation, custom AI models, and AI strategy consulting. Serving clients globally.",
  keywords: ["hire n8n automation expert", "AI automation services", "workflow automation freelancer", "custom AI model development", "AI consultant for small business", "n8n freelancer"],
  alternates: { canonical: "/services" },
};

const faqItems = [
  { q: "How long does an automation project take?", a: "Most workflow automation projects are live within 1–3 weeks. Custom AI model development typically takes 3–8 weeks depending on data availability and complexity." },
  { q: "Do I need technical knowledge to use the system?", a: "No. I build the entire system and hand it over with clear documentation. You and your team can trigger and manage workflows without writing a single line of code." },
  { q: "What tools do you integrate with?", a: "I integrate with virtually any tool that has an API — including HubSpot, Salesforce, Notion, Slack, Gmail, WhatsApp, Airtable, Google Sheets, and hundreds more via N8N." },
  { q: "What is your pricing model?", a: "I work on a project-based model after a free discovery call. Projects start from $800 for single-workflow automations and $2,500+ for full custom AI systems. No retainer lock-ins. You own everything I build." },
  { q: "Do you work with clients outside Pakistan?", a: "Yes — I work with clients globally. My current clients include businesses in Kuwait, UAE, Pakistan, and across Europe. All communication is remote via WhatsApp, email, or video call." },
  { q: "Can you automate my WhatsApp business responses?", a: "Absolutely. WhatsApp automation is one of my most popular services. I build AI agents that respond to leads, qualify them, book meetings, and follow up — all automatically via the WhatsApp Business API." },
];

const services = [
  {
    tag: "Most Popular",
    icon: "⚡",
    title: "Workflow Automation",
    desc: "I design and deploy end-to-end automation pipelines using N8N, Make, and custom webhooks. Every trigger, action, and condition is custom-built around your exact business process.",
    features: [
      "Lead capture & instant AI follow-up",
      "CRM sync (HubSpot, Salesforce, Notion)",
      "Email & WhatsApp automation",
      "Invoice, reporting & data pipelines",
      "Multi-step conditional logic flows",
    ],
    id: "workflow",
  },
  {
    tag: "AI-Powered",
    icon: "🤖",
    title: "Custom AI Model Development",
    desc: "From Computer Vision to predictive analytics, I build and fine-tune bespoke machine learning models trained on your proprietary data to give you a competitive AI advantage.",
    features: [
      "Custom dataset collection & preprocessing",
      "Model training (PyTorch / TensorFlow)",
      "Computer Vision (classification, detection)",
      "NLP & text analysis systems",
      "Cloud deployment (AWS / GCP / Azure)",
    ],
    id: "ai",
  },
  {
    tag: "Strategic",
    icon: "🧠",
    title: "AI Strategy Consulting",
    desc: "Not sure where AI fits into your business? I audit your current operations and deliver a clear, actionable roadmap for implementing AI automation for maximum ROI.",
    features: [
      "Full business process audit",
      "Custom AI automation roadmap",
      "Tool & stack selection",
      "ROI projection & prioritization",
      "Ongoing optimization & support",
    ],
    id: "consulting",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* FAQPage JSON-LD Schema — Google shows FAQ dropdowns in search results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a,
              },
            })),
          }),
        }}
      />

      {/* Page Header */}
      <section className="section" style={{ paddingTop: "8rem", textAlign: "center" }}>
        <div className="wrap">
          <p className="section-eyebrow reveal">Services</p>
          <h1 className="h2 reveal reveal-delay-1">
            Everything you need to automate, scale, and <span className="text-gradient">dominate with AI.</span>
          </h1>
          <p className="lead reveal reveal-delay-2" style={{ margin: "1.5rem auto 0" }}>
            I offer three core services built around one outcome: eliminating the manual, repetitive work that is holding your business back so you can focus on what actually grows your revenue.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="wrap">
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={s.id} id={s.id} className={`service-card reveal reveal-delay-${i}`}>
                <div className="service-tag">{s.tag}</div>
                <div className="service-icon-box">{s.icon}</div>
                <h3>{s.title}</h3>
                <p style={{ color: "var(--c-muted)", fontSize: "0.95rem", marginTop: "0.75rem" }}>{s.desc}</p>
                <ul className="service-features">
                  {s.features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <Link href="/contact" className="service-cta">
                  Start a project →
                </Link>
              </div>
            ))}
          </div>

          {/* Pricing Anchor */}
          <div className="pricing-anchor reveal">
            <div className="pricing-anchor-left">
              <h3>Investment</h3>
              <p>Project-based pricing. No retainer lock-ins. You own everything I build. Free 30-minute discovery call to start.</p>
            </div>
            <div className="pricing-tiers">
              <div className="pricing-tier">
                <div className="tier-price">$800+</div>
                <div className="tier-label">Single Workflow</div>
              </div>
              <div className="pricing-tier" style={{ borderColor: "rgba(124,106,255,0.35)", background: "rgba(124,106,255,0.05)" }}>
                <div className="tier-price" style={{ color: "var(--c-accent)" }}>$2,500+</div>
                <div className="tier-label">Full AI System</div>
              </div>
              <div className="pricing-tier">
                <div className="tier-price">$600/mo</div>
                <div className="tier-label">Retainer Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Objections */}
      <section className="section" style={{ borderTop: "1px solid var(--c-border)" }}>
        <div className="wrap">
          <div className="section-header reveal">
            <p className="section-eyebrow">Common Questions</p>
            <h2 className="h2">Answers before you even ask.</h2>
          </div>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            {faqItems.map((item, i) => (
              <details key={i} className={`faq-item reveal reveal-delay-${i % 3}`}>
                <summary className="faq-question">
                  {item.q}
                  <svg className="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="faq-answer">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="reveal" style={{ background: "linear-gradient(135deg, rgba(124,106,255,0.15), rgba(0,212,170,0.08))", border: "1px solid rgba(124,106,255,0.3)", borderRadius: "var(--radius-lg)", padding: "4rem 3rem" }}>
            <h2 className="h2" style={{ marginBottom: "1rem" }}>Not sure which service you need?</h2>
            <p className="lead" style={{ margin: "0 auto 2.5rem" }}>Book a free 30-minute call. I will audit your operations and tell you exactly what to automate first for the highest ROI.</p>
            <Link href="/contact" className="btn btn-primary btn-lg">Book a Free Strategy Call →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
