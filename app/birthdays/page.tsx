import EventPage from "@/components/EventPage";
export const metadata = {
  title: "Birthday Party Venue in Tulsa, OK",
  description: "Throw an unforgettable birthday party at Cepedas Event Center in Tulsa, OK. Flexible space for milestone birthdays of all ages. Book a tour.",
};
export default function Page() {
  return <EventPage title="Birthday Parties" intro="A flexible, fun space for birthdays of every age and theme." bullets={["Room to decorate any way you like","Space for food, cake & music","Great for milestone celebrations","Family-friendly & spacious","Easy parking"]} gallery={["Balloon arch","Cake table","Party crowd","Décor theme","Dance / games","Group photo"]} />;
}
