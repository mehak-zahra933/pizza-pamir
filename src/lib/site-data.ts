import locKarimabad from "@/assets/loc-karimabad.jpg";
import locAliabad from "@/assets/loc-aliabad.jpg";
import locAttabad from "@/assets/loc-attabad.jpg";
import locGojal from "@/assets/loc-gojal.jpg";
import menuClassic from "@/assets/menu-classic.jpg";
import menuSpecial from "@/assets/menu-special.jpg";
import menuFamily from "@/assets/menu-family.jpg";
import menuKids from "@/assets/menu-kids.jpg";
import menuDrinks from "@/assets/menu-drinks.jpg";
import menuSides from "@/assets/menu-sides.jpg";
import galleryFireplace from "@/assets/gallery-fireplace.jpg";
import galleryOutdoor from "@/assets/gallery-outdoor.jpg";
import galleryMaking from "@/assets/gallery-making.jpg";
import galleryFamily from "@/assets/gallery-family.jpg";
import heroHunza from "@/assets/hero-hunza.jpg";

export const WHATSAPP_NUMBER = "+92 343 8820781";
export const WHATSAPP_LINK =
  "https://wa.me/923438820781?text=" +
  encodeURIComponent("Assalam o Alaikum! I'd like to order from Pizza Pamir.");
export const PHONE_LINK = "tel:+923438820781";

export type Location = {
  id: string;
  name: string;
  area: string;
  address: string;
  rating: number;
  reviews: number;
  hours: string;
  description: string;
  image: string;
  maps: string;
  scenic?: boolean;
};

export const locations: Location[] = [
  {
    id: "karimabad",
    name: "Karimabad",
    area: "Fort Road, near Fort Chowk",
    address: "Fort Road, near Fort Chowk, Karimabad, Hunza",
    rating: 4.5,
    reviews: 530,
    hours: "Open daily · 11:00 – 23:00",
    description:
      "Our first oven, tucked below Baltit Fort. Stone walls, apricot trees and the smell of fresh dough drifting down Fort Road.",
    image: locKarimabad,
    maps: "https://www.google.com/maps/search/?api=1&query=Pizza+Pamir+Karimabad+Hunza",
  },
  {
    id: "aliabad",
    name: "Aliabad",
    area: "College Chowk",
    address: "College Chowk, Aliabad, Hunza",
    rating: 4.3,
    reviews: 370,
    hours: "Open daily · 11:00 – 23:30",
    description:
      "The valley's meeting point. Big tables, late hours and the busiest all-you-can-eat nights in Hunza.",
    image: locAliabad,
    maps: "https://www.google.com/maps/search/?api=1&query=Pizza+Pamir+Aliabad+Hunza",
  },
  {
    id: "attabad",
    name: "Attabad Lake",
    area: "Main Boat Stand, Attabad Lake",
    address: "Main Boat Stand, Attabad Lake, Gojal, Hunza",
    rating: 4.5,
    reviews: 84,
    hours: "Open daily · 10:00 – 22:00",
    description:
      "Turquoise water on one side, hot pizza on the other. Step off the boats and straight onto our terrace.",
    image: locAttabad,
    maps: "https://www.google.com/maps/search/?api=1&query=Pizza+Pamir+Attabad+Lake",
    scenic: true,
  },
  {
    id: "gojal",
    name: "Gojal",
    area: "N-35, Gojal, Hunza Nagar",
    address: "N-35 Karakoram Highway, Gojal, Hunza Nagar",
    rating: 4.5,
    reviews: 28,
    hours: "Open daily · 11:00 – 22:00",
    description:
      "The last warm stop before the high passes. Fireplace on, kettle boiling, road dust welcome.",
    image: locGojal,
    maps: "https://www.google.com/maps/search/?api=1&query=Pamir+Pizza+Gojal+Hunza",
  },
];

export type MenuItem = {
  category: string;
  name: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
};

export const menuItems: MenuItem[] = [
  {
    category: "Pizzas",
    name: "Pamir Margherita",
    description: "Slow-proofed dough, tomato, generous mozzarella, fresh basil.",
    price: "Rs 950",
    image: menuClassic,
    tag: "Classic",
  },
  {
    category: "Special Pizzas",
    name: "Karakoram Meat Feast",
    description: "Spiced beef, chicken tikka, peppers, olives, double cheese.",
    price: "Rs 1,850",
    image: menuSpecial,
    tag: "Signature",
  },
  {
    category: "Family / All You Can Eat",
    name: "Base Camp Feast",
    description: "Unlimited pizza, wings and sides for the whole table.",
    price: "Rs 2,400 / person",
    image: menuFamily,
    tag: "All you can eat",
  },
  {
    category: "Kids",
    name: "Little Climber",
    description: "Mini cheese pizza, crispy fries and a fresh juice.",
    price: "Rs 750",
    image: menuKids,
    tag: "Kids",
  },
  {
    category: "Drinks",
    name: "Hunza Apricot Cooler",
    description: "Cold-pressed local apricot, mint, mountain water ice.",
    price: "Rs 350",
    image: menuDrinks,
    tag: "Local",
  },
  {
    category: "Sides",
    name: "Fireside Garlic Bread",
    description: "Oven-baked garlic cheese bread, fries and house dips.",
    price: "Rs 550",
    image: menuSides,
    tag: "To share",
  },
];

export const menuCategories = [
  "All",
  "Pizzas",
  "Special Pizzas",
  "Family / All You Can Eat",
  "Kids",
  "Drinks",
  "Sides",
] as const;

export const galleryImages = [
  { src: galleryFireplace, alt: "Stone fireplace glowing inside the Pizza Pamir dining room" },
  { src: galleryOutdoor, alt: "Outdoor terrace seating with Hunza mountain views" },
  { src: galleryMaking, alt: "Pizza being topped by hand beside a hot oven" },
  { src: galleryFamily, alt: "Families sharing pizza around a long wooden table" },
  { src: heroHunza, alt: "Sunset over the Karakoram peaks above Hunza valley" },
];

export const experienceHighlights = [
  { icon: "🔥", label: "Fireplace" },
  { icon: "🏔", label: "Mountain atmosphere" },
  { icon: "🍕", label: "Fresh pizza" },
  { icon: "👨‍👩‍👧", label: "Family friendly" },
  { icon: "🌄", label: "Outdoor seating" },
  { icon: "🍽", label: "All-you-can-eat" },
];

export const reviews = [
  {
    quote:
      "Came down from Baltit Fort freezing and left warm, full and grinning. The cheese pull is unreal.",
    name: "Faisal A.",
    location: "Karimabad",
    rating: 4.5,
  },
  {
    quote:
      "All-you-can-eat with seven cousins. We tried to defeat them. They defeated us.",
    name: "Zainab R.",
    location: "Aliabad",
    rating: 4.3,
  },
  {
    quote:
      "Pizza with Attabad Lake in front of you — I genuinely forgot to eat because of the view.",
    name: "Daniyal K.",
    location: "Attabad Lake",
    rating: 4.5,
  },
  {
    quote:
      "Last stop before Khunjerab. Fireplace, hot food, kind staff. Exactly what we needed.",
    name: "Sara M.",
    location: "Gojal",
    rating: 4.5,
  },
  {
    quote:
      "Kids menu was a lifesaver and the outdoor seating at sunset is the best table in Hunza.",
    name: "Imran H.",
    location: "Karimabad",
    rating: 4.5,
  },
];

export const ingredients = [
  "Hand-stretched dough",
  "Slow-cooked tomato",
  "Double mozzarella",
  "Mountain herbs",
  "Wood-fire char",
  "Local apricot chilli oil",
];
