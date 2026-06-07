import EventPage from "@/components/EventPage";
export const metadata = {
  title: "Fundraiser & Gala Venue in Tulsa, OK",
  description: "Host your fundraiser, gala, or charity event at Cepedas Event Center in Tulsa, OK. Spacious, flexible, and budget-friendly. Book a tour today.",
};
export default function Page() {
  return <EventPage title="Fundraisers" intro="A spacious, flexible venue for galas, charity dinners, and community events." bullets={["Seating for large audiences","Stage & presentation options","Space for auctions & displays","Catering & bar friendly","Affordable nonprofit options (per blueprint)"]} gallery={["Gala wide","Stage / podium","Auction tables","Dinner service","Sponsor display","Crowd"]} />;
}
