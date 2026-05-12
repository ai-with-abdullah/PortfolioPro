import Link from "next/link";

export const metadata = {
  title: "AI Agent Development Services | Agentic AI & Multi-Agent Systems",
  description: "Hire an AI Agent Engineer to build autonomous AI agents and multi-agent systems for your business. Custom AI agents, agentic workflows, and AI strategy consulting. Serving clients globally.",
  keywords: ["hire AI agent engineer", "AI agent development services", "agentic AI freelancer", "multi-agent systems", "AI consultant for small business", "autonomous AI agents"],
  openGraph: {
    title: "AI Agent Development Services | Agentic AI & Multi-Agent Systems",
    description: "Hire an AI Agent Engineer to build autonomous AI agents and multi-agent systems for your business. Custom AI agents, agentic workflows, and AI strategy consulting.",
  },
  alternates: { canonical: "/services" },
};

const faqItems = [
  { q: "How long does an AI agent project take?", a: "Most AI agent deployments are live within 2–4 weeks. Complex multi-agent systems typically take 4–8 weeks depending on the number of agents and integration points." },
  { q: "Do I need technical knowledge to use the AI agents?", a: "No. I build, deploy, and document the entire system. Your AI agents run autonomously — you and your team interact with them naturally without writing code." },
  { q: "What tools do your AI agents integrate with?", a: "My agents integrate with virtually any platform that has an API — including HubSpot, Salesforce, Notion, Slack, Gmail, WhatsApp, Airtable, Google Sheets, and hundreds more." },
  { q: "What is your pricing model?", a: "I work on a project-based model after a free discovery call. Projects start from $1,200 for single AI agents and $3,500+ for multi-agent systems. No retainer lock-ins. You own everything I build." },
  { q: "Do you work with clients outside Pakistan?", a: "Yes — I work with clients globally. My current clients include businesses in Kuwait, UAE, Pakistan, and across Europe. All communication is remote via WhatsApp, email, or video call." },
  { q: "Can you build an AI agent for WhatsApp?", a: "Absolutely. WhatsApp AI agents are one of my most popular builds. I create agents that understand context, reason about leads, qualify them, book meetings, and follow up — all autonomously via the WhatsApp Business API." },
];

const services = [
  {
    tag: "Most Popular",
    icon: "🤖",
    title: "AI Agent Development",
    desc: "I design and deploy autonomous AI agents that reason, decide, and act on behalf of your business. Each agent is custom-built with context engineering to understand your domain deeply.",
    features: [
      "Autonomous lead qualification & follow-up agents",
      "Multi-agent orchestration systems",
      "Context engineering for domain-specific reasoning",
      "WhatsApp, Email & CRM AI agents",
      "Real-time decision-making with guardrails",
    ],
    details: {
      heading: "How AI Agent Development Works",
      description: "An AI agent is not a chatbot. It is a system that can reason about your business context, make decisions, and execute actions — without a human in the loop. I build agents that handle the entire workflow, from first contact to deal closure.",
      useCases: [
        { title: "Lead Qualification Agent", desc: "Automatically engages new leads on WhatsApp/email, gathers budget, timeline, and requirements through natural conversation, then routes qualified leads to your sales team with a full brief." },
        { title: "Sales Follow-Up Agent", desc: "Follows up with every prospect at optimal intervals. Sends personalized messages based on their last interaction. Handles objections, re-engages cold leads, and books meetings." },
        { title: "Customer Onboarding Agent", desc: "Guides new customers through your onboarding process step-by-step. Collects documents, answers questions, and ensures nothing falls through the cracks." },
        { title: "Appointment Booking Agent", desc: "Checks real-time calendar availability, books meetings, sends reminders (24hr + 1hr before), handles rescheduling and cancellations — all autonomously." },
      ],
      techStack: ["OpenAI GPT-4o", "Claude 3.5", "N8N", "LangChain", "WhatsApp Business API", "Google Calendar API", "HubSpot/Salesforce", "Airtable/Sheets"],
      timeline: "2–4 weeks",
      startingPrice: "$1,200",
    },
    id: "agents",
  },
  {
    tag: "Advanced",
    icon: "🧠",
    title: "Custom AI Solutions",
    desc: "From Computer Vision to predictive analytics, I build and fine-tune bespoke AI models trained on your proprietary data to give you a competitive intelligence advantage.",
    features: [
      "Custom dataset collection & preprocessing",
      "Model training (PyTorch / TensorFlow)",
      "Computer Vision (classification, detection)",
      "NLP & text analysis systems",
      "Cloud deployment (AWS / GCP / Azure)",
    ],
    details: {
      heading: "Custom AI Model Development",
      description: "When off-the-shelf AI APIs are not enough, I build custom machine learning models trained specifically on your data. These models give you a proprietary intelligence advantage that competitors cannot replicate.",
      useCases: [
        { title: "Medical Image Diagnosis", desc: "Built DermaFusion AI achieving 99.8% accuracy across 12 skin disease classes using 15 integrated medical imaging datasets. From training to deployment in under 6 weeks." },
        { title: "Document Classification", desc: "AI models that automatically categorize, extract data from, and route business documents (invoices, contracts, forms) — eliminating hours of manual sorting." },
        { title: "Predictive Analytics", desc: "Models that forecast sales, predict customer churn, or identify high-value leads based on your historical data. Turn your data into decisions." },
        { title: "Object Detection & Counting", desc: "Computer vision systems that detect, count, and track objects in images or video streams — useful for inventory management, quality control, and security." },
      ],
      techStack: ["PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "Hugging Face", "AWS SageMaker", "Google Cloud AI", "Python", "NumPy/Pandas"],
      timeline: "4–8 weeks",
      startingPrice: "$4,000",
    },
    id: "ai",
  },
  {
    tag: "Strategic",
    icon: "⚡",
    title: "AI Strategy Consulting",
    desc: "Not sure where AI agents fit into your business? I audit your operations and deliver an actionable roadmap for deploying AI agents where they will generate maximum ROI.",
    features: [
      "Full business process audit",
      "AI agent architecture roadmap",
      "Agent vs. automation decision framework",
      "ROI projection & prioritization",
      "Ongoing optimization & support",
    ],
    details: {
      heading: "AI Strategy & Operations Audit",
      description: "Before building anything, you need to know exactly where AI will deliver the highest return. I conduct a full operational audit of your business, identify the top automation opportunities, and give you a prioritized roadmap with cost and ROI projections.",
      useCases: [
        { title: "Operations Audit", desc: "I analyze every department's workflow — from lead generation to delivery — and identify the exact processes where AI agents will save the most time and money." },
        { title: "Technology Selection", desc: "I recommend the right tools, platforms, and AI models for your specific needs. No over-engineering, no unnecessary complexity — just what works." },
        { title: "ROI Projections", desc: "For each automation opportunity, I calculate the expected time savings, cost reduction, and revenue impact — so you can make data-driven investment decisions." },
        { title: "Implementation Roadmap", desc: "A phased plan showing exactly what to build first, second, and third — with timelines, milestones, and dependencies mapped out." },
      ],
      techStack: ["Process Mapping", "ROI Analysis", "Workflow Design", "Technology Assessment", "Implementation Planning"],
      timeline: "1–2 weeks",
      startingPrice: "Free (30-min discovery call)",
    },
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
            AI agents that think, decide, and <span className="text-gradient">act for your business.</span>
          </h1>
          <p className="lead reveal reveal-delay-2" style={{ margin: "1.5rem auto 0" }}>
            I build three core types of AI systems — all designed around one outcome: replacing the manual, repetitive work in your business with intelligent agents that run 24/7.
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
                <div className="tier-price">$1,200+</div>
                <div className="tier-label">Single AI Agent</div>
              </div>
              <div className="pricing-tier" style={{ borderColor: "rgba(124,106,255,0.35)", background: "rgba(124,106,255,0.05)" }}>
                <div className="tier-price" style={{ color: "var(--c-accent)" }}>$3,500+</div>
                <div className="tier-label">Multi-Agent System</div>
              </div>
              <div className="pricing-tier">
                <div className="tier-price">$800/mo</div>
                <div className="tier-label">Retainer Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DETAILED SERVICE BREAKDOWNS ==================== */}
      {services.map((s, idx) => (
        <section key={s.id} className="section" style={{ borderTop: "1px solid var(--c-border)" }}>
          <div className="wrap">
            <div className="section-header reveal">
              <p className="section-eyebrow">{s.icon} {s.title}</p>
              <h2 className="h2">{s.details.heading}</h2>
              <p style={{ color: "var(--c-muted)", maxWidth: "65ch", margin: "1rem auto 0", fontSize: "1rem", lineHeight: "1.8" }}>
                {s.details.description}
              </p>
            </div>

            {/* Use Cases Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginTop: "1rem" }}>
              {s.details.useCases.map((uc, i) => (
                <div key={i} className={`reveal reveal-delay-${i}`} style={{ padding: "2rem", background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)" }}>
                  <h4 style={{ marginBottom: "0.75rem", fontSize: "1rem" }}>{uc.title}</h4>
                  <p style={{ color: "var(--c-muted)", fontSize: "0.9rem", lineHeight: "1.7", margin: 0 }}>{uc.desc}</p>
                </div>
              ))}
            </div>

            {/* Tech Stack + Timeline + Price */}
            <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginTop: "2.5rem", padding: "2rem", background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)" }}>
              <div>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--c-accent)", marginBottom: "0.75rem" }}>Tech Stack</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {s.details.techStack.map(t => (
                    <span key={t} style={{ padding: "0.25rem 0.6rem", background: "rgba(124,106,255,0.08)", border: "1px solid rgba(124,106,255,0.2)", borderRadius: "100px", fontSize: "0.78rem", color: "var(--c-muted)" }}>{t}</span>
                  ))}
                </div>
              </div>
              <div>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--c-accent)", marginBottom: "0.75rem" }}>Timeline</p>
                <p style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0 }}>{s.details.timeline}</p>
              </div>
              <div>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--c-accent)", marginBottom: "0.75rem" }}>Starting At</p>
                <p style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0, color: "var(--c-accent2)" }}>{s.details.startingPrice}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ==================== HOW I WORK ==================== */}
      <section className="section" style={{ borderTop: "1px solid var(--c-border)" }}>
        <div className="wrap">
          <div className="section-header reveal">
            <p className="section-eyebrow">My Process</p>
            <h2 className="h2">How every project <span className="text-gradient">works.</span></h2>
          </div>

          <div className="process-steps">
            {[
              { n: "01", title: "Discovery Call", desc: "Free 30-minute call where I map your operations and identify the highest-ROI automation opportunities. No commitment." },
              { n: "02", title: "Proposal & Architecture", desc: "I deliver a detailed proposal with architecture diagrams, timeline, and fixed pricing. You approve before any work begins." },
              { n: "03", title: "Build & Test", desc: "I build the AI agent system, integrate it with your tools, and test it thoroughly. You review progress at every checkpoint." },
              { n: "04", title: "Deploy & Support", desc: "The system goes live. I monitor performance for 30 days, optimize as needed, and hand over full documentation." },
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

      {/* ==================== WHAT YOU GET ==================== */}
      <section className="section" style={{ borderTop: "1px solid var(--c-border)" }}>
        <div className="wrap" style={{ maxWidth: "750px" }}>
          <div className="section-header reveal">
            <p className="section-eyebrow">What's Included</p>
            <h2 className="h2">Every project <span className="text-gradient">comes with.</span></h2>
          </div>

          <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              "Direct communication with me — not a team, not an agency, not a junior",
              "Fixed project pricing — the price I quote is the price you pay",
              "Full ownership — you own 100% of all code, workflows, and documentation",
              "Comprehensive documentation — your team can understand and operate everything",
              "30-day post-launch support included in every project",
              "Unlimited revisions during development until you are satisfied",
              "Performance monitoring dashboard so you can track results",
              "Priority WhatsApp support during the project",
            ].map((item, i) => (
              <li key={i} className={`reveal reveal-delay-${i % 4}`} style={{ display: "flex", gap: "0.75rem", padding: "1rem 1.5rem", background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-sm)", color: "var(--c-muted)", fontSize: "0.95rem" }}>
                <span style={{ color: "var(--c-accent2)", flexShrink: 0 }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
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
            <h2 className="h2" style={{ marginBottom: "1rem" }}>Not sure which AI agent you need?</h2>
            <p className="lead" style={{ margin: "0 auto 2.5rem" }}>Book a free 30-minute call. I will audit your operations and show you exactly where an AI agent can deliver the highest ROI.</p>
            <Link href="/contact" className="btn btn-primary btn-lg">Book a Free Strategy Call →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
