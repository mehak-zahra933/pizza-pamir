import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import heroPamir from "@/assets/hero-pizza-mountains.png.asset.json";

const heroHunza = heroPamir.url;

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setOffset(window.scrollY * 0.28));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden surface-dark">
      <img
        src={heroHunza}
        alt="Fresh Pizza Pamir pizza in an open box with the Karakoram mountain range behind it"
        width={1920}
        height={1088}
        className="absolute inset-0 size-full scale-110 object-cover"
        style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.12)` }}
      />
      <div className="hero-scrim absolute inset-0" />
      <div
        aria-hidden="true"
        className="animate-ember pointer-events-none absolute -bottom-24 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-accent/25 blur-[120px]"
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pt-32 pb-16 sm:px-8 sm:pb-20">
        <p className="eyebrow reveal is-visible text-cream/70">
          Karimabad · Aliabad · Attabad Lake · Gojal · Tashkurgan
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-[clamp(3rem,11vw,8rem)] leading-[0.92] text-cream">
          A Slice of <span className="italic text-gradient-ember">Hunza.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
          Freshly baked pizza, mountain views, and unforgettable moments in the heart of Hunza.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#menu"
            className="inline-flex h-14 items-center justify-center rounded-full bg-accent px-8 text-base font-medium text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            Explore Our Menu
          </a>
          <a
            href="#locations"
            className="inline-flex h-14 items-center justify-center rounded-full border border-cream/35 px-8 text-base font-medium text-cream backdrop-blur-sm transition-colors duration-300 hover:bg-cream/10"
          >
            Find a Location
          </a>
        </div>

        <a
          href="#route"
          className="mt-14 inline-flex items-center gap-3 self-start text-cream/70 transition-colors hover:text-cream"
        >
          <span className="eyebrow">Explore</span>
          <ArrowDown className="animate-scroll-hint size-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
