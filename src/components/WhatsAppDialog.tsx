import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MessageCircle } from "lucide-react";
import { locations } from "@/lib/site-data";

export function WhatsAppDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const handleLocationSelect = (loc: typeof locations[0]) => {
    const baseMsg = `Assalam o Alaikum! I'd like to order from Pizza Pamir (${loc.name}).`;
    const num = loc.whatsapp;
    const link = `https://wa.me/${num.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(baseMsg)}`;
    window.open(link, '_blank');
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">Select a Location to Order</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3 py-4">
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => handleLocationSelect(loc)}
              className="flex items-center justify-between rounded-xl border border-border/50 p-4 hover:bg-accent hover:text-accent-foreground transition-colors text-foreground"
            >
              <span className="font-medium">{loc.name}</span>
              <MessageCircle className="size-5" />
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
