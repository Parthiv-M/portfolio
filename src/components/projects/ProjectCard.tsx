import { Project } from "@/types";
import TechStack from "./TechStack";

interface ProjectCardProps extends Project {
    classes?: string
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <div
            className={`
                group
                relative
                col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4
                flex flex-col justify-between border rounded-md p-4 sm:p-6 overflow-hidden bg-[#F0ECE3] transition-all duration-300 ${props?.classes}
            `}
        >
            <div className="z-10 relative">
                <h6 className="text-2xl sm:text-3xl md:text-4xl font-bold">{props.name}</h6>
                <p className="mt-4 text-sm sm:text-base text-neutral-600">
                    {props?.description}
                </p>
            </div>
            <div className="mt-4">
                <TechStack icons={props.techStack || []} />
            </div>

            <div className={`absolute -bottom-8 rotate-3 right-10 w-3/5 aspect-[5/3] z-0 hidden md:block opacity-20 grayscale group-hover:opacity-80 group-hover:-translate-y-3 transition-all duration-500 ease-out pointer-events-none`}>
                <img
                    src={props?.image || "/projects/image.png"}
                    alt={props?.name}
                    className="w-full h-full object-cover object-top rounded-lg shadow-2xl border border-white/20"
                />
            </div>
        </div>
    )
}