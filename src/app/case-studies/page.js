import Link from "next/link";

export const metadata = {
  title: "AI Automation Case Studies & Results | Real ROI — Abdullah AI",
  description: "Real AI automation case studies: a real estate agency saving 300+ hours monthly, a medical AI at 99.8% accuracy, and an e-commerce brand saving $8k/month. See what N8N and custom AI can do for your business.",
  keywords: ["AI automation case study", "n8n automation results", "workflow automation ROI", "ai automation real estate", "n8n whatsapp results", "business automation proof"],
  alternates: { canonical: "/case-studies" },
};

const studies = [
  {
    tag: "Real Estate Automation",
    title: "Real Estate Lead Engine",
    desc: "A real estate agency was losing leads daily because follow-ups happened hours later. I built an end-to-end N8N pipeline: the moment a lead submits a form, the AI qualifies them, sends a personalized WhatsApp message within 60 seconds, updates the CRM, and books a calendar slot — all automatically.",
    results: [
      { num: "8× faster", label: "Lead response time" },
      { num: "300+", label: "Hours saved monthly" },
      { num: "40%", label: "More booked meetings" },
    ],
    tags: ["N8N", "WhatsApp API", "HubSpot", "OpenAI"],
    visual: ["📥", "🤖", "💬", "📅"],
  },
  {
    tag: "Healthcare AI",
    title: "DermaFusion Medical AI",
    desc: "Engineered a multi-branch AI diagnostic pipeline processing 15 heterogeneous medical imaging datasets. I implemented a novel Domain-Stratified architecture and calibrated confidence scoring to deliver clinical-grade predictions — a system that typically takes large teams years to build.",
    results: [
      { num: "99.8%", label: "Model accuracy" },
      { num: "15", label: "Datasets integrated" },
      { num: "40%", label: "Reduction in diagnosis time" },
    ],
    tags: ["PyTorch", "Computer Vision", "Python", "AWS"],
    visual: ["🩺", "🧬", "🔬", "✅"],
  },
  {
    tag: "E-Commerce Automation",
    title: "Order & Reporting Automation",
    desc: "An e-commerce brand had 3 staff members manually processing orders, updating spreadsheets, and emailing suppliers every day. I automated the entire post-purchase flow: order confirmation, inventory updates, supplier notifications, and weekly executive reports — triggered automatically from Shopify.",
    results: [
      { num: "3 → 0", label: "Staff hours on manual tasks" },
      { num: "100%", label: "Error-free reporting" },
      { num: "$8k+", label: "Monthly operational savings" },
    ],
    tags: ["N8N", "Shopify API", "Google Sheets", "Slack"],
    visual: ["🛒", "📦", "📊", "💰"],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: "8rem", textAlign: "center" }}>
        <div className="wrap">
          <p className="section-eyebrow reveal">Proven Results</p>
          <h1 className="h2 reveal reveal-delay-1">
            Real businesses. Real automation. <span className="text-gradient">Real ROI.</span>
          </h1>
          <p className="lead reveal reveal-delay-2" style={{ margin: "1.5rem auto 0" }}>
            Every number below is from a live project. No hypotheticals. No stock photos. These are real systems I have built that run every day.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="wrap">
          {studies.map((study, i) => (
            <div key={study.title} className="study-card reveal">
              <div className="study-body">
                <div className="study-tag">{study.tag}</div>
                <h3 className="h3">{study.title}</h3>
                <p>{study.desc}</p>

                {/* Tech Stack Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1.5rem" }}>
                  {study.tags.map(t => (
                    <span key={t} style={{ padding: "0.3rem 0.8rem", background: "rgba(255,255,255,0.05)", borderRadius: "4px", fontSize: "0.8rem", border: "1px solid var(--c-border)", fontFamily: "var(--font-mono)" }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="study-results">
                  {study.results.map(r => (
                    <div key={r.label} className="result-stat">
                      <div className="num text-gradient">{r.num}</div>
                      <div className="lbl">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="study-visual">
                {/* Simple animated visual representing the automation flow */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
                  {study.visual.map((icon, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <div style={{ width: 48, height: 48, background: "var(--c-surface2)", border: "1px solid var(--c-border)", borderRadius: 12, display: "grid", placeItems: "center", fontSize: "1.4rem", boxShadow: j === 1 ? "0 0 20px rgba(124,106,255,0.4)" : "none", borderColor: j === 1 ? "var(--c-accent)" : "var(--c-border)" }}>
                        {icon}
                      </div>
                      {j < study.visual.length - 1 && (
                        <div style={{ position: "relative" }}>
                          <div style={{ width: 24, height: 1, background: "var(--c-border)", position: "relative" }}>
                            <div style={{ position: "absolute", top: -3, left: 0, width: 8, height: 8, borderRadius: "50%", background: "var(--c-accent)", boxShadow: "0 0 8px var(--c-accent)", animation: "pulse-anim 2s infinite" }}></div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  <p style={{ fontSize: "0.75rem", color: "var(--c-muted)", fontFamily: "var(--font-mono)", marginTop: "0.5rem" }}>LIVE SYSTEM</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="reveal" style={{ background: "linear-gradient(135deg, rgba(124,106,255,0.15), rgba(0,212,170,0.08))", border: "1px solid rgba(124,106,255,0.3)", borderRadius: "var(--radius-lg)", padding: "4rem 3rem" }}>
            <h2 className="h2" style={{ marginBottom: "1rem" }}>Your business could be next.</h2>
            <p className="lead" style={{ margin: "0 auto 2.5rem" }}>Book a free call and I will identify exactly which processes in your business are ready to be automated for maximum ROI.</p>
            <Link href="/contact" className="btn btn-primary btn-lg">Book a Free Strategy Call →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
