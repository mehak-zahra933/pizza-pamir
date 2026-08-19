import { Reveal } from "@/components/Reveal";
import { experienceHighlights, galleryImages } from "@/lib/site-data";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-accent">The Experience</p>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02]">
            More Than <span className="italic">Pizza.</span>
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground">
            A fire in the corner, snow peaks in the window, and a table that nobody wants to leave.
          </p>
        </Reveal>
      </div>

      <Reveal className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:gap-6 sm:px-8">
        {galleryImages.map((img) => (
          <figure
            key={img.alt}
            className="group relative w-[78vw] shrink-0 snap-center overflow-hidden rounded-2xl sm:w-[38vw] lg:w-[26vw]"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-[4/5] size-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/85 to-transparent p-5 text-sm text-cream">
              {img.alt}
            </figcaption>
          </figure>
        ))}
      </Reveal>

      <div className="mx-auto mt-14 max-w-7xl px-5 sm:px-8">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {experienceHighlights.map((h, i) => (
            <Reveal
              as="li"
              key={h.label}
              delay={i * 70}
              className="rounded-xl border border-border/70 bg-card p-5 text-center transition-transform duration-500 hover:-translate-y-1"
            >
              <span className="text-2xl" aria-hidden="true">
                {h.icon}
              </span>
              <p className="mt-3 text-sm text-muted-foreground">{h.label}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
