import EventPage from "@/components/EventPage";
export const metadata = {
  title: "Corporate Event Venue in Tulsa, OK",
  description: "Host corporate meetings, trainings, holiday parties and conferences at Cepedas Event Center in Tulsa, OK. Flexible, professional space. Book a tour.",
};
export default function Page() {
  return <EventPage title="Corporate Events" intro="A professional, flexible space for meetings, trainings & company gatherings." bullets={["Configurable seating (theater, classroom, rounds)","Room for catering & breakouts","Convenient Tulsa-metro access & parking","Great for holiday parties & galas","A/V accommodations (details per blueprint)"]} gallery={["Seminar setup","Networking","Presentation","Catered lunch","Banquet rounds","Awards stage"]} />;
}
