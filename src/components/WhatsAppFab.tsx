import { MessageCircle } from "lucide-react";
import { WhatsAppDialog } from "./WhatsAppDialog";

export function WhatsAppFab() {
  return (
    <WhatsAppDialog>
      <button
        aria-label="Order on WhatsApp"
        className="glow-fire fixed right-4 bottom-4 z-50 inline-flex items-center gap-3 rounded-full bg-accent px-5 py-4 text-sm font-medium text-accent-foreground transition-transform duration-300 hover:-translate-y-1 sm:right-6 sm:bottom-6 cursor-pointer"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        <span className="hidden sm:inline">Order on WhatsApp</span>
      </button>
    </WhatsAppDialog>
  );
}
