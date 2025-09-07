import { FaWhatsapp } from "react-icons/fa";
import { openWhatsApp } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <button
        onClick={() => openWhatsApp('floating_button')}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
        data-testid="floating-whatsapp"
        aria-label="Contact via WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6 group-hover:animate-pulse" />
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-full animate-ping opacity-75"></div>
      </button>
    </div>
  );
}