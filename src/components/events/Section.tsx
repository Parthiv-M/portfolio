import SectionHeaderText from "../common/SectionHeaderText";
import EventCard from "./EventCard";

export default function EventsSection() {
    return (
        <div>
            <SectionHeaderText text="Hackathons and conferences" />
            <div className="w-full overflow-x-auto">
                <div className="pr-4 flex gap-2 min-w-max py-4 pl-2/3">
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </div>
            </div>
        </div>
    )
}