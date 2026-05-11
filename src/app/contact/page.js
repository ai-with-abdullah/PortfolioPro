// Server component — exports SEO metadata, renders the client form component
import ContactPageClient from "./ContactPageClient";

export const metadata = {
  title: "Book a Free AI Strategy Call | Contact — Abdullah AI Automation Expert",
  description: "Book a free 30-minute strategy call with Abdullah, an AI Automation Expert and N8N freelancer. Discover exactly which processes to automate first for maximum ROI — zero cost, zero commitment.",
  keywords: ["book ai automation consultation", "hire n8n expert", "free ai strategy call", "ai automation freelancer contact", "n8n automation consultant"],
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
