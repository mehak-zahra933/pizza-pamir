import { Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { reviews } from "@/lib/site-data";

export function ReviewsSection() {
  return (
    <section id="reviews" className="surface-dark relative overflow-hidden py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-accent">Reviews</p>
            <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] text-cream">
              Hunza Has <span className="italic">Spoken.</span>
            </h2>
            <div className="mt-10 flex items-end gap-6">
              <div>
                <p className="font-display text-6xl text-cream">4.5</p>
                <p className="mt-1 text-sm text-cream/55">out of 5</p>
              </div>
              <div className="border-l border-cream/15 pl-6">
                <p className="font-display text-3xl text-cream">1,000+</p>
                <p className="mt-1 text-sm text-cream/55">combined Google reviews</p>
              </div>
            </div>
            <div className="mt-6 flex gap-1" aria-label="Rated 4.5 out of 5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={i < 4 ? "size-5 fill-accent text-accent" : "size-5 text-accent/40"}
                  aria-hidden="true"
                />
              ))}
            </div>
          </Reveal>

          <ul className="grid gap-5 sm:grid-cols-2">
            {reviews.map((r, i) => (
              <Reveal
                as="li"
                key={r.name}
                delay={i * 90}
                className={i % 3 === 0 ? "sm:mt-8" : undefined}
              >
                <figure className="h-full rounded-2xl border border-cream/12 bg-cream/[0.04] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40">
                  <blockquote className="font-display text-lg leading-relaxed text-cream/90">
                    "{r.quote}"
                  </blockquote>
                  <figcaption className="mt-5 flex items-center justify-between text-xs text-cream/55">
                    <span>{r.name}</span>
                    <span className="flex items-center gap-1.5">
                      {r.location} ·
                      <Star className="size-3 fill-accent text-accent" aria-hidden="true" />
                      {r.rating}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
