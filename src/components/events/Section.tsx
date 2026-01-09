import { usePortfolioData } from "@/hooks/usePortfolioData";
import SectionHeaderText from "../common/SectionHeaderText";
import EventCard from "./EventCard";
import { Event } from "@/types";

export default function EventsSection() {
    const { events } = usePortfolioData();
    return (
        <div className="mt-4">
            <SectionHeaderText text="Hackathons and conferences" />
            <div className="w-full overflow-x-auto">
                <div className="pr-4 flex gap-2 min-w-max py-4 pl-2/3">
                {
                    events.map((e: Event) => <EventCard key={e.name} {...e} />)
                }
                </div>
            </div>
        </div>
    )
}