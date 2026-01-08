import { Maximize2 } from "@deemlol/next-icons";

export default function ProjectCard({
    colSpan,
    classes = ""
}: {
    colSpan: number,
    classes?: string
}) {
    return (
        <div className={`col-span-12 md:col-span-${colSpan} flex flex-col justify-between border rounded-md p-4 sm:p-6 ${classes}`}>
            <div>
                <h6 className="text-2xl sm:text-3xl md:text-4xl font-bold">project name</h6>
                <p className="mt-4 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Sit amet consectetur adipiscing elit quisque faucibus ex.
                    Adipiscing elit quisque faucibus ex sapien vitae pellentesque.
                    Adipiscing elit quisque faucibus ex sapien vitae pellentesque.
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