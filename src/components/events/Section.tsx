'use client'

import { useRef, useState, useEffect } from "react";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import EventCard from "./EventCard";
import { Event } from "@/types";
import { ArrowLeft } from "@deemlol/next-icons";
import { motion } from "framer-motion";

export default function EventsSection() {
    const { events } = usePortfolioData();
    const scrollRef = useRef<HTMLDivElement>(null);

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
        }
    };

    useEffect(() => {
        const current = scrollRef.current;
        if (current) {
            checkScroll();
            window.addEventListener("resize", checkScroll);
            return () => window.removeEventListener("resize", checkScroll);
        }
    }, []);

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
        <div className="relative group/events">
            {/* Scroll Buttons */}
            {canScrollLeft && (
                <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20 h-full flex items-center pl-4 pointer-events-none opacity-0 group-hover/events:opacity-100 transition-opacity">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => scroll("left")}
                        className="p-3 bg-white/10 text-white rounded-full backdrop-blur-md pointer-events-auto border border-white/20 hover:bg-white/20 transition-colors shadow-2xl cursor-pointer"
                        aria-label="Scroll left"
                    >
                        <ArrowLeft size={24} />
                    </motion.button>
                </div>
            )}
            {canScrollRight && (
                <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20 h-full flex items-center pr-4 pointer-events-none opacity-0 group-hover/events:opacity-100 transition-opacity">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => scroll("right")}
                        className="p-3 bg-white/10 text-white rounded-full backdrop-blur-md pointer-events-auto border border-white/20 hover:bg-white/20 transition-colors shadow-2xl cursor-pointer"
                        aria-label="Scroll right"
                    >
                        <ArrowLeft size={24} className="rotate-180" />
                    </motion.button>
                </div>
            )}
            <div
                ref={scrollRef}
                onScroll={checkScroll}
                className="relative w-full overflow-x-auto no-scrollbar"
            >
                <div className="pr-4 flex items-center gap-2 min-w-max">
                    <div className="flex-shrink-0 md:w-[8%] w-[2%]" />
                    <div className="pr-4 flex items-center gap-2 min-w-max">
                        <div className="relative flex-shrink-0 min-h-108 md:min-h-148 w-72 md:w-120 bg-[#302E28] rounded-lg overflow-hidden flex flex-col justify-start p-8 md:p-12 text-white border border-white/10">
                            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.9] opacity-90">
                                hacks and <br /> conferences
                            </h2>
                            <div className="mt-auto opacity-30 text-xs md:text-sm tracking-widest uppercase">
                            // Fun (tech) things I do
                            </div>
                        </div>
                        {
                            events.map((e: Event) => <EventCard key={e.name} {...e} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}