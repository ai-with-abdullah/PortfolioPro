"use client";
import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    // In production, call your email service API here
    setStatus("success");
    setEmail("");
  };

  if (status === "success") {
    return (
      <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>🎉</div>
        <p style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--c-text)", marginBottom: "0.4rem" }}>
          You&apos;re subscribed!
        </p>
        <p style={{ fontSize: "0.9rem", color: "var(--c-muted)" }}>
          First automation guide hits your inbox this week.
        </p>
        <button
          onClick={() => setStatus("idle")}
          style={{ marginTop: "1.25rem", background: "none", border: "none", color: "var(--c-accent)", cursor: "pointer", fontSize: "0.85rem", textDecoration: "underline" }}
        >
          Subscribe another email
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", gap: "1rem", maxWidth: 480, margin: "0 auto", flexWrap: "wrap" }}
    >
      <input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ flex: 1, minWidth: "200px" }}
      />
      <button type="submit" className="btn btn-primary" style={{ flexShrink: 0 }}>
        Subscribe →
      </button>
    </form>
  );
}
