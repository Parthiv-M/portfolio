import Section from "../common/Section";
import SectionHeaderText from "../common/SectionHeaderText";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
    return (
        <Section>
            <div className="min-h-[95vh] grid grid-cols-1 md:grid-cols-12 md:grid-rows-3 gap-2 mt-2">
                <ProjectCard colSpan={4} />
                <ProjectCard colSpan={8} />
                <ProjectCard colSpan={8} />
                <ProjectCard colSpan={4} />
                <ProjectCard colSpan={4} />
                <ProjectCard colSpan={8} />
            </div>
        </Section>
    )
}