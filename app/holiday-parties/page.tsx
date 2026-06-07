import EventPage from "@/components/EventPage";
export const metadata = {
  title: "Holiday Party Venue in Tulsa, OK",
  description: "Host your holiday party at Cepedas Event Center in Tulsa, OK — festive, spacious, and ready for company or family celebrations. Book a tour.",
};
export default function Page() {
  return <EventPage title="Holiday Parties" intro="A festive, spacious venue for company and family holiday celebrations." bullets={["Room for large groups","Space for catering & bar","Decorate for any holiday","Great for company parties","Convenient & easy parking"]} gallery={["Holiday décor","Dinner setup","Group toast","Dance floor","Gift table","Festive details"]} />;
}
