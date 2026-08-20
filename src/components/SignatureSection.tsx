import { Reveal } from "@/components/Reveal";
import signaturePizza from "@/assets/signature-pizza.jpg";
import { ingredients } from "@/lib/site-data";

export function SignatureSection() {
  return (
    <section id="signature" className="surface-dark relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="animate-ember pointer-events-none absolute top-1/2 left-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[130px]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow text-accent">Signature</p>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] text-cream">
            Made for Mountain <span className="italic">Appetites.</span>
          </h2>
          <p className="mt-6 max-w-md font-display text-xl leading-relaxed text-cream/80 italic sm:text-2xl">
            "Hot, cheesy, generous, and made to be shared."
          </p>
          <ul className="mt-10 space-y-4">
            {ingredients.map((ing, i) => (
              <Reveal as="li" key={ing} delay={200 + i * 130} className="flex items-center gap-4">
                <span className="glow-fire size-1.5 shrink-0 rounded-full bg-accent" />
                <span className="text-sm tracking-wide text-cream/75">{ing}</span>
              </Reveal>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="glow-fire relative overflow-hidden rounded-full">
            <img
              src={signaturePizza}
              alt="Freshly baked Pizza Pamir signature pizza on dark stone"
              loading="lazy"
              width={1200}
              height={1200}
              className="aspect-square size-full rounded-full object-cover"
            />
          </div>
          <span className="absolute -top-3 right-4 rounded-full bg-accent px-4 py-2 text-xs font-medium tracking-widest text-accent-foreground uppercase">
            Fresh from the oven
          </span>
        </Reveal>
      </div>
    </section>
  );
}
