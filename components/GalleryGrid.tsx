"use client";
import { useState } from "react";
import PhotoPlaceholder from "./PhotoPlaceholder";

type Shot = { label: string; category: string };

const SHOTS: Shot[] = [
  { label: "Main hall — wide, lights on", category: "Spaces" },
  { label: "Wedding ceremony aisle", category: "Weddings" },
  { label: "Quinceañera grand entrance", category: "Quinceañeras" },
  { label: "Reception head table", category: "Receptions" },
  { label: "Corporate seminar setup", category: "Corporate" },
  { label: "Banquet rounds, full room", category: "Banquets" },
  { label: "Birthday balloon arch", category: "Birthdays" },
  { label: "Outdoor space — golden hour", category: "Spaces" },
  { label: "Bridal suite detail", category: "Weddings" },
  { label: "Dance floor, crowd", category: "Receptions" },
  { label: "Catering / buffet line", category: "Spaces" },
  { label: "Centerpiece close-up", category: "Receptions" },
];

const CATS = ["All", "Spaces", "Weddings", "Quinceañeras", "Receptions", "Corporate", "Banquets", "Birthdays"];

export default function GalleryGrid() {
  const [cat, setCat] = useState("All");
  const shown = cat === "All" ? SHOTS : SHOTS.filter((s) => s.category === cat);
  return (
    <div>
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {CATS.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`px-4 py-1.5 rounded-full text-sm border transition ${
              cat === c ? "bg-primary text-white border-primary" : "border-ink/20 hover:border-primary"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {shown.map((s, i) => (
          <PhotoPlaceholder key={i} label={s.label} aspect="aspect-square" />
        ))}
      </div>
    </div>
  );
}
