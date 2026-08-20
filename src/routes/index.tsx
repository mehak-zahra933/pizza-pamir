import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MountainRoute } from "@/components/MountainRoute";
import { MenuSection } from "@/components/MenuSection";
import { SignatureSection } from "@/components/SignatureSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { LocationsSection } from "@/components/LocationsSection";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Footer } from "@/components/Footer";

const title = "Pizza Pamir — A Slice of Hunza";
const description =
  "Freshly baked pizza, mountain views and all-you-can-eat feasts across four Hunza locations: Karimabad, Aliabad, Attabad Lake and Gojal.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MountainRoute />
        <MenuSection />
        <SignatureSection />
        <ExperienceSection />
        <ReviewsSection />
        <LocationsSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
