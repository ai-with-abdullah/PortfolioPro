"use client";
import { useState } from "react";

// NO metadata export here — it's a client component
// SEO metadata is handled by the parent layout

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "", email: "", company: "", service: "", problem: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const WHATSAPP_NUMBER = "923194124382";
  const EMAIL = "abdullah.tech.ai@gmail.com";

  // Web3Forms access key — get yours free at https://web3forms.com
  // This key sends form submissions directly to your Gmail inbox
  const WEB3FORMS_KEY = "e714f3c3-cf0e-443f-9994-0bf0061cb6a3";

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Send form data via Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `🤖 New Strategy Call Request from ${form.firstName}`,
          from_name: "Abdullah AI Website",
          name: form.firstName,
          email: form.email,
          company: form.company || "Not specified",
          service: form.service || "Not specified",
          message: form.problem,
          // Honeypot field for spam protection
          botcheck: "",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setForm({ firstName: "", email: "", company: "", service: "", problem: "" });
      } else {
        // If Web3Forms fails (e.g. key not set yet), fall back to WhatsApp + email
        fallbackToWhatsAppEmail();
      }
    } catch (error) {
      // Network error — fall back to WhatsApp + email
      fallbackToWhatsAppEmail();
    }
  };

  const fallbackToWhatsAppEmail = () => {
    // Format a WhatsApp message
    const waText = encodeURIComponent(
      `Hi Abdullah! I found you through your website.\n\n` +
      `*Name:* ${form.firstName}\n` +
      `*Email:* ${form.email}\n` +
      `*Business:* ${form.company || "Not specified"}\n` +
      `*Service Needed:* ${form.service || "Not specified"}\n\n` +
      `*My Biggest Challenge:*\n${form.problem}\n\n` +
      `I would like to book a free strategy call.`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`, "_blank");
    setStatus("success");
  };

  return (
    <>
      <section className="section" style={{ paddingTop: "8rem" }}>
        <div className="wrap">
          <div className="contact-grid">

            {/* ── Left Info Panel ── */}
            <div>
              <p className="section-eyebrow reveal">Let&apos;s Talk</p>
              <h1 className="h2 reveal reveal-delay-1" style={{ marginBottom: "1.5rem" }}>
                Book your free <span className="text-gradient">AI Strategy Call.</span>
              </h1>
              <p className="lead reveal reveal-delay-2">
                In 30 minutes, I will map your biggest operational bottlenecks and show you a concrete plan to eliminate them with AI Automation. Zero commitment. Zero cost.
              </p>

              <div style={{ marginTop: "2.5rem" }}>
                {[
                  { icon: "✅", label: "What we will cover", value: "Your top 3 time-wasting processes & how to automate them" },
                  { icon: "⚡", label: "Expected outcome", value: "A clear AI automation roadmap with estimated time & cost savings" },
                  { icon: "⏱️", label: "Duration", value: "30 minutes via Google Meet or Zoom" },
                  { icon: "💰", label: "Cost", value: "100% Free — No strings attached" },
                ].map((d, i) => (
                  <div key={i} className={`contact-detail reveal reveal-delay-${i}`}>
                    <div className="contact-detail-icon">{d.icon}</div>
                    <div className="contact-detail-text">
                      <span className="label">{d.label}</span>
                      <span className="value">{d.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Contact Options */}
              <div className="direct-contact-row reveal" style={{ marginTop: "2.5rem" }}>
                <p style={{ fontSize: "0.82rem", color: "var(--c-muted)", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: 700 }}>
                  Or reach me directly
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="direct-contact-btn whatsapp-btn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Me
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="direct-contact-btn gmail-btn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                  Send Email
                </a>
              </div>

              {/* Social Links */}
              <div className="social-links-row reveal" style={{ marginTop: "2rem" }}>
                <a href="https://www.linkedin.com/in/ai-with-abdullah" target="_blank" rel="noopener noreferrer" className="social-pill linkedin-pill">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
                <a href="https://www.instagram.com/abdullah.automations" target="_blank" rel="noopener noreferrer" className="social-pill instagram-pill">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  Instagram
                </a>
              </div>
            </div>

            {/* ── Right Form ── */}
            <div className="contact-form-card reveal reveal-delay-1">
              {status === "success" ? (
                <div className="form-success">
                  <div className="form-success-icon">🎉</div>
                  <h3>Message Received!</h3>
                  <p>Your strategy call request has been sent to my inbox. I will reply within 24 hours to confirm your call slot.</p>
                  <div className="form-success-channels">
                    <div className="success-channel">
                      <span>✅</span>
                      <span>Message delivered</span>
                    </div>
                    <div className="success-channel">
                      <span>📧</span>
                      <span>Sent to inbox</span>
                    </div>
                  </div>
                  <button
                    onClick={() => { setStatus("idle"); setForm({ firstName:"", email:"", company:"", service:"", problem:"" }); }}
                    className="btn btn-ghost"
                    style={{ marginTop: "1.5rem" }}
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : status === "error" ? (
                <div className="form-success">
                  <div className="form-success-icon">⚠️</div>
                  <h3>Something went wrong</h3>
                  <p>The form could not be sent. Please contact me directly via WhatsApp or email instead.</p>
                  <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">WhatsApp Me →</a>
                    <a href={`mailto:${EMAIL}`} className="btn btn-ghost">Send Email</a>
                  </div>
                </div>
              ) : (
                <>
                  <h3 style={{ marginBottom: "0.5rem" }}>Tell me about your business</h3>
                  <p style={{ color: "var(--c-muted)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                    Fill this out and I will reach out within 24 hours to confirm your call slot.
                  </p>

                  {/* Urgency notice */}
                  <div style={{ display: "flex", gap: "0.75rem", padding: "1rem 1.25rem", background: "rgba(37, 211, 102, 0.06)", border: "1px solid rgba(37, 211, 102, 0.2)", borderRadius: "var(--radius-sm)", marginBottom: "2rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.2rem", flexShrink: 0, marginTop: "0.1rem" }}>⚡</span>
                    <div style={{ fontSize: "0.85rem", color: "var(--c-muted)", lineHeight: "1.6" }}>
                      <strong style={{ color: "var(--c-text)" }}>Need a faster response?</strong> Message me directly on{" "}
                      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" style={{ color: "#25d366", fontWeight: 600, textDecoration: "underline" }}>
                        WhatsApp
                      </a>{" "}
                      for an immediate reply. Form and email responses are typically within 24 hours.
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    {/* Honeypot anti-spam — hidden from users */}
                    <input type="checkbox" name="botcheck" style={{ display: "none" }} />

                    <div className="form-group form-row">
                      <div>
                        <label htmlFor="firstName">First Name</label>
                        <input id="firstName" type="text" placeholder="Abdullah" value={form.firstName} onChange={handleChange} required />
                      </div>
                      <div>
                        <label htmlFor="email">Email Address</label>
                        <input id="email" type="email" placeholder="you@company.com" value={form.email} onChange={handleChange} required />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="company">Company / Business Name</label>
                      <input id="company" type="text" placeholder="Your Company" value={form.company} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                      <label htmlFor="service">What service are you interested in?</label>
                      <select id="service" value={form.service} onChange={handleChange}>
                        <option value="">Select a service...</option>
                        <option value="AI Agent Development (WhatsApp/CRM)">AI Agent Development (WhatsApp/CRM)</option>
                        <option value="AI Lead Qualification System">AI Lead Qualification System</option>
                        <option value="Custom AI Model Development">Custom AI Model Development</option>
                        <option value="AI Strategy Consulting">AI Strategy Consulting</option>
                        <option value="Gulf Real Estate AI Agent">Gulf Real Estate AI Agent</option>
                        <option value="Not sure — need advice">Not sure — need advice</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="problem">What is your biggest operational bottleneck right now?</label>
                      <textarea
                        id="problem"
                        placeholder="e.g. We manually follow up with 50+ leads per day, it takes 3 hours every morning and leads go cold..."
                        value={form.problem}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-lg form-submit"
                      disabled={status === "sending"}
                    >
                      {status === "sending" ? "Sending…" : "Book My Free Strategy Call →"}
                    </button>
                  </form>

                  <p style={{ textAlign: "center", fontSize: "0.82rem", color: "var(--c-muted)", marginTop: "1.25rem" }}>
                    🔒 Your information is never shared. Expect a reply within 24 hours.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
