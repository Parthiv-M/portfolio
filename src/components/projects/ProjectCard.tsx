import { Maximize2 } from "@deemlol/next-icons";

export default function ProjectCard({
    colSpan,
    classes = ""
}: {
    colSpan: number,
    classes?: string
}) {
    return (
        <div className={`col-span-${colSpan} flex flex-col justify-between border rounded-md p-6 ${classes}`}>
            <div>
                <h6 className="text-4xl font-bold">project name</h6>
                <p className="mt-4">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Sit amet consectetur adipiscing elit quisque faucibus ex.
                    Adipiscing elit quisque faucibus ex sapien vitae pellentesque.
                    Adipiscing elit quisque faucibus ex sapien vitae pellentesque.
                </p>
            </div>
            <div className="flex justify-between">
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