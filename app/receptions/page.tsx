import EventPage from "@/components/EventPage";
export const metadata = {
  title: "Reception Venue in Tulsa, OK",
  description: "Host your reception at Cepedas Event Center in Tulsa, OK — open layout, dance floor and seating for your celebration. Book a tour today.",
};
export default function Page() {
  return <EventPage title="Receptions" intro="An open, elegant space to host receptions of any kind." bullets={["Flexible seating & dance floor","Space for catering & bar setups","Easy layout for any guest count","Great for photos","Parking on site"]} gallery={["Reception wide","Head table","Dance floor","Bar area","Centerpieces","Toast moment"]} />;
}
