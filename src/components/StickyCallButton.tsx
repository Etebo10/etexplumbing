import { Phone } from "lucide-react";

const StickyCallButton = () => {
  return (
    <a
      href="tel:+18005551234"
      className="fixed bottom-6 right-6 z-50 md:hidden btn-cta rounded-full w-16 h-16 p-0 flex items-center justify-center shadow-2xl animate-bounce-subtle"
      aria-label="Call Now"
    >
      <Phone className="w-7 h-7" />
    </a>
  );
};

export default StickyCallButton;
