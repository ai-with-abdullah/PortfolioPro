import Link from "next/link";
import Image from "next/image";
import { posts } from "./blog/data";
import { videos } from "./videos-data";

export const metadata = {
  title: "Hire an AI Agent Engineer | Agentic AI Systems & Custom AI Solutions",
  description: "Abdullah is an AI Agent Engineer who builds autonomous AI agents and multi-agent systems for businesses globally. Clients save 300+ hours/month and 3x their lead conversion. Book a free strategy call.",
  keywords: [
    "hire AI agent engineer",
    "agentic AI developer",
    "AI agent consultant",
    "multi-agent systems",
    "autonomous AI agents",
    "whatsapp AI agent",
    "custom AI agent development",
    "AI solutions freelancer",
    "AI consultant for small business",
    "AI-powered lead automation",
  ],
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="hero">
        {/* Floating background orbs */}
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="hero-badge hero-fade-in">
            <span className="pulse-dot"></span>
            AI Agent Engineer — Available for Projects
          </div>

          <h1 className="display hero-title hero-fade-in hero-delay-1">
            Stop hiring humans for work{" "}
            <span className="text-gradient">AI Agents can do better — 24/7.</span>
            <br />
            
          </h1>

          <p className="lead hero-fade-in hero-delay-2" style={{ margin: "0 auto" }}>
            I build autonomous AI agents and multi-agent systems that think, decide, and act for your business — handling leads, operations, and customer engagement around the clock.
          </p>

          <div className="hero-cta-row hero-fade-in hero-delay-3">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Book a Free Strategy Call →
            </Link>
            <Link href="/case-studies" className="btn btn-ghost btn-lg">
              See Real Results
            </Link>
          </div>

          {/* Trust badges row */}
          <div className="trust-badges-row hero-fade-in hero-delay-4" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
            <a
              href="https://share.google/YfIzBXnt8Kn29yQH9"
              target="_blank"
              rel="noopener noreferrer"
              className="google-badge"
            >
              {/* Real Google G SVG */}
              <span className="google-badge-icon">
                <svg width="16" height="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                  <path fill="none" d="M0 0h48v48H0z"/>
                </svg>
              </span>
              <span className="google-badge-text">
                {/* <span className="google-stars">★★★★★</span> */}
                <span className="google-badge-label">Abdullah Automation · Google</span>
              </span>
            </a>
            <span style={{ color: "var(--c-muted)", fontSize: "0.82rem" }}>Open 24 hours · Verified Business</span>
          </div>
          <div className="flow-visual hero-fade-in hero-delay-4">
            <div className="flow-track">
              <div className="flow-node">
                <span className="flow-node-icon">📥</span>
                <span className="flow-node-name">Lead Arrives</span>
                <span className="flow-node-label mono">TRIGGER</span>
              </div>
              <div className="flow-connector"></div>
              <div className="flow-node">
                <span className="flow-node-icon">🧠</span>
                <span className="flow-node-name">Agent Reasons</span>
                <span className="flow-node-label mono">CONTEXT</span>
              </div>
              <div className="flow-connector"></div>
              <div className="flow-node flow-node-active node-ai">
                <span className="flow-node-icon">🤖</span>
                <span className="flow-node-name">Agent Acts</span>
                <span className="flow-node-label mono" style={{ color: "var(--c-accent)" }}>AI AGENT</span>
              </div>
              <div className="flow-connector"></div>
              <div className="flow-node">
                <span className="flow-node-icon">📊</span>
                <span className="flow-node-name">Systems Sync</span>
                <span className="flow-node-label mono">ORCHESTRATE</span>
              </div>
              <div className="flow-connector"></div>
              <div className="flow-node">
                <span className="flow-node-icon">✅</span>
                <span className="flow-node-name">Deal Closed</span>
                <span className="flow-node-label mono" style={{ color: "var(--c-accent2)" }}>DONE</span>
              </div>
            </div>
            <p style={{ textAlign: "center", color: "var(--c-muted)", fontSize: "0.85rem", marginTop: "1.5rem", fontFamily: "var(--font-mono)" }}>
              ↑ This AI agent runs autonomously, 24/7 — reasoning and acting without human intervention.
            </p>
          </div>

          {/* Mobile-only simplified flow (shown below 600px) */}
          <div className="flow-visual-mobile" style={{ display: "none" }}>
            {[
              { icon: "📥", name: "Lead Arrives", label: "TRIGGER" },
              { icon: "🧠", name: "Agent Reasons", label: "CONTEXT" },
              { icon: "🤖", name: "Agent Acts", label: "AI AGENT" },
              { icon: "✅", name: "Deal Closed", label: "DONE" },
            ].map((node, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1rem", background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-sm)" }}>
                <span style={{ fontSize: "1.4rem" }}>{node.icon}</span>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>{node.name}</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--c-accent)", fontFamily: "var(--font-mono)" }}>{node.label}</div>
                </div>
                {i < 3 && <span style={{ marginLeft: "auto", color: "var(--c-muted)" }}>↓</span>}
              </div>
            ))}
            <p style={{ textAlign: "center", color: "var(--c-muted)", fontSize: "0.8rem", fontFamily: "var(--font-mono)", marginTop: "0.5rem" }}>
              Runs 24/7, autonomously.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== STATS STRIP ==================== */}
      <div className="stats-strip">
        <div className="wrap">
          <div className="stats-grid">
            <div className="reveal">
              <div className="stat-num">300+</div>
              <div className="stat-label">Hours saved per client / month</div>
            </div>
            <div className="reveal reveal-delay-1">
              <div className="stat-num">3×</div>
              <div className="stat-label">Average lead conversion increase</div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="stat-num">99.9%</div>
              <div className="stat-label">Agent uptime SLA</div>
            </div>
            <div className="reveal reveal-delay-3">
              <div className="stat-num">24/7</div>
              <div className="stat-label">Your AI agents never sleep</div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== PROBLEM / SOLUTION ==================== */}
      <section className="section">
        <div className="wrap">
          <div className="section-header reveal">
            <p className="section-eyebrow">The Real Problem</p>
            <h2 className="h2">Your business is leaking time & money <span className="text-gradient">every single day.</span></h2>
          </div>
          <div className="problem-solution">
            <div className="ps-card reveal">
              <p className="ps-label bad">❌ Without AI Agents</p>
              <ul className="ps-list">
                <li><span className="ps-icon">😩</span> Staff manually copy-pasting data between 5 tools</li>
                <li><span className="ps-icon">🐌</span> Leads wait hours for follow-up — and go cold</li>
                <li><span className="ps-icon">💸</span> You pay people to do work an AI agent can do in seconds</li>
                <li><span className="ps-icon">📉</span> Errors in manual reporting cost you real money</li>
                <li><span className="ps-icon">😴</span> Nothing happens when your team is offline</li>
              </ul>
            </div>
            <div className="ps-card solution reveal reveal-delay-1">
              <p className="ps-label good">✅ With My AI Agents</p>
              <ul className="ps-list">
                <li><span className="ps-icon">⚡</span> Autonomous agents connect, reason, and act across your tools</li>
                <li><span className="ps-icon">🚀</span> Every lead gets an intelligent, personalized response in under 60 seconds</li>
                <li><span className="ps-icon">💰</span> Slash operational costs with agents that think and execute</li>
                <li><span className="ps-icon">📊</span> Real-time, error-free reporting — agents monitor and report 24/7</li>
                <li><span className="ps-icon">🌍</span> Your business runs 24/7 — AI agents never take a day off</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section className="section" style={{ borderTop: "1px solid var(--c-border)" }}>
        <div className="wrap">
          <div className="section-header reveal">
            <p className="section-eyebrow">Simple Process</p>
            <h2 className="h2">From onboarding to <span className="text-gradient">fully autonomous</span> in weeks.</h2>
          </div>
          <div className="process-steps">
            {[
              { n: "01", title: "Discovery Call", desc: "We map your exact operations and identify the 3 biggest bottlenecks an AI agent can solve." },
              { n: "02", title: "Agent Architecture", desc: "I design your custom multi-agent system — defining each agent's role, context, and decision logic." },
              { n: "03", title: "Build & Deploy", desc: "I build, test, and deploy your AI agents live into your existing tools and workflows." },
              { n: "04", title: "Scale & Optimize", desc: "Once live, I monitor agent performance and optimize for accuracy, speed, and ROI." },
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

      {/* ==================== ABOUT / PERSONAL BRAND ==================== */}
      <section className="section" style={{ borderTop: "1px solid var(--c-border)" }}>
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
                {/* Decorative glow ring */}
                <div className="photo-glow"></div>
              </div>
              {/* Social proof badges under photo */}
              <div className="about-badges">
                <div className="about-badge"><span>🤖</span> AI Agent Architect</div>
                <div className="about-badge"><span>🧠</span> ML Engineer</div>
                <div className="about-badge"><span>🌍</span> Global Clients</div>
              </div>
            </div>

            {/* Bio */}
            <div className="about-bio reveal reveal-delay-1">
              <p className="section-eyebrow">The Person Behind The Systems</p>
              <h2 className="h2" style={{ marginBottom: "1.5rem" }}>
                Hi, I&apos;m <span className="text-gradient">Abdullah.</span>
              </h2>
              <p style={{ color: "var(--c-muted)", fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "1.5rem" }}>
                I am an AI Agent Engineer and Agentic AI Architect who builds autonomous systems that think, reason, and act for businesses globally. My work ranges from multi-agent sales systems to AI-powered diagnostic pipelines.
              </p>
              <p style={{ color: "var(--c-muted)", fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "2rem" }}>
                I do not believe in selling tools — I believe in solving real problems. Every agent I build is designed around one goal: <strong style={{ color: "var(--c-text)" }}>giving you back your time so you can focus on growing your business.</strong>
              </p>

              {/* Why me list */}
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                {[
                  "Built 10+ live AI agent systems currently running autonomously 24/7",
                  "Specialized in Agentic AI, Multi-Agent Systems, and Context Engineering",
                  "Every project comes with full documentation and ongoing support",
                  "Direct communication — you work with me, not an agency team",
                ].map(item => (
                  <li key={item} style={{ display: "flex", gap: "0.75rem", color: "var(--c-muted)", fontSize: "0.95rem" }}>
                    <span style={{ color: "var(--c-accent2)", flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn btn-primary">
                Work With Me →
              </Link>

              {/* Active Clients Geo Badge */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1.5rem" }}>
                {[
                  { flag: "🇰🇼", label: "Kuwait" },
                  { flag: "🇦🇪", label: "UAE" },
                  { flag: "🇵🇰", label: "Pakistan" },
                  { flag: "🌍", label: "Global Clients" },
                ].map(({ flag, label }) => (
                  <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", padding: "0.3rem 0.75rem", background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "100px", fontSize: "0.8rem", color: "var(--c-muted)" }}>
                    {flag} {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="section" style={{ borderTop: "1px solid var(--c-border)" }}>
        <div className="wrap">
          <div className="section-header reveal">
            <p className="section-eyebrow">Client Results</p>
            <h2 className="h2">Real businesses. <span className="text-gradient">Real results.</span></h2>
          </div>
          <div className="testimonials-grid">
            {[
              {
                name: "Ahmed Al-Rashidi",
                role: "CEO, Best Homes Kuwait",
                flag: "🇰🇼",
                stars: 5,
                text: "Abdullah built a full AI sales agent for our real estate agency on WhatsApp. Our lead response time went from 77 minutes to under 60 seconds. We went from 12 booked meetings a week to 31. The ROI was immediate — we recovered the project cost within the first month of closed deals.",
                result: "31 meetings/week → from 12",
              },
              {
                name: "Sarah M.",
                role: "Operations Director, E-Commerce Brand",
                flag: "🇦🇪",
                stars: 5,
                text: "I was skeptical at first — I have tried automation tools before and they always broke. Abdullah built an AI agent system that has now been running for 6 months without a single issue. We saved 300+ hours of manual data entry in the first quarter alone. The documentation he provided was excellent.",
                result: "300+ hours saved in Q1",
              },
              {
                name: "Tariq Hassan",
                role: "Founder, Digital Marketing Agency",
                flag: "🇵🇰",
                stars: 5,
                text: "The AI email agent Abdullah built reads every incoming email, reasons about priority, drafts a reply in my writing style, and pings me only for the important ones. I went from spending 3 hours on email every day to 20 minutes. He is the real deal — direct, professional, and the results speak for themselves.",
                result: "3 hrs → 20 min daily on email",
              },
            ].map((t, i) => (
              <div key={i} className={`testimonial-card reveal reveal-delay-${i}`}>
                <div className="testimonial-stars">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <span key={j} style={{ color: "#f5c518", fontSize: "1rem" }}>★</span>
                  ))}
                </div>
                <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                <div className="testimonial-result">
                  <span className="testimonial-result-icon">📈</span>
                  {t.result}
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.flag}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== VIDEO DEMOS ==================== */}
      {videos.length > 0 && (
        <section className="section" style={{ borderTop: "1px solid var(--c-border)" }}>
          <div className="wrap">
            <div className="section-header reveal">
              <p className="section-eyebrow">See It In Action</p>
              <h2 className="h2">Watch my AI agents <span className="text-gradient">working live.</span></h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${videos.length === 1 ? '500px' : '400px'}, 1fr))`, gap: "1.5rem" }}>
              {videos.map((video, i) => (
                <div key={video.id} className={`reveal reveal-delay-${i}`} style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
                  <div style={{ position: "relative", background: "#000" }}>
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      style={{ width: "100%", display: "block", aspectRatio: "16/9", objectFit: "contain" }}
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div style={{ padding: "1.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                      <span style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", color: "var(--c-accent)", padding: "0.2rem 0.6rem", background: "rgba(124,106,255,0.1)", borderRadius: "100px" }}>{video.tag}</span>
                      <span style={{ fontSize: "0.82rem", color: "var(--c-muted)" }}>{video.flag} {video.client}</span>
                    </div>
                    <h3 style={{ fontSize: "1.05rem", marginBottom: "0.5rem" }}>{video.title}</h3>
                    <p style={{ color: "var(--c-muted)", fontSize: "0.88rem", lineHeight: "1.6", margin: 0 }}>{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==================== BLOG PREVIEW ==================== */}
      <section className="section" style={{ borderTop: "1px solid var(--c-border)" }}>
        <div className="wrap">
          <div className="blog-section-header-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div className="reveal">
              <p className="section-eyebrow">Free Knowledge</p>
              <h2 className="h2">Learn how AI Agents <span className="text-gradient">actually work.</span></h2>
            </div>
            <Link href="/blog" className="btn btn-ghost reveal" style={{ flexShrink: 0 }}>View all articles →</Link>
          </div>

          <div className="blog-preview-grid">
            {posts.slice(0, 3).map((post, i) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className={`blog-card reveal reveal-delay-${i}`}>
                {/* Mini cover image or gradient */}
                <div style={{ height: "160px", background: post.coverGradient, borderRadius: "var(--radius-sm)", marginBottom: "1.25rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", position: "relative", overflow: "hidden" }}>
                  {post.coverImage ? (
                    <Image src={post.coverImage} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                  ) : (
                    post.coverEmoji
                  )}
                </div>
                <div className="blog-card-tag">{post.tag}</div>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-desc">{post.desc}</p>
                <div className="blog-card-meta">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA BANNER ==================== */}
      <section className="section">
        <div className="wrap">
          <div className="reveal" style={{ background: "linear-gradient(135deg, rgba(124,106,255,0.15), rgba(0,212,170,0.08))", border: "1px solid rgba(124,106,255,0.3)", borderRadius: "var(--radius-lg)", padding: "4rem 3rem", textAlign: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(0,212,170,0.12)", border: "1px solid rgba(0,212,170,0.3)", borderRadius: "999px", padding: "0.35rem 1rem", marginBottom: "1.5rem", fontSize: "0.82rem", color: "var(--c-accent2)" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--c-accent2)", display: "inline-block", animation: "pulse 2s infinite" }}></span>
              1 client spot open this month
            </div>
            <h2 className="h2" style={{ marginBottom: "1rem" }}>Ready to deploy AI agents for your business?</h2>
            <p className="lead" style={{ margin: "0 auto 2.5rem" }}>Let&apos;s talk for 30 minutes. I will show you exactly where AI agents can save you time and money — and build you a concrete plan. No pitch. No fluff.</p>
            <Link href="/contact" className="btn btn-primary btn-lg">Book Your Free Strategy Call →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
