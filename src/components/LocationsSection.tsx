import { useState } from "react";
import { Clock, MapPin, Phone, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";
import { locations, PHONE_LINK, WHATSAPP_LINK } from "@/lib/site-data";

const MOBILE_PREVIEW_COUNT = 2;

export function LocationsSection() {
  const [expanded, setExpanded] = useState(false);

  const hiddenCount = locations.length - MOBILE_PREVIEW_COUNT;

  return (
    <section id="locations" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-accent">Locations</p>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02]">
            Find Your <span className="italic">Slice.</span>
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Five kitchens across the valley — pick the view you want with dinner.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-5 sm:grid sm:grid-cols-2">
          {visibleLocations.map((loc, i) => (
            <Reveal
              key={loc.id}
              delay={i * 90}
              className={cn(loc.scenic && "sm:col-span-2")}
            >
              <article className="group shadow-card h-full overflow-hidden rounded-2xl border border-border/70 bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
                <div
                  className={cn(
                    "relative overflow-hidden",
                    loc.scenic ? "aspect-[16/9] sm:aspect-[21/9]" : "aspect-[4/3]",
                  )}
                >
                  <img
                    src={loc.image}
                    alt={`Pizza Pamir ${loc.name} surroundings`}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="size-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                    <h3 className="font-display text-2xl text-cream sm:text-3xl">{loc.name}</h3>
                    <span className="flex items-center gap-1.5 rounded-full bg-charcoal/70 px-3 py-1.5 text-xs text-cream backdrop-blur-sm">
                      <Star className="size-3.5 fill-accent text-accent" aria-hidden="true" />
                      {loc.rating} · {loc.reviews} reviews
                    </span>
                  </div>
                  {loc.scenic && (
                    <span className="absolute top-4 left-4 rounded-full bg-accent px-3 py-1 text-[0.65rem] tracking-[0.2em] text-accent-foreground uppercase">
                      Lakeside
                    </span>
                  )}
                </div>

                <div className="space-y-4 p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {loc.description}
                  </p>
                  <p className="flex items-start gap-2 text-sm">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                    {loc.address}
                  </p>
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="size-4 shrink-0 text-accent" aria-hidden="true" />
                    {loc.hours}
                  </p>
                  <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                    <a
                      href={loc.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 flex-1 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      Get Directions
                    </a>
                    <a
                      href={loc.whatsapp ?? WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-medium transition-colors duration-300 hover:border-accent hover:text-accent"
                    >
                      <Phone className="size-4" aria-hidden="true" />
                      Order
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {!expanded && hiddenCount > 0 && (
          <div className="mt-8 flex justify-center sm:hidden">
            <button
              type="button"
              onClick={() => setExpanded(true)}
              aria-expanded={expanded}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border px-8 text-sm font-medium transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              See More Locations
              <span className="text-accent">+{hiddenCount}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
