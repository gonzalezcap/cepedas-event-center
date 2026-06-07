import EventPage from "@/components/EventPage";
export const metadata = {
  title: "Banquet Hall in Tulsa, OK",
  description: "Cepedas Event Center is a spacious banquet hall in Tulsa, OK for dinners, galas, and large gatherings. Book a tour of our open event space.",
};
export default function Page() {
  return <EventPage title="Banquets" intro="A spacious banquet hall for dinners, galas, and large gatherings." bullets={["Seating for large parties","Open layout for any configuration","Space for buffet or plated service","Stage / head-table options","Ample parking"]} gallery={["Banquet wide","Rounds set","Buffet line","Head table","Stage","Room detail"]} />;
}
