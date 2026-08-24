import { Facebook, Instagram, MessageCircle, Phone } from "lucide-react";
import { locations, PHONE_LINK, WHATSAPP_LINK, WHATSAPP_NUMBER } from "@/lib/site-data";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer id="contact" className="surface-dark border-t border-cream/10 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img src={logo} alt="Pizza Pamir" className="h-16 w-auto object-contain" />
            <p className="mt-4 max-w-xs font-display text-lg leading-relaxed text-cream/70 italic">
              "Good pizza. Great mountains. Even better memories."
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex size-11 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-accent hover:text-accent"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/pizzapamir1?igsi=MWEwMHM1N2NidDdudg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex size-11 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-accent hover:text-accent"
              >
                <Instagram className="size-4" aria-hidden="true" />
              </a>
              <a
                href="https://m.facebook.com/408679419466532/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex size-11 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-accent hover:text-accent"
              >
                <Facebook className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Locations">
            <h2 className="eyebrow text-cream/45">Locations</h2>
            <ul className="mt-5 space-y-3 text-sm text-cream/75">
              {locations.map((loc) => (
                <li key={loc.id}>
                  <a
                    href={loc.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-accent"
                  >
                    {loc.name} — directions
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Explore">
            <h2 className="eyebrow text-cream/45">Explore</h2>
            <ul className="mt-5 space-y-3 text-sm text-cream/75">
              <li>
                <a href="#menu" className="transition-colors hover:text-accent">
                  Menu
                </a>
              </li>
              <li>
                <a href="#experience" className="transition-colors hover:text-accent">
                  Experience
                </a>
              </li>
              <li>
                <a href="#reviews" className="transition-colors hover:text-accent">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#locations" className="transition-colors hover:text-accent">
                  Find a location
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-cream/45">Get in touch</h2>
            <ul className="mt-5 space-y-3 text-sm text-cream/75">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Order on WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {WHATSAPP_NUMBER}
                </a>
              </li>
              <li className="pt-2 text-cream/55">Open daily · 10:00 – 23:30</li>
              <li className="text-cream/55">Rs 1,000 – 3,000 per person</li>
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-cream/10 pt-6 text-xs text-cream/40">
          © {new Date().getFullYear()} Pizza Pamir · Hunza, Gilgit-Baltistan, Pakistan
        </p>
      </div>
    </footer>
  );
}
