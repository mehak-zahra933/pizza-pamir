import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { WHATSAPP_LINK } from "@/lib/site-data";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#signature", label: "Signature" },
  { href: "#experience", label: "Experience" },
  { href: "#reviews", label: "Reviews" },
  { href: "#locations", label: "Locations" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/40 bg-background/90 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <a
          href="#top"
          className={cn(
            "font-display text-lg leading-none tracking-tight transition-colors sm:text-xl",
            scrolled ? "text-foreground" : "text-cream",
          )}
        >
          Pizza <span className="italic">Pamir</span>
          <span
            className={cn(
              "mt-1 block text-[0.55rem] tracking-[0.32em] uppercase",
              scrolled ? "text-muted-foreground" : "text-cream/70",
            )}
          >
            Hunza · Pakistan
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm transition-colors",
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-cream/80 hover:text-cream",
              )}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Order on WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-full border md:hidden",
            scrolled ? "border-border text-foreground" : "border-cream/30 text-cream",
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/40 bg-background/98 backdrop-blur-xl md:hidden">
          <div className="flex flex-col px-5 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-4 font-display text-xl text-foreground last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-4 text-base font-medium text-accent-foreground"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Order on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
