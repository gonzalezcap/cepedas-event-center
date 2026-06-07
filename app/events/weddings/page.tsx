import EventPage from "@/components/EventPage";
export const metadata = {
  title: "Wedding Venue in Tulsa, OK",
  description: "Host your wedding at Cepedas Event Center — a flexible, open wedding venue in Tulsa, OK serving Broken Arrow, Owasso & Catoosa. Book a tour today.",
};
export default function Page() {
  return <EventPage title="Weddings" intro="A versatile, open canvas for the wedding of your dreams in Tulsa." bullets={["Ceremony & reception in one location","Open floor plan for any layout or theme","Prep suite for the wedding party","Bring your own caterer & vendors (policy per blueprint)","Ample parking for guests"]} gallery={["Ceremony aisle","Head table","First dance","Reception details","Cake table","Guest tables"]} />;
}
