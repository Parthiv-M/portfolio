import { Project } from "@/types";
import { Maximize2 } from "@deemlol/next-icons";

interface ProjectCardProps extends Project {
    classes?: string
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <div className={`col-span-12 md:col-span-${props?.colSpan} flex flex-col justify-between border rounded-md p-4 sm:p-6 ${props?.classes}`}>
            <div>
                <h6 className="text-2xl sm:text-3xl md:text-4xl font-bold">{props.name}</h6>
                <p className="mt-4 text-sm sm:text-base">
                    {props?.description}
                </p>
            </div>
            <div className="flex justify-between mt-6">
                <div>
                    {/* put tech stack icons here, visible on hover? */}
                </div>
                <div>
                    <Maximize2 size={24} />
                </div>
            </div>
        </div>
    )
}