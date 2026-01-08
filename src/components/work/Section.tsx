import Section from "../common/Section";
import SectionHeaderText from "../common/SectionHeaderText";
import WorkTile from "./WorkTile";

export default function WorkSection() {
    return (
        <Section>
            <div className="h-full grid grid-cols-3 gap-2">
                <div className="col-span-2 flex flex-col justify-between border rounded-md p-8">
                    <div>
                        <div>
                            <SectionHeaderText text="All about work" />
                            <div className="mt-4 grid grid-cols-2 gap-6">
                                <WorkTile logo="/institutions/neu.png" />
                                <WorkTile logo="/institutions/wmf.png" />
                                <WorkTile logo="/institutions/iisc.png" />
                                <WorkTile logo="/institutions/lakehead.png" />
                            </div>
                        </div>
                        <div className="mt-12">
                            <SectionHeaderText text="Clubs and orgs" />
                            <div className="mt-4 grid grid-cols-2 gap-6">
                                <WorkTile logo="/institutions/mist.png" />
                                <WorkTile logo="/institutions/post.png" />
                            </div>
                        </div>
                        <div className="mt-12">
                            <SectionHeaderText text="Volunteering" />
                            <div className="mt-4 grid grid-cols-2 gap-6">
                                {/* <WorkTile />
                                <WorkTile />
                                <WorkTile /> */}
                            </div>
                        </div>
                    </div>
                    <em className="w-1/2">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Sit amet consectetur adipiscing elit quisque faucibus ex.
                        Adipiscing elit quisque faucibus ex sapien vitae pellentesque.
                    </em>
                </div>
                <div className="h-full w-full my-auto bg-black/10 rounded-md"></div>
            </div>
        </Section>
    )
}