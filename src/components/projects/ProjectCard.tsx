'use client'

import { Project } from "@/types";
import { Maximize2, Minimize2 } from "@deemlol/next-icons";
import { useState } from "react";

interface ProjectCardProps extends Project {
    classes?: string
}

export default function ProjectCard(props: ProjectCardProps) {
    const [isExpanded, setExpanded] = useState(false);
    return (
        <>
            {/* init state */}
            <div className={`
                ${isExpanded && "absolute h-full w-full overflow-hidden bg-[#F0ECE3]"}
                col-span-12 md:col-span-${props?.colSpan}
                flex flex-col justify-between border rounded-md p-4 sm:p-6 ${props?.classes}
            `}>
                <div>
                    <h6 className="text-2xl sm:text-3xl md:text-4xl font-bold">{props.name}</h6>
                    <p className="mt-4 text-sm sm:text-base">
                        {props?.description}
                    </p>
                </div>
                {isExpanded &&
                    <div className="grid grid-cols-12 h-full mt-4">
                        <div className="absolute -bottom-8 w-2/3 col-span-8 self-end">
                            <img src={props.image || "/projects/image.png"} alt={props.name} className="w-full rounded-t-lg grayscale" />
                            <div className="absolute top-0 h-full w-full bg-gradient-to-t from-black to-transparent via-transparent rounded-t-lg"></div>
                        </div>
                        <div className="col-span-8"></div>
                        <div className="col-span-4 px-12 py-2 w-full h-full bg-red00">
                            {props.purpose && (
                                <>
                                    <h6 className="text-lg font-bold">Purpose</h6>
                                    <p>{props.purpose}</p>
                                </>
                            )}
                            {props.technicalities && (
                                <>
                                    <h6 className="text-lg font-bold mt-8">Technicalities</h6>
                                    <p className="mt-1">{props.technicalities}</p>
                                </>
                            )}
                            {props.other && (
                                <>
                                    <h6 className="text-lg font-bold mt-8">Other stuff</h6>
                                    <p className="mt-1">{props.other}</p>
                                </>
                            )}
                            {props.links && props.links.length > 0 && (
                                <>
                                    <h6 className="text-lg font-bold mt-8">Links</h6>
                                    <div className="mt-1 flex flex-col gap-1">
                                        {props.links.map((link, idx) => (
                                            <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="underline">
                                                {link.label}
                                            </a>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>}
                <div className="flex justify-between mt-6">
                    <div>
                        {/* put tech stack icons here, visible on hover? */}
                    </div>
                    <div className="cursor-pointer rounded-full hover:bg-black/10 p-2">
                        {!isExpanded && <Maximize2 size={24} onClick={() => setExpanded(true)} />}
                        {isExpanded && <Minimize2 size={24} onClick={() => setExpanded(false)} />}
                    </div>
                </div>
            </div>
        </>
    )
}