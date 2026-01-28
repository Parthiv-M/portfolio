'use client'

import { useState } from "react";
import { Event } from "@/types";
import { Award } from "@deemlol/next-icons";
import { motion, AnimatePresence } from "framer-motion";

export default function EventCard(props: Event) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            style={{ backgroundImage: `url(${props.image || '/hacks/fallback.jpg'})` }}
            initial="initial"
            animate={isExpanded ? "hover" : "initial"}
            whileHover="hover"
            onHoverStart={() => setIsExpanded(true)}
            onHoverEnd={() => setIsExpanded(false)}
            onClick={() => setIsExpanded(!isExpanded)}
            className="relative flex-shrink-0 min-h-108 md:min-h-148 w-72 md:w-120 bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden cursor-pointer"
        >
            <motion.div
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full grayscale"
                style={{ backgroundImage: `url(${props.image || '/hacks/fallback.jpg'})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="text-white absolute flex flex-col justify-between p-6 h-full w-full rounded-lg top-0 left-0 bg-gradient-to-t from-[#302E28] via-[#302E28]/80 to-transparent">
                <div className="w-full flex justify-between">
                    <p className="uppercase font-bold">{props?.role}</p>
                    {props?.isAward && <Award size={24} />}
                </div>

                <motion.div
                    variants={{
                        initial: { maxHeight: "6.5rem" },
                        hover: { maxHeight: "40rem" }
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="mt-auto overflow-hidden"
                >
                    <p className="font-bold uppercase">// {props?.name} //</p>
                    <p className={`mt-2 text-sm sm:text-base whitespace-pre-line transition-all duration-700 ${isExpanded ? '' : 'line-clamp-4'}`}>
                        {props.description.join("\n\n")}
                    </p>
                </motion.div>
            </div>
        </motion.div>
    )
}