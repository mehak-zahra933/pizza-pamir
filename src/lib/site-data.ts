import locKarimabad from "@/assets/loc-karimabad.jpg";
import locAliabad from "@/assets/loc-aliabad.jpg";
import locAttabad from "@/assets/loc-attabad.jpg";
import locGojal from "@/assets/loc-gojal.jpg";
import locTashkurgan from "@/assets/loc-tashkurgan.png";
import menuClassic from "@/assets/menu-classic.jpg";
import menuSpecial from "@/assets/menu-special.jpg";
import menuFamily from "@/assets/menu-family.jpg";
import menuKids from "@/assets/menu-kids.jpg";
import menuDrinks from "@/assets/menu-drinks.jpg";
import menuSides from "@/assets/menu-sides.jpg";
import menuMalaiBoti from "@/assets/menu-malai-boti.jpg";
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
  {
    id: "tashkurgan",
    name: "Tashkurgan",
    area: "Food Street, Xinjiang",
    address: "Tashkurgan Food Street, Xinjiang, China",
    rating: 4.8,
    reviews: 15,
    hours: "Open daily · 11:00 – 22:00",
    description: "Branch No. 05. Bringing the authentic taste of Pizza Pamir across the border to the historic Silk Road.",
    image: locTashkurgan,
    maps: "https://www.google.com/maps/search/?api=1&query=Tashkurgan+Food+Street+Xinjiang",
  },
];

export const menuCategories = [
  "Classic Pizza's",
  "Premium Pizza's",
  "Special Pizza's",
  "Hunza Fresh Juice",
  "Coffee's",
  "Pasta's",
  "Sandwiches",
  "Appetizer",
  "Beverages",
] as const;

export type PizzaSize = "S" | "M" | "L" | "XL";

export type PizzaItem = {
  type: "pizza";
  category: string;
  name: string;
  description: string;
  prices: Record<PizzaSize, number>;
  tag?: string;
  image?: string;
};

export type SimpleMenuItem = {
  type: "simple";
  category: string;
  name: string;
  description?: string;
  price?: number;
  variants?: { name: string; price: number }[];
  tag?: string;
  image?: string;
};

export type ExtraToppingItem = {
  name: string;
  prices: Record<PizzaSize, number>;
};

export type AnyMenuItem = PizzaItem | SimpleMenuItem;

export const extraToppings: ExtraToppingItem[] = [
  { name: "Chicken", prices: { S: 150, M: 250, L: 350, XL: 450 } },
  { name: "Cheese", prices: { S: 150, M: 250, L: 350, XL: 450 } },
  { name: "Olives", prices: { S: 100, M: 150, L: 200, XL: 250 } },
  { name: "Mushrooms", prices: { S: 100, M: 150, L: 200, XL: 250 } },
];

export const menuItems: AnyMenuItem[] = [
  // Classic
  { type: "pizza", category: "Classic Pizza's", name: "Chicken Tikka", description: "Onion, Tikka Boti & Lot of Cheese", prices: { S: 899, M: 1499, L: 2199, XL: 2899 }, image: menuClassic },
  { type: "pizza", category: "Classic Pizza's", name: "Chicken Fajita", description: "Onion, Green Pepper, Fajita Chicken & Lot of Cheese", prices: { S: 899, M: 1499, L: 2199, XL: 2899 } },
  { type: "pizza", category: "Classic Pizza's", name: "Hot & Spicy Pizza", description: "Masala & Cholon, Onion, Jalapeno, Tomato & Lot of Cheese", prices: { S: 899, M: 1499, L: 2199, XL: 2899 } },
  { type: "pizza", category: "Classic Pizza's", name: "Vegetable Pizza", description: "Onion, Mushrooms, Bell Pepper, Tomato, Sweet Corn, Black Olives & Lots of Cheese", prices: { S: 799, M: 1299, L: 1899, XL: 2499 }, tag: "Veg" },
  { type: "pizza", category: "Classic Pizza's", name: "Beef Pepperoni", description: "Pepperoni Slice with Lot of Cheese", prices: { S: 999, M: 1599, L: 2299, XL: 2999 } },
  { type: "pizza", category: "Classic Pizza's", name: "Chicken Pepperoni", description: "Pepperoni Slice with Lot of Cheese", prices: { S: 899, M: 1499, L: 2199, XL: 2899 } },
  { type: "pizza", category: "Classic Pizza's", name: "Cheesy Pamir (for Cheese Lover)", description: "Lot of Cheese", prices: { S: 999, M: 1599, L: 2299, XL: 2999 } },
  { type: "pizza", category: "Classic Pizza's", name: "Pizza on Choice", description: "Topping as per your Request.", prices: { S: 1099, M: 1699, L: 2399, XL: 3099 } },
  // Premium
  { type: "pizza", category: "Premium Pizza's", name: "Malai Boti Pizza", description: "Cream Sauce, Malai Boti Chicken, Smoked Chicken, Green Pepper, Tomatoes & Lot of Cheese", prices: { S: 1099, M: 1799, L: 2599, XL: 3299 }, image: menuMalaiBoti, tag: "New" },
  { type: "pizza", category: "Premium Pizza's", name: "Chicken Max", description: "Onion, Chicken Tikka, Sausages, Smoked Chicken, Black Olives & Lot of Cheese", prices: { S: 1099, M: 1799, L: 2599, XL: 3299 } },
  { type: "pizza", category: "Premium Pizza's", name: "Friends Pizza", description: "Onion Green Pepper, Black Olives, Yak Smoked Beef, Chicken Tikka, Pepperoni Slice & Lot of Cheese", prices: { S: 1199, M: 1899, L: 2799, XL: 3499 }, tag: "Popular", image: menuFamily },
  { type: "pizza", category: "Premium Pizza's", name: "Arabic Gr", description: "Green Sauce, Grilled Chicken Tomato, Green Onion & Lot of Cheese", prices: { S: 1099, M: 1799, L: 2599, XL: 3299 } },
  // Special
  { type: "pizza", category: "Special Pizza's", name: "Pamir's Special", description: "Special Herbs Sauce, Onion, Green Pepper, Grilled Chicken, Smoked Chicken, Mushrooms, Tomato & Lot of Cheese", prices: { S: 1299, M: 1999, L: 2899, XL: 3699 }, tag: "Chef's Special", image: menuSpecial },
  { type: "pizza", category: "Special Pizza's", name: "King Supreme", description: "Grilled Chicken, Sausages, Smoke Chicken, Onion Bell Pepper, Mushrooms, Black Olives & Lot of Cheese", prices: { S: 1299, M: 1999, L: 2899, XL: 3699 } },
  { type: "pizza", category: "Special Pizza's", name: "Pamir Alfal", description: "Special Pamiri Sauce, Afghani Chicken, Jalapeno Onion, Green Pepper, Black Olives & Lot of Cheese", prices: { S: 1299, M: 1999, L: 2899, XL: 3699 } },
  { type: "pizza", category: "Special Pizza's", name: "Kabab Chaska Pizza", description: "Onion, Green Pepper, Kabab, Chicken Tikka, Black Olives & Lot of Cheese", prices: { S: 1299, M: 1999, L: 2899, XL: 3699 } },
  { type: "pizza", category: "Special Pizza's", name: "Yak Pizza", description: "Grilled Yak Meat, Yak Smoked Beef, Yellow Tomato, Mushrooms, Green Pepper & Lot of Cheese", prices: { S: 1499, M: 2299, L: 3199, XL: 3999 }, tag: "Local Specialty" },
  // Juices
  { type: "simple", category: "Hunza Fresh Juice", name: "Cherry Juice", price: 499, image: menuDrinks },
  { type: "simple", category: "Hunza Fresh Juice", name: "Apricot Juice", price: 399 },
  { type: "simple", category: "Hunza Fresh Juice", name: "Apple Juice", price: 399 },
  { type: "simple", category: "Hunza Fresh Juice", name: "Sea Buckthorn Juice", price: 699 },
  { type: "simple", category: "Hunza Fresh Juice", name: "Mix Fruit Juice", price: 499 },
  // Coffee
  { type: "simple", category: "Coffee's", name: "Cappuccino", price: 499 },
  { type: "simple", category: "Coffee's", name: "Black Coffee", price: 299 },
  { type: "simple", category: "Coffee's", name: "Milk Coffee", price: 399 },
  { type: "simple", category: "Coffee's", name: "Pamiro Coffee", price: 599 },
  { type: "simple", category: "Coffee's", name: "Hot Chocolate", price: 499 },
  // Pasta
  { type: "simple", category: "Pasta's", name: "Chicken Pasta", price: 999, image: menuSides },
  { type: "simple", category: "Pasta's", name: "Yak Pasta", price: 1399 },
  { type: "simple", category: "Pasta's", name: "Chicken Lasange", price: 999 },
  { type: "simple", category: "Pasta's", name: "Yak Lasange", price: 1499 },
  // Sandwiches
  { type: "simple", category: "Sandwiches", name: "Pamiro Sandwich", price: 999 },
  { type: "simple", category: "Sandwiches", name: "Yak Sandwich", price: 1499 },
  // Appetizer
  { type: "simple", category: "Appetizer", name: "Chicken Nuggets", variants: [{ name: "5 pcs", price: 499 }, { name: "10 pcs", price: 999 }] },
  { type: "simple", category: "Appetizer", name: "Cheese Sticks", variants: [{ name: "5 pcs", price: 599 }, { name: "10 pcs", price: 1199 }] },
  { type: "simple", category: "Appetizer", name: "Garlic Mushrooms", price: 1199 },
  { type: "simple", category: "Appetizer", name: "Potato Wedges", variants: [{ name: "5 pcs", price: 399 }, { name: "10 pcs", price: 799 }] },
  { type: "simple", category: "Appetizer", name: "French Fries", variants: [{ name: "Regular", price: 399 }, { name: "Large", price: 799 }], image: menuKids },
  { type: "simple", category: "Appetizer", name: "Chicken Hot Wings", variants: [{ name: "5 pcs", price: 799 }, { name: "10 pcs", price: 1499 }] },
  // Beverages
  { type: "simple", category: "Beverages", name: "Coke", variants: [{ name: "Can", price: 199 }, { name: "1.5 Ltr", price: 299 }] },
  { type: "simple", category: "Beverages", name: "Fanta", variants: [{ name: "Can", price: 199 }, { name: "1.5 Ltr", price: 299 }] },
  { type: "simple", category: "Beverages", name: "Sprite", variants: [{ name: "Can", price: 199 }, { name: "1.5 Ltr", price: 299 }] },
  { type: "simple", category: "Beverages", name: "Mineral Water", variants: [{ name: "500 ml", price: 99 }, { name: "1.5 Ltr", price: 199 }] },
];

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
