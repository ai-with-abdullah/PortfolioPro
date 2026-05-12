// Server component — exports SEO metadata, renders the client form component
import ContactPageClient from "./ContactPageClient";

export const metadata = {
  title: "Book a Free AI Strategy Call | Contact",
  description: "Book a free 30-minute strategy call with Abdullah, an AI Agent Engineer and Agentic AI Architect. Discover exactly where AI agents can save you time and money — zero cost, zero commitment.",
  keywords: ["book AI agent consultation", "hire AI agent engineer", "free AI strategy call", "AI agent developer contact", "agentic AI consultant"],
  openGraph: {
    title: "Book a Free AI Strategy Call | Contact Abdullah AI",
    description: "Book a free 30-minute strategy call with Abdullah, an AI Agent Engineer. Discover exactly where AI agents can save you time and money — zero cost, zero commitment.",
  },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
