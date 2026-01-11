import StackIcon from "tech-stack-icons"
import { usePortfolioData } from "@/hooks/usePortfolioData";

function Laptop() {
    return (
        <div className="w-full px-4 py-5">
            <div className="screen">
                <div className="viewport">
                    <p></p>
                </div>
            </div>
            <div className="base"></div>
            <div className="notch"></div>
        </div>
    )
}

export default function Stack() {
    const { stack } = usePortfolioData();
    const rows = [];
    for (let i = 0; i < stack.length; i += 7) {
        rows.push(stack.slice(i, i + 7));
    }

    return (
        <div className="relative flex flex-col md:grid md:grid-cols-2 rounded-md overflow-hidden min-h-full w-full bg-gradient-to-b from-transparent to-[#d6d2c8]">
            {/* Tech Stack Content */}
            <div className="p-8 sm:p-12 md:p-24 flex flex-col justify-center items-center md:items-start z-10 bg-transparent">
                <p className="uppercase font-bold tracking-wider text-neutral-700 w-full text-center md:text-left">Tech Stack</p>
                <div className="w-full flex flex-col items-center md:items-start overflow-hidden">
                    {rows.map((row, rowIdx) => (
                        <div key={rowIdx} className="mt-6 sm:mt-8 flex gap-3 sm:gap-4 md:gap-6 text-neutral-400">
                            {row.map((iconName: string) => (
                                <StackIcon
                                    key={iconName}
                                    name={iconName}
                                    variant="grayscale"
                                    className="w-8 h-8 sm:w-8 sm:h-8 md:w-8 md:h-8 rounded hover:grayscale-0 transition-all duration-300"
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Laptop Component */}
            <div className="relative md:absolute md:-right-40 lg:-right-60 md:top-1/2 md:transform md:-translate-y-1/2 flex items-center justify-center w-full md:w-3/4 pb-12 md:pb-0 transition-all duration-700">
                <div className="w-[85%] md:w-full">
                    <Laptop />
                </div>
            </div>
        </div>
    )
}