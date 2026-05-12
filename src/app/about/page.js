import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Abdullah — AI Agent Engineer & Agentic AI Architect",
  description: "Abdullah is an AI Agent Engineer who builds autonomous AI agents and multi-agent systems for businesses globally. Specializing in Agentic AI, Context Engineering, and WhatsApp AI agents for real estate, e-commerce, and healthcare.",
  keywords: [
    "Abdullah AI Agent Engineer",
    "about Abdullah AI",
    "AI automation specialist",
    "agentic AI architect",
    "AI engineer Pakistan",
    "AI developer Gulf",
    "WhatsApp AI agent developer",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Abdullah — AI Agent Engineer",
    description: "AI Agent Engineer building autonomous systems that think, decide, and act for businesses globally. 300+ hours saved per client monthly.",
    type: "profile",
    url: "https://abdullah-ai.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Person Schema for About page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Abdullah",
            "jobTitle": "AI Agent Engineer & Agentic AI Architect",
            "description": "AI Agent Engineer who builds autonomous AI agents and multi-agent systems for businesses globally, saving 300+ hours per month. Specializes in Agentic AI, Context Engineering, and Multi-Agent Orchestration.",
            "url": "https://abdullah-ai.com/about",
            "image": "https://abdullah-ai.com/me.jpg",
            "telephone": "+923194124382",
            "email": "abdullah.tech.ai@gmail.com",
            "address": { "@type": "PostalAddress", "addressCountry": "PK" },
            "alumniOf": [],
            "knowsAbout": [
              "AI Agents", "Multi-Agent Systems", "Agentic AI", "Context Engineering",
              "Machine Learning", "WhatsApp Business API", "OpenAI", "LangChain",
              "N8N", "Computer Vision", "NLP", "PyTorch", "TensorFlow",
            ],
            "sameAs": [
              "https://www.linkedin.com/in/ai-with-abdullah",
              "https://www.instagram.com/abdullah.automations",
            ],
          }),
        }}
      />

      {/* ==================== HERO ==================== */}
      <section className="hero" style={{ paddingBottom: "2rem" }}>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="wrap" style={{ textAlign: "center" }}>
          <h1 className="display hero-title hero-fade-in">
            About <span className="text-gradient">Abdullah</span>
          </h1>
          <p className="lead hero-fade-in hero-delay-1" style={{ margin: "0 auto" }}>
            AI Agent Engineer — building autonomous systems that think, decide, and act for businesses globally.
          </p>
        </div>
      </section>

      {/* ==================== BIO SECTION ==================== */}
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="wrap">
          <div className="about-grid">
            {/* Photo */}
            <div className="about-photo-col reveal">
              <div className="about-photo-wrap">
                <Image
                  src="/me.jpg"
                  alt="Abdullah — AI Agent Engineer"
                  className="about-photo"
                  width={300}
                  height={300}
                />
                <div className="photo-glow"></div>
              </div>
              <div className="about-badges">
                <div className="about-badge"><span>🤖</span> AI Agent Architect</div>
                <div className="about-badge"><span>🧠</span> ML Engineer</div>
                <div className="about-badge"><span>🌍</span> Global Clients</div>
              </div>
            </div>

            {/* Bio */}
            <div className="about-bio reveal reveal-delay-1">
              <p className="section-eyebrow">Who I Am</p>
              <h2 className="h2" style={{ marginBottom: "1.5rem" }}>
                I build AI agents that <span className="text-gradient">replace manual work.</span>
              </h2>
              <p style={{ color: "var(--c-muted)", fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "1.5rem" }}>
                I am Abdullah — an AI Agent Engineer and Agentic AI Architect based in Pakistan, working with clients across Kuwait, UAE, Saudi Arabia, and globally. I specialize in building autonomous AI agent systems that think, reason, and act on behalf of businesses — handling leads, operations, scheduling, and customer engagement around the clock.
              </p>
              <p style={{ color: "var(--c-muted)", fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "1.5rem" }}>
                My core belief is simple: businesses should not pay humans to do repetitive work that AI agents can handle better, faster, and 24/7. Every system I build is designed around one measurable goal — giving you back your time so you can focus on growing your business.
              </p>
              <p style={{ color: "var(--c-muted)", fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "2rem" }}>
                My background spans AI/ML engineering, full-stack development, and business process optimization. I have built everything from multi-agent sales systems on WhatsApp to medical AI diagnostic pipelines achieving 99.8% accuracy across 15 datasets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== EXPERTISE ==================== */}
      <section className="section" style={{ borderTop: "1px solid var(--c-border)" }}>
        <div className="wrap">
          <div className="section-header reveal">
            <p className="section-eyebrow">Technical Expertise</p>
            <h2 className="h2">What I <span className="text-gradient">specialize in.</span></h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", marginTop: "3rem" }}>
            {[
              {
                icon: "🤖",
                title: "AI Agent Development",
                desc: "Autonomous AI agents that reason, decide, and act — handling lead qualification, sales follow-up, customer support, and operations 24/7 without human intervention.",
                tools: "N8N, LangChain, OpenAI GPT-4o, Claude, WhatsApp Business API",
              },
              {
                icon: "🧠",
                title: "Multi-Agent Systems",
                desc: "Orchestrating multiple AI agents that collaborate, share context, and execute complex business workflows end-to-end — from lead intake to deal closure.",
                tools: "N8N, LangGraph, Custom Orchestration",
              },
              {
                icon: "📱",
                title: "WhatsApp AI Agents",
                desc: "Intelligent conversational agents on WhatsApp that qualify leads, match products/properties, book appointments, send reminders, and follow up — all autonomously.",
                tools: "WhatsApp Business API, Meta Cloud API, GPT-4o",
              },
              {
                icon: "🔬",
                title: "Custom AI/ML Models",
                desc: "Computer Vision, NLP, and predictive analytics models trained on custom datasets. From skin disease diagnosis (99.8% accuracy) to document classification.",
                tools: "PyTorch, TensorFlow, AWS SageMaker, Python",
              },
              {
                icon: "⚙️",
                title: "Context Engineering",
                desc: "Designing the reasoning context, memory architecture, and decision logic that makes AI agents domain-aware, reliable, and capable of handling edge cases.",
                tools: "Prompt Engineering, RAG, Vector Databases",
              },
              {
                icon: "📊",
                title: "AI Strategy Consulting",
                desc: "Full business process audits to identify the highest-ROI automation opportunities. Actionable AI agent roadmaps with timeline and investment projections.",
                tools: "Process Mapping, ROI Analysis, Technology Selection",
              },
            ].map((skill, i) => (
              <div key={i} className={`reveal reveal-delay-${i % 4}`} style={{ padding: "2rem", background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{skill.icon}</div>
                <h3 style={{ marginBottom: "0.75rem", fontSize: "1.05rem" }}>{skill.title}</h3>
                <p style={{ color: "var(--c-muted)", fontSize: "0.9rem", lineHeight: "1.7", marginBottom: "1rem" }}>{skill.desc}</p>
                <p style={{ fontSize: "0.78rem", color: "var(--c-accent)", fontFamily: "var(--font-mono)" }}>{skill.tools}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== KEY RESULTS ==================== */}
      <section className="section" style={{ borderTop: "1px solid var(--c-border)" }}>
        <div className="wrap">
          <div className="section-header reveal">
            <p className="section-eyebrow">Track Record</p>
            <h2 className="h2">Real projects. <span className="text-gradient">Real numbers.</span></h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginTop: "3rem" }}>
            {[
              { icon: "🏠", project: "Real Estate AI Sales Agent — Kuwait", result: "Booked meetings: 12 → 31/week. Response time: 77 min → 60 sec. No-show rate: 28% → 6%.", link: "/blog/ai-real-estate-sales-agent" },
              { icon: "🧬", project: "DermaFusion Medical AI", result: "99.8% diagnostic accuracy across 12 disease classes. 15 datasets integrated. 1.2s inference.", link: "/blog/dermafusion-ai-case-study" },
              { icon: "🛒", project: "E-Commerce Operations Agent", result: "Eliminated 3 staff roles of manual work. $8,000+/month savings. 100% error-free reporting.", link: "/case-studies" },
              { icon: "📧", project: "AI Email Agent", result: "Email management: 3 hrs/day → 20 min. 100% auto-sorted. Zero missed urgent emails in 6 months.", link: "/blog/n8n-openai-email-assistant" },
            ].map((item, i) => (
              <Link href={item.link} key={i} className={`reveal reveal-delay-${i}`} style={{ padding: "2rem", background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)", textDecoration: "none", display: "block", transition: "border-color 0.3s ease" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{item.icon}</div>
                <h4 style={{ marginBottom: "0.75rem", fontSize: "0.95rem" }}>{item.project}</h4>
                <p style={{ color: "var(--c-muted)", fontSize: "0.88rem", lineHeight: "1.7", margin: 0 }}>{item.result}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== HOW I WORK ==================== */}
      <section className="section" style={{ borderTop: "1px solid var(--c-border)" }}>
        <div className="wrap" style={{ maxWidth: "750px" }}>
          <div className="section-header reveal">
            <p className="section-eyebrow">Working With Me</p>
            <h2 className="h2">What you get when <span className="text-gradient">you hire me.</span></h2>
          </div>

          <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "2.5rem" }}>
            {[
              "Direct communication — you work with me personally, not a junior team or agency",
              "Fixed project pricing — no hidden hourly charges or surprise invoices",
              "Full ownership — you own 100% of all code, workflows, and documentation I create",
              "Comprehensive documentation — your team can understand and operate every system",
              "30-day post-launch support included in every project",
              "Gulf timezone compatibility — PKT (UTC+5) is close to GST (UTC+4)",
              "Available on WhatsApp, email, and video calls",
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
            <h2 className="h2" style={{ marginBottom: "1rem" }}>Want to work together?</h2>
            <p className="lead" style={{ margin: "0 auto 2.5rem" }}>Book a free 30-minute call. I will understand your business, identify the best automation opportunities, and give you a concrete plan — before you commit to anything.</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-primary btn-lg">Book a Free Strategy Call →</Link>
              <a href="https://wa.me/923194124382" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">Message on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
