"use client";

import { Phone, MessageCircle } from "lucide-react";
import { PHONE_NUMBER } from "@/lib/constants";

export default function FloatingButtons() {
  const handlePhoneClick = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const handleWhatsAppClick = () => {
    // Remove + and any spaces from phone number for WhatsApp
    const cleanNumber = PHONE_NUMBER.replace(/[^0-9]/g, "");
    window.open(`https://wa.me/${cleanNumber}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-white" />

        {/* Ripple effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 transition-opacity duration-300 group-hover:opacity-20"></span>

        {/* Tooltip */}
        <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          WhatsApp
        </span>
      </button>

      {/* Phone Button */}
      <button
        onClick={handlePhoneClick}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6 text-white" />

        {/* Ripple effect */}
        <span className="absolute inset-0 rounded-full bg-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-20"></span>

        {/* Tooltip */}
        <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Call Now
        </span>
      </button>

      {/* Pulsing animation for WhatsApp button */}
      <style jsx>{`
        @keyframes pulse-ring {
          0% {
            transform: scale(0.95);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.05);
            opacity: 0;
          }
          100% {
            transform: scale(0.95);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
