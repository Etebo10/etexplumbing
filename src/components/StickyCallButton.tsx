import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

const StickyCallButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="tel:+18005551234"
      className={`fixed bottom-6 right-6 z-50 md:hidden flex items-center justify-center transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-4 scale-90 pointer-events-none"
      }`}
      aria-label="Call Now"
    >
      <div className="relative">
        {/* Pulse Ring */}
        <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-30" />
        
        {/* Button */}
        <div className="relative w-16 h-16 rounded-full gradient-accent flex items-center justify-center shadow-2xl glow-accent">
          <Phone className="w-7 h-7 text-white" />
        </div>
      </div>
    </a>
  );
};

export default StickyCallButton;