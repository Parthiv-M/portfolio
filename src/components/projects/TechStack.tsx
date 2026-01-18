'use client'

import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";

interface TechStackProps {
    icons: string[];
}

export default function TechStack({ icons }: TechStackProps) {
    if (!icons || icons.length === 0) return null;

    return (
        <motion.div
            className="flex items-center"
            initial="initial"
            whileHover="hover"
        >
            {icons.map((icon, index) => (
                <motion.div
                    key={`${icon}-${index}`}
                    variants={{
                        initial: { x: index * -12 },
                        hover: { x: index * 4 }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="relative flex items-center justify-center w-8 h-8 rounded-full border-2 border-white/80 shadow-sm overflow-hidden"
                    style={{ zIndex: icons.length - index, backgroundColor: '#F0ECE3' }}
                >
                    <motion.div
                        variants={{
                            initial: { filter: "grayscale(100%)" },
                            hover: { filter: "grayscale(0%)" }
                        }}
                        className="flex items-center justify-center"
                    >
                        <StackIcon name={icon} className="w-5 h-5" />
                    </motion.div>
                </motion.div>
            ))}
        </motion.div>
    );
}
