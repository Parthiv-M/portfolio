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
        <div className="relative grid grid-cols-2 rounded-md overflow-hidden h-full w-full bg-gradient-to-b from-transparent to-[#d6d2c8]">
            <div className="p-16 flex flex-col justify-center mx-auto">
                <p className="uppercase font-bold tracking-wider text-neutral-700">Tech Stack</p>
                {rows.map((row, rowIdx) => (
                    <div key={rowIdx} className="mt-8 flex gap-6 text-neutral-400">
                        {row.map((iconName: string) => (
                            <StackIcon key={iconName} name={iconName} variant="grayscale" className="w-8 h-8 rounded" />
                        ))}
                    </div>
                ))}
            </div>
            <div className="absolute -right-60 top-1/2 transform -translate-y-1/2 flex items-center w-3/4 mx-auto">
                <Laptop />
            </div>
        </div>
    )
}