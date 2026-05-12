import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "AI Agents for Gulf Real Estate | WhatsApp AI Sales Agent for Dubai, Kuwait, UAE & Saudi Arabia",
  description: "AI-powered lead qualification, WhatsApp sales agents, and automated appointment booking for real estate agencies in Dubai, Kuwait, Abu Dhabi, Riyadh, and across the Gulf. Clients see 3× more booked meetings within 30 days.",
  keywords: [
    "AI real estate Dubai",
    "AI real estate Kuwait",
    "AI real estate UAE",
    "AI real estate Saudi Arabia",
    "WhatsApp AI agent real estate",
    "real estate automation Gulf",
    "AI lead qualification real estate",
    "AI sales agent property",
    "real estate chatbot Dubai",
    "real estate chatbot Kuwait",
    "AI property matching",
    "automated appointment booking real estate",
    "Gulf real estate AI automation",
    "AI agent for real estate agency",
  ],
  alternates: { canonical: "/gulf-real-estate-ai" },
  openGraph: {
    title: "AI Agents for Gulf Real Estate Agencies",
    description: "AI-powered lead qualification, WhatsApp sales agents, and automated appointment booking for real estate agencies across the Gulf. 3× more booked meetings within 30 days.",
    type: "website",
    url: "https://ai-with-abdullah.vercel.app/gulf-real-estate-ai",
  },
};

export default function GulfRealEstateAI() {
  return (
    <>
      {/* JSON-LD for this landing page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Agent for Gulf Real Estate Agencies",
            "description": "AI-powered WhatsApp sales agent, lead qualification, property matching, and automated appointment booking for real estate agencies in Kuwait, UAE, Dubai, Saudi Arabia, Bahrain, Qatar, and Oman.",
            "provider": {
              "@type": "Person",
              "name": "Abdullah",
              "jobTitle": "AI Agent Engineer",
              "url": "https://ai-with-abdullah.vercel.app/",
            },
            "areaServed": [
              { "@type": "Country", "name": "Kuwait" },
              { "@type": "Country", "name": "United Arab Emirates" },
              { "@type": "Country", "name": "Saudi Arabia" },
              { "@type": "Country", "name": "Bahrain" },
              { "@type": "Country", "name": "Qatar" },
              { "@type": "Country", "name": "Oman" },
            ],
            "serviceType": "AI Agent Development for Real Estate",
          }),
        }}
      />

      {/* ==================== HERO ==================== */}
      <section className="hero" style={{ paddingBottom: "4rem" }}>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="hero-badge hero-fade-in">
            <span className="pulse-dot"></span>
            Gulf Real Estate AI Specialist — Available for Projects
          </div>

          <h1 className="display hero-title hero-fade-in hero-delay-1">
            Your real estate agency is losing leads{" "}
            <span className="text-gradient">every single hour.</span>
            <br />
            <span style={{ fontSize: "0.6em", fontWeight: 400, color: "var(--c-muted)" }}>
              AI agents fix that — permanently.
            </span>
          </h1>

          <p className="lead hero-fade-in hero-delay-2" style={{ margin: "0 auto" }}>
            I build AI-powered WhatsApp sales agents specifically for real estate agencies in Kuwait, Dubai, UAE, Saudi Arabia, Bahrain, Qatar, and Oman. Your AI agent responds to every lead in under 60 seconds, qualifies them, matches properties, and books viewings — automatically, 24/7.
          </p>

          <div className="hero-cta-row hero-fade-in hero-delay-3">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Book a Free Strategy Call →
            </Link>
            <Link href="/blog/ai-real-estate-sales-agent" className="btn btn-ghost btn-lg">
              See the Full Case Study
            </Link>
          </div>

          {/* Gulf flags row */}
          <div className="hero-fade-in hero-delay-4" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginTop: "2rem", flexWrap: "wrap" }}>
            {[
              { flag: "🇰🇼", label: "Kuwait" },
              { flag: "🇦🇪", label: "UAE" },
              { flag: "🇸🇦", label: "Saudi Arabia" },
              { flag: "🇧🇭", label: "Bahrain" },
              { flag: "🇶🇦", label: "Qatar" },
              { flag: "🇴🇲", label: "Oman" },
            ].map(({ flag, label }) => (
              <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", padding: "0.35rem 0.85rem", background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "100px", fontSize: "0.85rem", color: "var(--c-muted)" }}>
                {flag} {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROBLEM SECTION ==================== */}
      <section className="section">
        <div className="wrap">
          <div className="section-header reveal">
            <p className="section-eyebrow">The Real Estate Problem in the Gulf</p>
            <h2 className="h2">Every hour without AI, <span className="text-gradient">your agency is losing deals.</span></h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginTop: "3rem" }}>
            {[
              { icon: "⏰", title: "77-Minute Average Response Time", desc: "Most Gulf real estate agencies take over an hour to respond to new leads. By then, the client has already contacted 3 other agencies." },
              { icon: "📱", title: "WhatsApp Is Your #1 Channel", desc: "In Kuwait, UAE, and Saudi Arabia, over 90% of real estate inquiries come through WhatsApp. But your agents cannot respond 24/7." },
              { icon: "📅", title: "Manual Booking Chaos", desc: "Double-bookings, forgotten viewings, no-shows without reminders. Your team wastes hours on scheduling that an AI agent handles in seconds." },
              { icon: "🌙", title: "Dead Hours = Dead Leads", desc: "Leads that arrive between 10pm and 8am in the Gulf get zero response until morning. By then, they have moved on to a competitor." },
              { icon: "💸", title: "Expensive Staff for Repetitive Work", desc: "You are paying experienced agents $2,000–$5,000/month to do work that an AI agent does for $200/month — better, faster, and 24/7." },
              { icon: "📉", title: "No Follow-Up System", desc: "After a viewing, most agencies never follow up. The client goes cold. The deal dies silently. An AI agent follows up every single time." },
            ].map((item, i) => (
              <div key={i} className={`reveal reveal-delay-${i % 4}`} style={{ padding: "2rem", background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{item.icon}</div>
                <h4 style={{ marginBottom: "0.75rem", fontSize: "1.05rem" }}>{item.title}</h4>
                <p style={{ color: "var(--c-muted)", fontSize: "0.9rem", lineHeight: "1.7" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHAT THE AI AGENT DOES ==================== */}
      <section className="section" style={{ borderTop: "1px solid var(--c-border)" }}>
        <div className="wrap">
          <div className="section-header reveal">
            <p className="section-eyebrow">What I Build For You</p>
            <h2 className="h2">A complete AI sales agent for <span className="text-gradient">your real estate agency.</span></h2>
          </div>

          <div className="process-steps" style={{ marginTop: "3rem" }}>
            {[
              { n: "01", title: "Instant Lead Response", desc: "Every WhatsApp message gets an intelligent, personalized response in under 60 seconds — day or night, weekday or weekend. The AI speaks Arabic and English." },
              { n: "02", title: "Smart Lead Qualification", desc: "The AI gathers budget, timeline, location preference, and intent (buy/sell/rent/invest) through natural conversation — not forms. Then routes to the right workflow." },
              { n: "03", title: "Property Matching & Delivery", desc: "Based on the client's exact criteria, the AI queries your property database and sends matching listings with photos, prices, and links — inside the WhatsApp chat." },
              { n: "04", title: "Automated Calendar Booking", desc: "The AI checks your agents' real-time calendar availability and books viewings instantly. Sends calendar invites, reminders (24hr + 1hr before), and handles rescheduling." },
              { n: "05", title: "Meeting Follow-Up", desc: "After every viewing, the AI sends a personalized follow-up referencing what was discussed — with new matching listings if available. No meeting goes unfollowed." },
              { n: "06", title: "Complete Notification System", desc: "Both client and agent get notified at every stage — booking, reminder, cancellation, reschedule. Everyone is always informed." },
            ].map((step, i) => (
              <div key={step.n} className={`step-card reveal reveal-delay-${i % 4}`}>
                <div className="step-num">{step.n}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CASE STUDY RESULTS ==================== */}
      <section className="section" style={{ borderTop: "1px solid var(--c-border)" }}>
        <div className="wrap">
          <div className="section-header reveal">
            <p className="section-eyebrow">Real Results — Kuwait</p>
            <h2 className="h2">Best Homes Kuwait: <span className="text-gradient">from 12 to 31 meetings per week.</span></h2>
          </div>

          <div className="stats-grid" style={{ marginTop: "3rem" }}>
            <div className="reveal">
              <div className="stat-num">&lt;60s</div>
              <div className="stat-label">Lead response time (from 77 minutes)</div>
            </div>
            <div className="reveal reveal-delay-1">
              <div className="stat-num">31</div>
              <div className="stat-label">Meetings booked per week (from 12)</div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="stat-num">6%</div>
              <div className="stat-label">No-show rate (from 28%)</div>
            </div>
            <div className="reveal reveal-delay-3">
              <div className="stat-num">100%</div>
              <div className="stat-label">Leads contacted within 5 minutes</div>
            </div>
          </div>

          <div className="reveal" style={{ marginTop: "3rem", padding: "2.5rem", background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)" }}>
            <div className="testimonial-stars" style={{ marginBottom: "1rem" }}>
              {"★★★★★".split("").map((s, j) => (
                <span key={j} style={{ color: "#f5c518", fontSize: "1.1rem" }}>★</span>
              ))}
            </div>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "var(--c-muted)", marginBottom: "1.5rem" }}>
              &ldquo;Abdullah built a full AI sales agent for our real estate agency on WhatsApp. Our lead response time went from 77 minutes to under 60 seconds. We went from 12 booked meetings a week to 31. The ROI was immediate — we recovered the project cost within the first month of closed deals.&rdquo;
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ fontSize: "1.5rem" }}>🇰🇼</span>
              <div>
                <strong style={{ display: "block" }}>Ahmed Al-Rashidi</strong>
                <span style={{ color: "var(--c-muted)", fontSize: "0.85rem" }}>CEO, Best Homes Kuwait</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== GULF-SPECIFIC FAQ ==================== */}
      <section className="section" style={{ borderTop: "1px solid var(--c-border)" }}>
        <div className="wrap">
          <div className="section-header reveal">
            <p className="section-eyebrow">Frequently Asked Questions</p>
            <h2 className="h2">Questions Gulf real estate agencies <span className="text-gradient">always ask.</span></h2>
          </div>

          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Does the AI agent work in Arabic?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes. The AI agent communicates fluently in both Arabic and English. It detects the client's language from their first message and responds accordingly. This is critical for Gulf markets where clients switch between Arabic and English." },
                  },
                  {
                    "@type": "Question",
                    "name": "How much does an AI sales agent for real estate cost?",
                    "acceptedAnswer": { "@type": "Answer", "text": "A full AI WhatsApp sales agent for a real estate agency typically costs between $2,500 and $5,000 depending on the number of integrations and property database size. Most agencies recover this investment within the first 30 days from additional closed deals. Monthly maintenance starts at $400/month." },
                  },
                  {
                    "@type": "Question",
                    "name": "Does it work with WhatsApp Business API?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes. The AI agent connects directly to the official WhatsApp Business API through Meta-verified channels. This means full compliance, green-tick verification support, and no risk of account bans that come with unofficial tools." },
                  },
                  {
                    "@type": "Question",
                    "name": "How long does it take to set up?",
                    "acceptedAnswer": { "@type": "Answer", "text": "A standard AI real estate sales agent takes 2-4 weeks from discovery call to live deployment. This includes mapping your workflows, connecting your property database, setting up calendar integration, and testing the system thoroughly before going live." },
                  },
                  {
                    "@type": "Question",
                    "name": "Can it connect to our existing CRM and property database?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes. The AI agent integrates with virtually any CRM (HubSpot, Salesforce, Zoho, etc.) and property management system that has an API. If your property listings are in Google Sheets, Airtable, or a custom database, it works with those too." },
                  },
                  {
                    "@type": "Question",
                    "name": "What happens if the AI agent cannot handle a question?",
                    "acceptedAnswer": { "@type": "Answer", "text": "The AI agent is designed with smart escalation. If a client asks something outside its scope or specifically requests a human agent, it smoothly transfers the conversation to the appropriate team member with full context — so the client never has to repeat themselves." },
                  },
                ],
              }),
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "3rem", maxWidth: "800px", margin: "3rem auto 0" }}>
            {[
              { q: "Does the AI agent work in Arabic?", a: "Yes. The AI agent communicates fluently in both Arabic and English. It detects the client's language from their first message and responds accordingly. This is critical for Gulf markets where clients switch between Arabic and English." },
              { q: "How much does an AI sales agent for real estate cost?", a: "A full AI WhatsApp sales agent typically costs between $2,500 and $5,000 depending on the number of integrations and your property database size. Most agencies recover this investment within the first 30 days from additional closed deals alone." },
              { q: "Does it work with WhatsApp Business API?", a: "Yes. The AI agent connects directly to the official WhatsApp Business API through Meta-verified channels. Full compliance, green-tick verification support, and no risk of account bans." },
              { q: "How long does it take to set up?", a: "A standard AI sales agent takes 2–4 weeks from discovery call to live deployment. This includes workflow mapping, property database connection, calendar integration, and thorough testing." },
              { q: "Can it connect to our existing CRM?", a: "Yes. It integrates with HubSpot, Salesforce, Zoho, and virtually any system with an API. If your listings are in Google Sheets, Airtable, or a custom database — it works with those too." },
              { q: "What happens if the AI cannot handle a question?", a: "Smart escalation. If a client asks something outside the AI's scope or requests a human, it transfers the conversation to the right team member — with full context, so the client never repeats themselves." },
            ].map((faq, i) => (
              <div key={i} className={`reveal reveal-delay-${i % 4}`} style={{ padding: "1.5rem 2rem", background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)" }}>
                <h4 style={{ marginBottom: "0.75rem", fontSize: "1rem" }}>{faq.q}</h4>
                <p style={{ color: "var(--c-muted)", fontSize: "0.92rem", lineHeight: "1.7", margin: 0 }}>{faq.a}</p>
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
              Now accepting Gulf real estate agency clients
            </div>
            <h2 className="h2" style={{ marginBottom: "1rem" }}>Ready to deploy an AI sales agent for your agency?</h2>
            <p className="lead" style={{ margin: "0 auto 2.5rem" }}>Let&apos;s talk for 30 minutes. I will map your exact workflow, show you where the AI agent fits, and give you a concrete proposal with ROI projections — before you commit to anything.</p>
            <Link href="/contact" className="btn btn-primary btn-lg">Book Your Free Strategy Call →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
