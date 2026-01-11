'use client'

import { useRef } from "react";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import SectionHeaderText from "../common/SectionHeaderText";
import EventCard from "./EventCard";
import { Event } from "@/types";
import { ArrowLeft } from "@deemlol/next-icons";
import { motion } from "framer-motion";

export default function EventsSection() {
    const { events } = usePortfolioData();
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 480; // Approximate card width
            if (direction === "left") {
                current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        }
    };

    return (
        <div className="mt-4 relative group/events">
            <SectionHeaderText text="Hackathons and conferences" />

            {/* Scroll Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20 h-full flex items-center pl-4 pointer-events-none opacity-0 group-hover/events:opacity-100 transition-opacity">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => scroll("left")}
                    className="p-3 bg-white/10 text-white rounded-full backdrop-blur-md pointer-events-auto border border-white/20 hover:bg-white/20 transition-colors shadow-2xl cursor-pointer"
                >
                    <ArrowLeft size={24} />
                </motion.button>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20 h-full flex items-center pr-4 pointer-events-none opacity-0 group-hover/events:opacity-100 transition-opacity">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => scroll("right")}
                    className="p-3 bg-white/10 text-white rounded-full backdrop-blur-md pointer-events-auto border border-white/20 hover:bg-white/20 transition-colors shadow-2xl cursor-pointer"
                >
                    <ArrowLeft size={24} className="rotate-180" />
                </motion.button>
            </div>

            <div
                ref={scrollRef}
                className="relative w-full overflow-x-auto no-scrollbar"
            >
                <div className="pr-4 flex items-center gap-2 min-w-max py-4 pl-2/3">
                    {
                        events.map((e: Event) => <EventCard key={e.name} {...e} />)
                    }
                </div>
            </div>
        </div>
    )
}