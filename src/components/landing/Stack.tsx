"use client"


import StackIcon from "tech-stack-icons"
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { BatteryCharging, Bluetooth, Wifi } from "@deemlol/next-icons";

function Laptop() {
    return (
        <div className="w-full px-4 py-5">
            <div className="screen">
                <div className="viewport flex flex-col">
                    <div className="w-full flex justify-between items-center bg-[#302E28]/10 md:p-1 border-b border-[#302E28]/10">
                        <div className="flex items-center md:gap-2 text-[0.4rem] md:text-[0.7rem] font-bold text-[#302E28]/60">
                            <p className="px-1">terminal</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Wifi className="w-[10px] h-[10px] md:w-[14px] md:h-[14px]" color="#302E28" style={{ opacity: 0.6 }} />
                            <Bluetooth className="w-[10px] h-[10px] md:w-[14px] md:h-[14px]" color="#302E28" style={{ opacity: 0.6 }} />
                            <BatteryCharging className="w-[14px] h-[14px] md:w-[18px] md:h-[18px]" color="#302E28" style={{ opacity: 0.6 }} />
                            <p className="text-[0.4rem] md:text-[0.7rem] font-bold text-[#302E28]/60">42%</p>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col p-2 font-mono text-[0.4rem] md:text-[0.6rem] lg:text-[0.7rem] leading-tight">
                        <div className="flex-1 flex items-center justify-center gap-4">
                            {/* ASCII Logo */}
                            <div className="text-[#302E28] font-bold hidden sm:block scale-90 origin-top-left mr-1">
                                <pre className="leading-[1.1]">
                                    {`  :::::::::  
  :+:    :+: 
  +:+    +:+ 
  +#++:++#+  
  +#+        
  +#+        
  ###        `}
                                </pre>
                            </div>
                            {/* Neofetch Info */}
                            <div className="flex flex-col">
                                <div className="mb-1">
                                    <span className="text-[#302E28] font-bold"> Hi guest</span>
                                    <span className="text-[#8D8A83]">@</span>
                                    <span className="text-[#302E28] font-bold">theprotonade</span>
                                </div>
                                <div className="text-[#8D8A83] mb-1">-----------------</div>
                                <div className="grid grid-cols-[auto,1fr] gap-x-2">
                                    <span className="text-[#302E28] font-bold">OS:</span>
                                    <span className="text-[#302E28]">Pop!_OS</span>

                                    <span className="text-[#302E28] font-bold">DE:</span>
                                    <span className="text-[#302E28]">GNOME</span>

                                    <span className="text-[#302E28] font-bold">Terminal:</span>
                                    <span className="text-[#302E28]">GNOME Terminal</span>
                                </div>
                                <div className="mt-2 flex gap-1">
                                    <div className="w-2 h-2 bg-[#F0ECE3] border border-[#302E28]/10"></div>
                                    <div className="w-2 h-2 bg-[#302E28]"></div>
                                    <div className="w-2 h-2 bg-[#E5C57F]"></div>
                                    <div className="w-2 h-2 bg-[#8D8A83]"></div>
                                    <div className="w-2 h-2 bg-[#E5C57F]/60"></div>
                                    <div className="w-2 h-2 bg-[#302E28]/60"></div>
                                    <div className="w-2 h-2 bg-[#8D8A83]/60"></div>
                                    <div className="w-2 h-2 bg-[#302E28]/20"></div>
                                </div>
                            </div>
                        </div>
                        {/* Prompt */}
                        <div className="mt-2 flex items-center text-[#302E28] font-bold opacity-70">
                            <span>guest@theprotonade:~$</span>
                            <span className="cursor ml-1"></span>
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
    const allIcons = Object.values(stack).flat();
    const rows = [];
    for (let i = 0; i < allIcons.length; i += 7) {
        rows.push(allIcons.slice(i, i + 7));
    }

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
                                    variant="grayscale"
                                    name={iconName}
                                    className="w-8 h-8 sm:w-8 sm:h-8 md:w-8 md:h-8"
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Laptop Component */}
            <div className="relative md:absolute md:right-0 md:translate-x-40 lg:translate-x-60 group-hover:translate-x-0 md:top-1/2 md:transform md:-translate-y-1/2 flex items-center justify-center w-full md:w-[60%] pb-12 md:pb-0 transition-all duration-700">
                <div className="w-[85%] md:w-full">
                    <Laptop />
                </div>
            </div>
        </div>
    )
}