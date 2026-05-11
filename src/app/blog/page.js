import Link from "next/link";
import { posts } from "./data";
import NewsletterForm from "./NewsletterForm";

export const metadata = {
  title: "AI Automation Blog — N8N Tutorials, Case Studies & AI Strategy | Abdullah AI",
  description: "Free in-depth guides on N8N workflow automation, custom AI model development, and real case studies with proven results. Learn modern AI automation strategies that actually work in 2026.",
  keywords: ["n8n tutorial", "AI automation guide", "workflow automation tips", "n8n whatsapp automation", "ai automation case study", "n8n openai integration"],
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="section" style={{ paddingTop: "8rem", textAlign: "center" }}>
        <div className="wrap">
          <p className="section-eyebrow reveal">Free Knowledge</p>
          <h1 className="h2 reveal reveal-delay-1">
            AI Automation guides that <span className="text-gradient">actually work in 2026.</span>
          </h1>
          <p className="lead reveal reveal-delay-2" style={{ margin: "1.5rem auto 0" }}>
            In-depth tutorials, real case studies, and honest AI strategy — written from live client projects, not theory.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="wrap">
          <div className="blog-grid">

            {/* Featured Post — Large Card with Cover Image */}
            <Link href={`/blog/${featured.slug}`} className="blog-hero-card reveal">
              <div className="blog-hero-body">
                <div className="blog-card-tag" style={{ marginBottom: "1rem" }}>{featured.tag} — Featured</div>
                <h2 style={{ fontSize: "1.75rem", fontWeight: 700, lineHeight: 1.3, letterSpacing: "-0.02em", marginBottom: "1rem", color: "var(--c-text)" }}>{featured.title}</h2>
                <p style={{ color: "var(--c-muted)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>{featured.desc}</p>
                <div className="blog-card-meta" style={{ border: "none", padding: 0 }}>
                  <span>{featured.date}</span>
                  <span>{featured.readTime}</span>
                </div>
              </div>
              {/* Cover Gradient Visual */}
              <div className="blog-hero-visual" style={{ background: featured.coverGradient }}>
                <div style={{ textAlign: "center" }}>
                  <div className="blog-cover-emoji">{featured.coverEmoji}</div>
                  <p className="blog-cover-label">{featured.coverLabel}</p>
                </div>
              </div>
            </Link>

            {/* Rest of posts */}
            {rest.map((post, i) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className={`blog-card reveal reveal-delay-${i % 3}`}>
                {/* Cover Image */}
                <div className="blog-card-cover" style={{ background: post.coverGradient }}>
                  <div className="blog-cover-emoji-sm">{post.coverEmoji}</div>
                  <div className="blog-cover-label-sm">{post.coverLabel}</div>
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-tag">{post.tag}</div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-desc">{post.desc}</p>
                  <div className="blog-card-meta">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section">
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="reveal" style={{ background: "linear-gradient(135deg, rgba(124,106,255,0.15), rgba(0,212,170,0.08))", border: "1px solid rgba(124,106,255,0.3)", borderRadius: "var(--radius-lg)", padding: "4rem 3rem", maxWidth: 680, margin: "0 auto" }}>
            <h2 className="h2" style={{ marginBottom: "1rem" }}>Get new automation guides in your inbox.</h2>
            <p className="lead" style={{ margin: "0 auto 2rem" }}>No fluff. One practical AI automation breakdown every week. Free forever.</p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
