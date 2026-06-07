import EventPage from "@/components/EventPage";
export const metadata = {
  title: "Baby Shower Venue in Tulsa, OK",
  description: "Celebrate the new arrival at Cepedas Event Center in Tulsa, OK — a bright, flexible space for baby showers and gender reveals. Book a tour.",
};
export default function Page() {
  return <EventPage title="Baby Showers" intro="A bright, welcoming space to celebrate the newest arrival." bullets={["Cozy or large gatherings","Easy to decorate & theme","Space for games, food & gifts","Great for gender reveals","Family-friendly with parking"]} gallery={["Décor backdrop","Dessert table","Games area","Gift table","Guest seating","Group photo"]} />;
}
