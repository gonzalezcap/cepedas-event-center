import EventPage from "@/components/EventPage";
export const metadata = {
  title: "Anniversary Party Venue in Tulsa, OK",
  description: "Celebrate your anniversary at Cepedas Event Center in Tulsa, OK — an elegant, open venue for milestone celebrations. Book a tour today.",
};
export default function Page() {
  return <EventPage title="Anniversaries" intro="An elegant space to celebrate years of love and milestones." bullets={["Intimate or large gatherings","Flexible décor & layout","Space for dinner & dancing","Perfect for milestone anniversaries","On-site parking"]} gallery={["Welcome table","Dinner setup","Dance floor","Toast","Memory display","Couple portrait"]} />;
}
