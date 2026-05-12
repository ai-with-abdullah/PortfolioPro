"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isContact = pathname === "/contact";

  // Detect scroll for glass effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      document.body.style.overflow = !prev ? "hidden" : "";
      return !prev;
    });
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/gulf-real-estate-ai", label: "Gulf AI" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      id="navbar"
      suppressHydrationWarning
    >
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <span className="logo-icon">⬡</span>
          <span>Abdullah <span className="logo-dim">AI</span></span>
        </Link>

        {/* Hamburger */}
        <button
          className={`nav-hamburger ${menuOpen ? "nav-hamburger-open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span><span></span><span></span>
        </button>

        {/* Nav links */}
        <ul className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link${isActive(link.href) ? " nav-link-active" : ""}`}
                onClick={() => { setMenuOpen(false); document.body.style.overflow = ""; }}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {!isContact && (
            <li>
              <Link
                href="/contact"
                className="btn-nav"
                onClick={() => { setMenuOpen(false); document.body.style.overflow = ""; }}
              >
                Book a Call →
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
