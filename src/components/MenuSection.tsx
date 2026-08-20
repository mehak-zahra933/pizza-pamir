import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";
import { menuCategories, menuItems, WHATSAPP_LINK } from "@/lib/site-data";
import { WhatsAppDialog } from "./WhatsAppDialog";

export function MenuSection() {
  const [active, setActive] = useState<string>("All");
  const items = active === "All" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <section id="menu" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-accent">The Menu</p>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02]">
            The Good <span className="italic">Stuff.</span>
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Collect them all — from mountain-sized meat feasts to a mini pizza for the smallest
            climber at the table.
          </p>
        </Reveal>

        <div className="no-scrollbar -mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
          {menuCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={cn(
                "shrink-0 rounded-full border px-5 py-2.5 text-sm transition-colors duration-300",
                active === cat
                  ? "border-transparent bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal as="li" key={item.name} delay={i * 80}>
              <article className="group shadow-card h-full overflow-hidden rounded-2xl border border-border/70 bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="size-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  {item.tag && (
                    <span className="absolute top-4 left-4 rounded-full bg-charcoal/75 px-3 py-1 text-[0.65rem] tracking-[0.2em] text-cream uppercase backdrop-blur-sm">
                      {item.tag}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-xl">{item.name}</h3>
                    <span className="shrink-0 text-sm font-medium text-accent">{item.price}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <WhatsAppDialog>
                    <button
                      className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border text-sm font-medium transition-colors duration-300 hover:border-accent hover:text-accent cursor-pointer w-full"
                    >
                      <Plus className="size-4" aria-hidden="true" />
                      Add to order
                    </button>
                  </WhatsAppDialog>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-14 text-center">
          <WhatsAppDialog>
            <button
              className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-9 text-base font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              View Full Menu
            </button>
          </WhatsAppDialog>
        </Reveal>
      </div>
    </section>
  );
}
