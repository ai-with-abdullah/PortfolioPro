import Link from "next/link";

export const metadata = {
  title: "FAQ — AI Agent Development Questions Answered",
  description: "Frequently asked questions about AI agent development, pricing, timelines, integrations, and how autonomous AI agents work for businesses. Get clear answers before booking a call.",
  keywords: [
    "AI agent FAQ",
    "AI automation questions",
    "how much does AI agent cost",
    "AI agent development timeline",
    "WhatsApp AI agent questions",
    "AI automation for business FAQ",
  ],
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    category: "AI Agents — Basics",
    items: [
      {
        q: "What is an AI agent?",
        a: "An AI agent is an autonomous software system that can reason about context, make decisions, and take actions on behalf of your business — without human intervention. Unlike simple automation (if-this-then-that), AI agents think before they act. They can understand natural language, handle complex conversations, and execute multi-step workflows independently.",
      },
      {
        q: "How is an AI agent different from a chatbot?",
        a: "A traditional chatbot follows a rigid script — it can only handle pre-defined questions and responses. An AI agent reasons about each situation dynamically. It can handle unexpected questions, maintain conversation context across multiple messages, make decisions based on real-time data (like calendar availability or property listings), and take actions (like booking meetings or sending notifications) without human help.",
      },
      {
        q: "What can AI agents do for my business?",
        a: "AI agents can handle lead qualification and follow-up, customer support, appointment scheduling, data entry and CRM management, email processing, invoice follow-ups, onboarding workflows, and much more. Any repetitive process that requires reasoning and action — not just data transfer — is a candidate for an AI agent.",
      },
      {
        q: "Do I need technical knowledge to use AI agents?",
        a: "No. I build, deploy, and document the entire system. Your AI agents run autonomously — you interact with them naturally without writing code. I also provide full documentation so your team understands how everything works.",
      },
    ],
  },
  {
    category: "Pricing & Investment",
    items: [
      {
        q: "How much does an AI agent cost?",
        a: "Pricing depends on complexity. A single workflow automation starts at $800. A full AI lead qualification system is $2,500. A complete AI sales agent with WhatsApp, calendar, and follow-up costs $3,500–$5,000. Custom AI models start at $4,000+. All pricing is project-based with no hidden fees. Monthly maintenance is optional and starts at $400/month.",
      },
      {
        q: "How do I calculate if AI automation is worth the investment?",
        a: "Simple formula: (Monthly Hours Saved × Hourly Staff Cost) = Monthly Savings. Then compare Monthly Savings × 12 against the project cost. Example: If your team spends 3 hours/day on manual lead follow-up (3 agents × 3 hours × 22 days = 198 hours/month), at $20/hour that is $3,960/month wasted. A $3,000 AI agent pays for itself in 23 days.",
      },
      {
        q: "Do you charge hourly or per project?",
        a: "Per project only. I never charge hourly. Every engagement starts with a free 30-minute discovery call where I scope the work and provide a fixed price. No surprises.",
      },
      {
        q: "Do I own the code and workflows you build?",
        a: "Yes. You own 100% of everything I build — code, workflows, documentation, and data. No lock-in, no recurring platform fees. If we stop working together, you keep everything.",
      },
    ],
  },
  {
    category: "Process & Timeline",
    items: [
      {
        q: "How long does it take to build an AI agent?",
        a: "Most single AI agent deployments are live within 2–4 weeks. Complex multi-agent systems with multiple integrations typically take 4–8 weeks. The timeline includes discovery, design, development, testing, and deployment.",
      },
      {
        q: "What does the process look like?",
        a: "Step 1: Free 30-minute discovery call to map your operations. Step 2: I design the agent architecture and present a proposal with timeline and pricing. Step 3: I build, test, and deploy the AI agent into your existing tools. Step 4: Post-launch monitoring and optimization. You are involved at every checkpoint.",
      },
      {
        q: "Do you provide ongoing support after launch?",
        a: "Yes. Every project includes 30 days of free post-launch support. After that, I offer optional monthly retainers starting at $400/month for monitoring, updates, and building new automations.",
      },
    ],
  },
  {
    category: "Technical & Integrations",
    items: [
      {
        q: "What tools and platforms do your AI agents integrate with?",
        a: "My agents integrate with virtually any platform that has an API — including WhatsApp Business API, HubSpot, Salesforce, Zoho, Google Calendar, Gmail, Slack, Notion, Airtable, Google Sheets, Shopify, Stripe, and hundreds more.",
      },
      {
        q: "Can you build a WhatsApp AI agent?",
        a: "Yes. WhatsApp AI agents are one of my most popular builds. I create agents that understand context, qualify leads, match properties, book meetings, send reminders, and follow up — all autonomously via the official WhatsApp Business API.",
      },
      {
        q: "Does the AI agent work in Arabic?",
        a: "Yes. AI agents I build can communicate fluently in Arabic, English, and other languages. They detect the user's language from their first message and respond accordingly — critical for Gulf market clients who switch between Arabic and English.",
      },
      {
        q: "What happens if the AI agent encounters something it cannot handle?",
        a: "Every AI agent I build includes a smart escalation system. If a client asks something outside the AI's scope, or specifically requests a human, the agent seamlessly transfers the conversation to the right team member with full context — so the client never has to repeat themselves.",
      },
      {
        q: "Is my data safe?",
        a: "Yes. I prioritize data privacy. AI agents are typically self-hosted on your own infrastructure, meaning your customer data never leaves your servers. All connections use encryption, and I follow security best practices throughout the build.",
      },
    ],
  },
  {
    category: "Gulf Real Estate Specific",
    items: [
      {
        q: "Do you specialize in real estate AI for the Gulf?",
        a: "Yes. I have built AI sales agents specifically for real estate agencies in the Gulf region, including Kuwait. My systems handle WhatsApp lead qualification, property matching, calendar booking, reminders, and post-meeting follow-up — the exact workflow Gulf real estate agencies need.",
      },
      {
        q: "What results have Gulf real estate clients seen?",
        a: "My most recent Gulf client (Best Homes Kuwait) saw their lead response time drop from 77 minutes to under 60 seconds, booked meetings increase from 12 to 31 per week, and no-show rates drop from 28% to 6%. They recovered the full project cost within the first month.",
      },
      {
        q: "Can you work with agencies in Dubai, Abu Dhabi, Riyadh, or Doha?",
        a: "Yes. I work remotely with agencies across all Gulf countries — Kuwait, UAE (Dubai, Abu Dhabi, Sharjah), Saudi Arabia (Riyadh, Jeddah), Bahrain, Qatar, and Oman. My timezone (PKT, UTC+5) is very close to Gulf Standard Time, making real-time collaboration easy.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* FAQ Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.flatMap(cat =>
              cat.items.map(item => ({
                "@type": "Question",
                "name": item.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.a,
                },
              }))
            ),
          }),
        }}
      />

      <section className="hero" style={{ paddingBottom: "2rem" }}>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="wrap" style={{ textAlign: "center" }}>
          <h1 className="display hero-title hero-fade-in">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>
          <p className="lead hero-fade-in hero-delay-1" style={{ margin: "0 auto" }}>
            Everything you need to know about AI agents, pricing, timelines, and how I work — answered honestly.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="wrap" style={{ maxWidth: "850px" }}>
          {faqs.map((category, ci) => (
            <div key={ci} style={{ marginBottom: "3.5rem" }}>
              <h2 className={`h2 reveal`} style={{ fontSize: "1.3rem", marginBottom: "1.5rem" }}>
                <span className="text-gradient">{category.category}</span>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {category.items.map((faq, fi) => (
                  <div key={fi} className={`reveal reveal-delay-${fi % 4}`} style={{ padding: "1.5rem 2rem", background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)", transition: "border-color 0.3s ease" }}>
                    <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.75rem", lineHeight: "1.5" }}>{faq.q}</h3>
                    <p style={{ color: "var(--c-muted)", fontSize: "0.92rem", lineHeight: "1.8", margin: 0 }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* CTA */}
          <div className="reveal" style={{ textAlign: "center", marginTop: "3rem", padding: "3rem 2rem", background: "linear-gradient(135deg, rgba(124,106,255,0.1), rgba(0,212,170,0.06))", border: "1px solid rgba(124,106,255,0.2)", borderRadius: "var(--radius-lg)" }}>
            <h3 style={{ marginBottom: "1rem" }}>Still have questions?</h3>
            <p style={{ color: "var(--c-muted)", marginBottom: "2rem" }}>Book a free 30-minute call. I will answer everything and scope your project — no obligation.</p>
            <Link href="/contact" className="btn btn-primary">Book a Free Strategy Call →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
