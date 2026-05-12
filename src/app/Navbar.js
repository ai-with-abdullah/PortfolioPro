"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isContact = pathname === "/contact";

  return (
    <nav className="navbar" id="navbar" suppressHydrationWarning>
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <span className="logo-icon">⬡</span>
          <span>Abdullah <span className="logo-dim">AI</span></span>
        </Link>

        {/* Hamburger for mobile */}
        <button className="nav-hamburger" id="hamburger" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>

        <ul className="nav-links" id="nav-links">
          <li><Link href="/" className={`nav-link${isActive("/") ? " nav-link-active" : ""}`}>Home</Link></li>
          <li><Link href="/services" className={`nav-link${isActive("/services") ? " nav-link-active" : ""}`}>Services</Link></li>
          <li><Link href="/case-studies" className={`nav-link${isActive("/case-studies") ? " nav-link-active" : ""}`}>Case Studies</Link></li>
          <li><Link href="/gulf-real-estate-ai" className={`nav-link${isActive("/gulf-real-estate-ai") ? " nav-link-active" : ""}`}>Gulf Real Estate</Link></li>
          <li><Link href="/blog" className={`nav-link${isActive("/blog") ? " nav-link-active" : ""}`}>Blog</Link></li>

          {/* Only show "Book a Call" button when NOT on the contact page */}
          {!isContact && (
            <li>
              <Link href="/contact" className="btn-nav">Book a Call →</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
