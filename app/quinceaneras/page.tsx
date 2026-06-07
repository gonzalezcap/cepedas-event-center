import EventPage from "@/components/EventPage";
export const metadata = {
  title: "Quinceañera Venue in Tulsa, OK",
  description: "Celebrate her quinceañera at Cepedas Event Center in Tulsa, OK. A spacious, elegant venue for the grand entrance, dances & dinner. Book a tour.",
};
export default function Page() {
  return <EventPage title="Quinceañeras" intro="A grand, beautiful space to celebrate her special day." bullets={["Room for the grand entrance & court","Spacious dance floor","Seating for the whole family","Flexible décor — make it your own","Convenient Tulsa-metro location"]} gallery={["Grand entrance","Court of honor","Dance floor","Dinner setup","Décor detail","Family portrait"]} />;
}
