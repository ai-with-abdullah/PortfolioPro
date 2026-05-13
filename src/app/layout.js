import { Inter } from "next/font/google";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "./Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: { default: "Abdullah | AI Agent Engineer & Agentic AI Architect", template: "%s | Abdullah AI" },
  description: "I build autonomous AI agents and multi-agent systems that think, decide, and act for your business — 24/7. 300+ hours saved per client monthly. Serving clients globally.",
  keywords: [
    "AI Agent Engineer", "Agentic AI Developer", "Multi-Agent Systems", "AI Agent Architect",
    "hire AI agent developer", "AI consultant", "WhatsApp AI agent", "custom AI agents",
    "autonomous AI systems", "AI engineer Pakistan", "AI-powered lead automation",
  ],
  metadataBase: new URL("https://ai-with-abdullah.vercel.app/"),
  alternates: { canonical: "/" },
  verification: {
    google: "diTdhw9rFyeWNa_WssdFEQYcPeZQFJd4m-jHAKPCbH4",
  },
  openGraph: {
    title: "Abdullah | AI Agent Engineer & Agentic AI Architect",
    description: "Custom AI agents and multi-agent systems that think and act for your business. 300+ hours saved per client monthly. Serving clients in Kuwait, UAE, Pakistan & globally.",
    type: "website",
    url: "https://ai-with-abdullah.vercel.app/",
    siteName: "Abdullah AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdullah AI — AI Agent Engineer & Agentic AI Architect",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah | AI Agent Engineer & Agentic AI Architect",
    description: "Custom AI agents and multi-agent systems that think and act for your business. 300+ hours saved per client monthly.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Abdullah",
              "jobTitle": "AI Agent Engineer & Agentic AI Architect",
              "description": "AI Agent Engineer who builds autonomous AI agents and multi-agent systems for businesses globally, saving 300+ hours per month.",
              "url": "https://ai-with-abdullah.vercel.app/",
              "telephone": "+923194124382",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "PK",
              },
              "sameAs": [
                "https://www.linkedin.com/in/ai-with-abdullah",
                "https://www.instagram.com/abdullah.automations"
              ],
              "knowsAbout": ["AI Agents", "Multi-Agent Systems", "Agentic AI", "Context Engineering", "Machine Learning", "WhatsApp Business API", "OpenAI"],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Abdullah AI",
              "description": "Custom AI Agents and Multi-Agent Systems for businesses. AI Agent Engineer serving clients globally.",
              "url": "https://ai-with-abdullah.vercel.app/",
              "telephone": "+923194124382",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "PK",
              },
              "founder": { "@type": "Person", "name": "Abdullah" },
              "serviceType": ["AI Agent Development", "Multi-Agent Systems", "Agentic AI Solutions", "Custom AI Development", "WhatsApp AI Agents"],
              "priceRange": "$$$",
              "areaServed": "Worldwide",
              "openingHours": "Mo-Su 00:00-23:59",
              "sameAs": [
                "https://www.linkedin.com/in/ai-with-abdullah",
                "https://www.instagram.com/abdullah.automations"
              ]
            }),
          }}
        />
        {/* WebSite Schema — enables Sitelinks Searchbox in Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Abdullah AI",
              "url": "https://ai-with-abdullah.vercel.app/",
              "description": "AI Agent Engineer — autonomous AI agents and multi-agent systems for businesses globally.",
              "author": { "@type": "Person", "name": "Abdullah" },
            }),
          }}
        />
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="diTdhw9rFyeWNa_WssdFEQYcPeZQFJd4m-jHAKPCbH4" />
        {/* Author & SEO meta */}
        <meta name="author" content="Abdullah — AI Agent Engineer" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="geo.region" content="PK" />
        <meta name="geo.country" content="Pakistan" />
      </head>
      <body>
        <Navbar />
        <Analytics />

        <main className="page-main">{children}</main>

        {/* Floating WhatsApp Button */}
        <a href="https://wa.me/923194124382" target="_blank" rel="noopener noreferrer" className="float-wa" aria-label="Chat on WhatsApp">
          <span className="float-wa-tooltip">Chat on WhatsApp</span>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
        </a>

        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-brand">
              <span className="logo-icon">⬡</span> Abdullah AI
              <p>AI Agents That Think & Act. Real Results.</p>
              <div className="footer-socials">
                <a href="https://www.linkedin.com/in/ai-with-abdullah" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a href="https://www.instagram.com/abdullah.automations" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </a>
                <a href="https://wa.me/923194124382" target="_blank" rel="noopener noreferrer" className="footer-social-icon whatsapp-icon" aria-label="WhatsApp">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </a>
              </div>
            </div>
            <div className="footer-cols">
              <div>
                <h4>Services</h4>
                <Link href="/services#agents">AI Agent Development</Link>
                <Link href="/services#ai">Custom AI Solutions</Link>
                <Link href="/services#consulting">AI Strategy Consulting</Link>
                <Link href="/gulf-real-estate-ai">Gulf Real Estate AI</Link>
                <Link href="/pricing">Pricing</Link>
              </div>
              <div>
                <h4>Company</h4>
                <Link href="/about">About</Link>
                <Link href="/faq">FAQ</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/case-studies">Case Studies</Link>
              </div>
              <div>
                <h4>Connect</h4>
                <a href="https://www.linkedin.com/in/ai-with-abdullah" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://www.instagram.com/abdullah.automations" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://wa.me/923194124382" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                <Link href="/contact">Book a Call</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Abdullah AI. All rights reserved.</p>
            <div className="footer-bottom-socials">
              <a href="https://www.linkedin.com/in/ai-with-abdullah" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="https://www.instagram.com/abdullah.automations" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="https://wa.me/923194124382" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </a>
            </div>
          </div>
        </footer>

        <script dangerouslySetInnerHTML={{
          __html: `
            function initPage() {
              // Navbar scroll
              var nav = document.getElementById('navbar');
              function updateNav() {
                if (!nav) return;
                if (window.scrollY > 30) nav.classList.add('scrolled');
                else nav.classList.remove('scrolled');
              }
              updateNav();
              window.removeEventListener('scroll', updateNav);
              window.addEventListener('scroll', updateNav, { passive: true });

              // Mobile hamburger menu
              var hamburger = document.getElementById('hamburger');
              var navLinks = document.getElementById('nav-links');
              if (hamburger && navLinks) {
                // Reset state on navigation
                hamburger.classList.remove('open');
                navLinks.classList.remove('open');
                document.body.style.overflow = '';
                // Re-attach click handler
                var newHamburger = hamburger.cloneNode(true);
                hamburger.parentNode.replaceChild(newHamburger, hamburger);
                newHamburger.addEventListener('click', function() {
                  var isOpen = newHamburger.classList.toggle('open');
                  navLinks.classList.toggle('open', isOpen);
                  document.body.style.overflow = isOpen ? 'hidden' : '';
                });
                // Close menu when a link is clicked
                navLinks.querySelectorAll('a').forEach(function(link) {
                  link.addEventListener('click', function() {
                    newHamburger.classList.remove('open');
                    navLinks.classList.remove('open');
                    document.body.style.overflow = '';
                  });
                });
              }

              // Smooth scroll reveal — uses data-visible attribute (NOT className)
              // to avoid React hydration mismatch errors on server-rendered pages
              var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(e) {
                  if (e.isIntersecting) {
                    e.target.setAttribute('data-visible', '1');
                    observer.unobserve(e.target);
                  }
                });
              }, {
                threshold: 0,
                rootMargin: '0px 0px 0px 0px'
              });
              var vh = window.innerHeight;
              document.querySelectorAll('.reveal').forEach(function(el) {
                el.removeAttribute('data-visible');
                // Immediately reveal elements already in viewport — no observer delay
                var rect = el.getBoundingClientRect();
                if (rect.top < vh && rect.bottom > 0) {
                  el.setAttribute('data-visible', '1');
                } else {
                  observer.observe(el);
                }
              });
            }
            // Wait for React hydration to complete before running DOM mutations
            // This prevents server/client className mismatch (hydration errors)
            // Highlight active nav link — now handled by React Navbar component
            function updateActiveNav() {}
            function safeInit() {
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function() {
                  // Wait 50ms after DOMContentLoaded to ensure React hydration is complete
                  requestAnimationFrame(function() { setTimeout(function() { initPage(); updateActiveNav(); }, 50); });
                });
              } else {
                requestAnimationFrame(function() { setTimeout(function() { initPage(); updateActiveNav(); }, 50); });
              }
            }
            safeInit();
            var _push = history.pushState;
            var _replace = history.replaceState;
            history.pushState = function() { _push.apply(history, arguments); setTimeout(function() { initPage(); updateActiveNav(); }, 150); };
            history.replaceState = function() { _replace.apply(history, arguments); setTimeout(function() { initPage(); updateActiveNav(); }, 150); };
            window.addEventListener('popstate', function() { setTimeout(function() { initPage(); updateActiveNav(); }, 150); });
          `
        }} />
      </body>
    </html>
  );
}
