"use client"

import { useState } from "react";
import StackIcon from "tech-stack-icons"
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { BatteryCharging, Bluetooth, Wifi } from "@deemlol/next-icons";

function Laptop({ stack, setHoveredCategory }: { stack: Record<string, string[]>, setHoveredCategory: (cat: string | null) => void }) {
    return (
        <div className="w-full px-4 py-5">
            <div className="screen">
                <div className="viewport">
                    <div className="w-full flex justify-between items-center bg-black/70 md:p-1">
                        <div className="flex items-center md:gap-2 text-[0.4rem] md:text-[0.7rem] font-bold text-neutral-200">
                            <p className="hover:bg-black/20 p-1 rounded">Workspaces</p>
                            <p className="hover:bg-black/20 p-1 rounded">Applications</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Wifi className="w-[10px] h-[10px] md:w-[14px] md:h-[14px]" color="#d1d1d1ff" />
                            <Bluetooth className="w-[10px] h-[10px] md:w-[14px] md:h-[14px]" color="#d1d1d1ff" />
                            <BatteryCharging className="w-[14px] h-[14px] md:w-[18px] md:h-[18px]" color="#d1d1d1ff" />
                            <p className="text-[0.4rem] md:text-[0.7rem] font-bold text-neutral-200">42%</p>
                        </div>
                    </div>
                    <div className="md:h-full mx-auto flex flex-col items-center justify-center">
                        <p className="hidden md:block">Hi! If this were my system, this would be my tech stack.</p>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-[0.5rem] md:text-sm p-4">
                            {Object.keys(stack).map((cat) => (
                                <>
                                    <div
                                        key={cat}
                                        onMouseEnter={() => setHoveredCategory(cat)}
                                        onMouseLeave={() => setHoveredCategory(null)}
                                        className="hover:bg-black/10 px-2 py-1 rounded transition-colors duration-200"
                                    >
                                        {cat}
                                    </div>
                                    {cat !== Object.keys(stack).at(-1) && <span className="text-neutral-500">•</span>}
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="base"></div>
            <div className="notch"></div>
        </div>
    )
}

export default function Stack() {
    const { stack } = usePortfolioData();
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

    const allIcons = Object.values(stack).flat();
    const rows = [];
    for (let i = 0; i < allIcons.length; i += 7) {
        rows.push(allIcons.slice(i, i + 7));
    }

    const isIconHighlighted = (iconName: string) => {
        if (!hoveredCategory) return false;
        return stack[hoveredCategory]?.includes(iconName);
    };

    return (
        <div className="group relative flex flex-col md:grid md:grid-cols-2 rounded-md overflow-hidden h-full w-full bg-gradient-to-b from-transparent to-[#d6d2c8]">
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
                                    variant={isIconHighlighted(iconName) ? undefined : "grayscale"}
                                    className="w-8 h-8 sm:w-8 sm:h-8 md:w-8 md:h-8 rounded transition-all duration-300"
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Laptop Component */}
            <div className="relative md:absolute md:right-0 md:translate-x-40 lg:translate-x-60 group-hover:translate-x-0 md:top-1/2 md:transform md:-translate-y-1/2 flex items-center justify-center w-full md:w-3/4 pb-12 md:pb-0 transition-all duration-700">
                <div className="w-[85%] md:w-full">
                    <Laptop stack={stack} setHoveredCategory={setHoveredCategory} />
                </div>
            </div>
        </div>
    )
}