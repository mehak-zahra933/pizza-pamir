import { useState, useMemo } from "react";
import { Plus, Search, Pizza, CupSoda, Coffee, UtensilsCrossed, Sandwich, Flame, GlassWater } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";
import { menuCategories, menuItems, extraToppings, WHATSAPP_NUMBER, AnyMenuItem, PizzaItem, SimpleMenuItem, PizzaSize } from "@/lib/site-data";

const generateOrderLink = (itemName: string, detail?: string, price?: number) => {
  let text = `Assalam o Alaikum! I'd like to order: ${itemName}`;
  if (detail) text += ` (${detail})`;
  if (price) text += ` - Rs ${price}`;
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/[\s+]/g, "")}?text=${encodeURIComponent(text)}`;
};

const categoryIcons: Record<string, React.ReactNode> = {
  "Classic Pizza's": <Pizza className="w-4 h-4" />,
  "Premium Pizza's": <Pizza className="w-4 h-4" />,
  "Special Pizza's": <Pizza className="w-4 h-4" />,
  "Hunza Fresh Juice": <CupSoda className="w-4 h-4" />,
  "Coffee's": <Coffee className="w-4 h-4" />,
  "Pasta's": <UtensilsCrossed className="w-4 h-4" />,
  "Sandwiches": <Sandwich className="w-4 h-4" />,
  "Appetizer": <Flame className="w-4 h-4" />,
  "Beverages": <GlassWater className="w-4 h-4" />,
};

function PizzaCard({ item }: { item: PizzaItem }) {
  const [size, setSize] = useState<PizzaSize>("M");
  const price = item.prices[size];
  const orderLink = generateOrderLink(item.name, size, price);

  return (
    <article className="group flex flex-col h-full shadow-card overflow-hidden rounded-2xl border border-border/70 bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
      {item.image && (
        <div className="relative h-48 overflow-hidden shrink-0">
          <img src={item.image} alt={item.name} loading="lazy" className="size-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
          {item.tag && (
            <span className="absolute top-4 left-4 rounded-full bg-charcoal/75 px-3 py-1 text-[0.65rem] tracking-[0.2em] text-cream uppercase backdrop-blur-sm">
              {item.tag}
            </span>
          )}
        </div>
      )}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <h3 className="font-display text-xl">{item.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground grow">{item.description}</p>
        
        <div className="mt-4">
          <p className="text-xs font-medium text-muted-foreground mb-2">Select Size:</p>
          <div className="flex gap-2">
            {(["S", "M", "L", "XL"] as PizzaSize[]).map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={cn("px-3 py-1 rounded-md text-sm border font-medium transition-colors", size === s ? "bg-accent border-accent text-accent-foreground" : "border-border text-foreground hover:border-foreground/40")}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-lg font-medium text-accent">Rs {price}</span>
          <a href={orderLink} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            <Plus className="size-4" aria-hidden="true" />
            Order
          </a>
        </div>
      </div>
    </article>
  );
}

function SimpleItemCard({ item }: { item: SimpleMenuItem }) {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const variant = item.variants?.[selectedVariantIndex];
  const price = variant ? variant.price : item.price;
  const detail = variant ? variant.name : undefined;
  const orderLink = generateOrderLink(item.name, detail, price);

  return (
    <article className="group flex items-center gap-4 shadow-card h-full rounded-2xl border border-border/70 bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative h-20 w-20 overflow-hidden shrink-0 rounded-xl bg-muted">
        {item.image ? (
          <img src={item.image} alt={item.name} loading="lazy" className="size-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
        ) : (
          <div className="size-full flex items-center justify-center text-muted-foreground">
            {categoryIcons[item.category]}
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-lg leading-snug">{item.name}</h3>
        {item.description && <p className="text-sm text-muted-foreground truncate">{item.description}</p>}
        
        {item.variants && (
          <div className="mt-3 flex flex-wrap gap-2">
            {item.variants.map((v, i) => (
              <button key={v.name} onClick={() => setSelectedVariantIndex(i)} className={cn("px-2 py-1 rounded border text-xs font-medium transition-colors", i === selectedVariantIndex ? "bg-primary border-primary text-primary-foreground" : "border-border text-foreground hover:bg-muted")}>
                {v.name}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col items-end gap-3 shrink-0">
        <span className="font-medium text-accent">Rs {price}</span>
        <a href={orderLink} target="_blank" rel="noopener noreferrer" className="inline-flex size-9 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
          <Plus className="size-4" />
        </a>
      </div>
    </article>
  );
}

export function MenuSection() {
  const [active, setActive] = useState<string>("Classic Pizza's");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    let items = menuItems;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter((i) => i.name.toLowerCase().includes(q) || (i.description && i.description.toLowerCase().includes(q)));
    } else {
      items = items.filter((i) => i.category === active);
    }
    return items;
  }, [active, searchQuery]);

  return (
    <section id="menu" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-accent">The Menu</p>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02]">
            Authentic <span className="italic">Flavors.</span>
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground">
            From our wood-fired pizzas to our fresh Hunza fruit juices, everything is made with local passion.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-4 sticky top-[72px] z-40 bg-background/95 backdrop-blur py-4 border-y border-border/40">
          <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {menuCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => { setActive(cat); setSearchQuery(""); }}
                aria-pressed={active === cat && !searchQuery}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-2",
                  active === cat && !searchQuery
                    ? "border-transparent bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                )}
              >
                {categoryIcons[cat]}
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative shrink-0 w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-9 pr-4 rounded-full border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
          </div>
        </div>

        {active === "Classic Pizza's" && !searchQuery && (
          <Reveal className="mt-8 mb-8">
            <div className="bg-card border border-border/60 rounded-xl p-5 sm:p-6 shadow-sm">
              <h3 className="font-display text-lg mb-4">Extra Toppings</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {extraToppings.map(topping => (
                  <div key={topping.name} className="flex flex-col gap-1">
                    <span className="text-sm font-medium">{topping.name}</span>
                    <span className="text-xs text-muted-foreground">S: Rs {topping.prices.S} | M: Rs {topping.prices.M} | L: Rs {topping.prices.L} | XL: Rs {topping.prices.XL}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        <div className="mt-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">No items found.</div>
          ) : (
            <div className={cn("grid gap-6 items-stretch", 
              filteredItems.some(i => i.type === "pizza") 
                ? "sm:grid-cols-2 lg:grid-cols-3" 
                : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            )}>
              {filteredItems.map((item, i) => (
                <Reveal as="div" key={item.name} delay={i * 50} className="h-full">
                  {item.type === "pizza" ? (
                    <PizzaCard item={item as PizzaItem} />
                  ) : (
                    <SimpleItemCard item={item as SimpleMenuItem} />
                  )}
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
