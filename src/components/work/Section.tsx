import Section from "../common/Section";
import SectionHeaderText from "../common/SectionHeaderText";
import WorkTile from "./WorkTile";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { WorkExperience } from "@/types";

export default function WorkSection() {
    const { work, clubs, volunteering } = usePortfolioData();
    return (
        <Section>
            <div className="min-h-screen flex flex-col md:grid md:grid-cols-3 gap-2">
                <div className="md:col-span-2 flex flex-col justify-between border rounded-md p-6 sm:p-8">
                    <div>
                        {work.length !== 0 && <div>
                            <SectionHeaderText text="All about work" />
                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                {
                                    work.map((w: WorkExperience) => <WorkTile key={w.organization} {...w} />)
                                }
                            </div>
                        </div>}
                        {clubs.length !== 0 && <div className="mt-10 sm:mt-12">
                            <SectionHeaderText text="Clubs and orgs" />
                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                {
                                    clubs.map((w: WorkExperience) => <WorkTile key={w.organization} {...w} />)
                                }
                            </div>
                        </div>}
                        {volunteering.length !== 0 && <div className="mt-10 sm:mt-12">
                            <SectionHeaderText text="Volunteering" />
                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                {
                                    volunteering.map((w: WorkExperience) => <WorkTile key={w.organization} {...w} />)
                                }
                            </div>
                        </div>}
                    </div>
                    <div className="mt-24 md:mt-0">
                        <em className="text-gray-500">
                            And all that's left is a body moving through space and time. 7,000 RPM.
                            That's where you meet it. You feel it coming. It creeps up on you, close
                            in your ear. Asks you a question. The only question that matters. <span className="font-bold">Who are you?</span>
                        </em>
                        <p className="font-bold mt-2">- Ford v Ferrari</p>
                    </div>
                </div>
                <div className="min-h-128 w-full bg-black/10 rounded-md"></div>
            </div>
        </Section>
    )
}