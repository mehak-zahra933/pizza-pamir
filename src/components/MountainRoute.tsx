import { MapPin, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";
import { locations } from "@/lib/site-data";

export function MountainRoute() {
  return (
    <section id="route" className="surface-dark relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="animate-ember pointer-events-none absolute top-1/3 -left-32 size-[28rem] rounded-full bg-accent/15 blur-[140px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-accent">The Pamir Route</p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] text-cream">
            Four ovens along one <span className="italic">mountain road.</span>
          </h2>
          <p className="mt-5 max-w-xl text-cream/70">
            Follow the valley north from Karimabad to the high passes of Gojal. Every stop is a Pizza
            Pamir.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <svg
            viewBox="0 0 1200 120"
            aria-hidden="true"
            className="absolute inset-x-0 top-12 hidden h-24 w-full lg:block"
            preserveAspectRatio="none"
          >
            <path
              d="M40 90 C 220 20, 320 110, 460 60 S 760 10, 900 70 S 1080 30, 1160 50"
              fill="none"
              stroke="currentColor"
              className="text-accent/50"
              strokeWidth="2"
              strokeDasharray="8 10"
            />
          </svg>

          <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {locations.map((loc, i) => (
              <Reveal as="li" key={loc.id} delay={i * 110} className={cn("h-full", i % 2 !== 0 && "sm:mt-10")}>
                <div
                  className="group h-full flex flex-col rounded-2xl border border-cream/12 bg-cream/[0.04] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent/45"
                >
                  <div className="flex items-center justify-between">
                    <span className="eyebrow text-cream/45">Stop {i + 1}</span>
                    <MapPin className="size-4 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl text-cream">{loc.name}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-cream/60">
                    <Star className="size-3.5 fill-accent text-accent" aria-hidden="true" />
                    {loc.rating} · {loc.reviews} reviews
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-cream/70 flex-1">{loc.description}</p>
                  <div className="mt-4">
                    <p className="text-xs text-cream/45">{loc.address}</p>
                    <a
                      href={loc.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-cream"
                    >
                      View Location <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
