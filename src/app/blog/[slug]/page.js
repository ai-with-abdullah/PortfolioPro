import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "../data";

// Generate static params so Next.js pre-renders all blog pages for SEO
export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

// Dynamic metadata per post
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.desc,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.desc,
      type: "article",
      publishedTime: post.date,
      authors: ["Abdullah"],
    },
  };
}

// Simple Markdown-to-HTML renderer (no external dependencies)
function renderMarkdown(md) {
  let html = md
    // Tables
    .replace(/\|(.+)\|\n\|[-| ]+\|\n((?:\|.+\|\n?)*)/g, (_, head, body) => {
      const headers = head.split('|').filter(Boolean).map(h => `<th>${h.trim()}</th>`).join('');
      const rows = body.trim().split('\n').map(row => {
        const cells = row.split('|').filter(Boolean).map(c => `<td>${c.trim()}</td>`).join('');
        return `<tr>${cells}</tr>`;
      }).join('');
      return `<table><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table>`;
    })
    // Code blocks
    .replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) =>
      `<pre><code class="lang-${lang}">${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`
    )
    // H2
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    // H3
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // HR
    .replace(/^---$/gm, '<hr />')
    // Links  [text](href)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    // Numbered list items
    .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
    // Bullet list items
    .replace(/^[-*] (.+)$/gm, '<li>$1</li>')
    // Wrap consecutive <li> in <ul>
    .replace(/(<li>[\s\S]*?<\/li>)(?!<li>)/g, (m) => {
      return `<ul>${m}</ul>`;
    })
    // Blockquote
    .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
    // Paragraphs — wrap lines that are not already wrapped in a tag
    .split('\n\n')
    .map(block => {
      const trimmed = block.trim();
      if (!trimmed) return '';
      if (/^<[huptbca]/.test(trimmed)) return trimmed;
      return `<p>${trimmed.replace(/\n/g, ' ')}</p>`;
    })
    .join('\n');
  return html;
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Use relatedSlugs if available, otherwise fall back to first 3 posts
  const relatedPosts = post.relatedSlugs
    ? post.relatedSlugs.map(s => posts.find(p => p.slug === s)).filter(Boolean)
    : posts.filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Article JSON-LD Schema — unlocks rich results in Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.desc,
            "datePublished": post.date,
            "dateModified": post.lastUpdated || post.date,
            "author": { "@type": "Person", "name": "Abdullah", "url": "https://abdullah-ai.com" },
            "publisher": {
              "@type": "Organization",
              "name": "Abdullah AI",
              "url": "https://abdullah-ai.com",
            },
            "mainEntityOfPage": { "@type": "WebPage", "@id": `https://abdullah-ai.com/blog/${slug}` },
          }),
        }}
      />
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "5.5rem var(--gutter) 0" }}>
        <Link href="/blog" className="back-link">
          ← Back to Blog
        </Link>
      </div>

      {/* Hero Cover */}
      <div className="blog-post-hero" style={{ background: post.coverGradient, position: "relative", overflow: "hidden" }}>
        {post.coverImage && (
          <Image src={post.coverImage} alt="" fill sizes="100vw" style={{ objectFit: "cover", opacity: 0.35 }} />
        )}
        <div className="blog-post-hero-content" style={{ position: "relative", zIndex: 2 }}>
          <div className="blog-post-tag">{post.tag}</div>
          <h1 className="blog-post-title">{post.title}</h1>
          <div className="blog-post-meta">
            <span>By Abdullah</span>
            <span className="meta-dot">·</span>
            <span>{post.date}</span>
            <span className="meta-dot">·</span>
            <span>{post.readTime}</span>
            {post.lastUpdated && post.lastUpdated !== post.date && (
              <>
                <span className="meta-dot">·</span>
                <span>Updated {post.lastUpdated}</span>
              </>
            )}
          </div>
        </div>
        {/* Visual Accent */}
        <div className="blog-hero-accent" style={{ position: "relative", zIndex: 2 }}>
          <div className="blog-hero-icon">{post.coverEmoji}</div>
          <div className="blog-hero-label">{post.coverLabel}</div>
        </div>
      </div>

      {/* Article Body */}
      <div className="blog-layout">
        {/* Main Content */}
        <article className="blog-article">
          {/* Lead paragraph */}
          <p className="blog-lead">{post.desc}</p>
          <hr className="blog-divider" />
          {/* Rendered Markdown Content */}
          <div
            className="blog-body"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />
        </article>

        {/* Sidebar */}
        <aside className="blog-sidebar">
          {/* Author Card */}
          <div className="sidebar-card">
            <div className="sidebar-author">
              <Image src="/me.jpg" alt="Abdullah" className="sidebar-avatar" width={52} height={52} />
              <div>
                <strong>Abdullah</strong>
                <span>AI Agent Engineer</span>
              </div>
            </div>
            <p style={{ fontSize: "0.88rem", color: "var(--c-muted)", marginBottom: "1rem" }}>
              I build autonomous AI agents and multi-agent systems for businesses globally. 10+ live systems running 24/7.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Work With Me →
            </Link>
          </div>

          {/* Related Posts */}
          <div className="sidebar-card">
            <h4 style={{ marginBottom: "1.25rem", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1px", color: "var(--c-muted)" }}>More Articles</h4>
            {relatedPosts.map(rp => (
              <Link key={rp.slug} href={`/blog/${rp.slug}`} className="sidebar-related-post">
                <div className="srp-cover" style={{ background: rp.coverGradient, position: "relative", overflow: "hidden" }}>
                  {rp.coverImage ? (
                    <Image src={rp.coverImage} alt="" fill sizes="80px" style={{ objectFit: "cover" }} />
                  ) : (
                    <span>{rp.coverEmoji}</span>
                  )}
                </div>
                <div>
                  <div className="blog-card-tag" style={{ marginBottom: "0.25rem" }}>{rp.tag}</div>
                  <p style={{ fontSize: "0.88rem", color: "var(--c-text)", lineHeight: 1.4 }}>{rp.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>

      {/* Bottom CTA */}
      <section className="section">
        <div className="wrap" style={{ textAlign: "center" }}>
          <div style={{ background: "linear-gradient(135deg, rgba(124,106,255,0.15), rgba(0,212,170,0.08))", border: "1px solid rgba(124,106,255,0.3)", borderRadius: "var(--radius-lg)", padding: "4rem 3rem", maxWidth: 680, margin: "0 auto" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.25)", borderRadius: "999px", padding: "0.3rem 0.9rem", marginBottom: "1.25rem", fontSize: "0.8rem", color: "var(--c-accent2)", fontWeight: 600 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--c-accent2)", display: "inline-block" }}></span>
              1 client spot open this month
            </div>
            <h2 className="h2" style={{ marginBottom: "1rem" }}>Want this built for your business?</h2>
            <p className="lead" style={{ margin: "0 auto 2rem" }}>
              Book a free 30-minute strategy call. I will map your exact operations and show you a concrete automation plan — for free. No pitch. Just a plan.
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg">Book a Free Strategy Call →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
