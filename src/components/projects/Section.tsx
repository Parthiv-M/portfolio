import { usePortfolioData } from "@/hooks/usePortfolioData";
import Section from "../common/Section";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types";

export default function ProjectSection() {
    const { projects } = usePortfolioData();
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-12 gap-2 mt-2">
            {
                projects.map((project: Project) => <ProjectCard key={project.name} {...project} />)
            }
        </div>
    )
}