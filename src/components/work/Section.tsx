"use client";
import { useState } from "react";
import Section from "../common/Section";
import SectionHeaderText from "../common/SectionHeaderText";
import WorkTile from "./WorkTile";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { WorkExperience } from "@/types";

const SPOTLIGHT_ORGS = ["Google", "Wikimedia Foundation", "Indian Institute of Science"];

export default function WorkSection() {
    const { work, clubs, volunteering } = usePortfolioData();
    const [activeTab, setActiveTab] = useState<"spotlight" | "history">("spotlight");

    const spotlightRoles = work.filter((w) => SPOTLIGHT_ORGS.includes(w.organization));

    return (
        <Section>
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-2">
                <div className="md:col-span-3 lg:col-span-2 flex flex-col justify-between border rounded-md p-4 sm:p-6 md:p-8">
                    <div>
                        {/* Tab Controls */}
                        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                            {(["spotlight", "history"] as const).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-200 cursor-pointer border ${activeTab === tab
                                        ? "bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)]"
                                        : "bg-transparent text-[var(--foreground)] border-[var(--shadow)] hover:opacity-70"
                                        }`}
                                >
                                    {tab === "spotlight" ? "Focused" : "Log book"}
                                </button>
                            ))}
                        </div>

                        {/* Spotlight Tab */}
                        <div
                            className={`transition-all duration-300 ${activeTab === "spotlight"
                                ? "opacity-100 translate-y-0 pointer-events-auto"
                                : "opacity-0 translate-y-2 pointer-events-none absolute"
                                }`}
                        >
                            {activeTab === "spotlight" && (
                                <div>
                                    <div className="mt-4 sm:mt-5 grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                                        {spotlightRoles.map((w: WorkExperience) => (
                                            <WorkTile key={w.organization} {...w} variant="featured" />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Full History Tab */}
                        <div
                            className={`transition-all duration-300 ${activeTab === "history"
                                ? "opacity-100 translate-y-0 pointer-events-auto"
                                : "opacity-0 translate-y-2 pointer-events-none absolute"
                                }`}
                        >
                            {activeTab === "history" && (
                                <div>
                                    {work.length !== 0 && (
                                        <div>
                                            <SectionHeaderText text="All about work" />
                                            <div className="mt-3 sm:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                                                {work.map((w: WorkExperience) => (
                                                    <WorkTile key={w.organization} {...w} />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {clubs.length !== 0 && (
                                        <div className="mt-8 sm:mt-10 md:mt-12">
                                            <SectionHeaderText text="Clubs and orgs" />
                                            <div className="mt-3 sm:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                                                {clubs.map((w: WorkExperience) => (
                                                    <WorkTile key={w.organization} {...w} />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {volunteering.length !== 0 && (
                                        <div className="mt-8 sm:mt-10 md:mt-12">
                                            <SectionHeaderText text="Volunteering" />
                                            <div className="mt-3 sm:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                                                {volunteering.map((w: WorkExperience) => (
                                                    <WorkTile key={w.organization} {...w} />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block lg:min-h-128 w-full border rounded-md bg-[url('/kerala.png')] bg-cover bg-center"></div>
            </div>
        </Section>
    );
}