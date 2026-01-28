"use client"

import { ArrowUpCircle } from "@deemlol/next-icons";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="h-screen bg-gradient-to-b from-transparent to-[#E8CC83] pb-10">
            <div className="h-full w-full sm:w-2/3 mx-auto px-6 sm:px-0">
                <div className="h-7/8 flex justify-center items-center py-10">
                    <div className="w-full flex flex-col md:grid md:grid-cols-4 gap-12 md:gap-24 items-start">
                        <div className="md:col-span-2 flex flex-col justify-center items-center">
                            <div>
                                <h1 className="antic text-5xl sm:text-6xl md:text-7xl">IF IT WORKS,</h1>
                                <h1 className="antic text-5xl sm:text-6xl md:text-7xl">DON&apos;T TOUCH IT.</h1>
                                <p className="mt-4 tracking-wider text-lg sm:text-xl font-light">If it doesn&apos;t, then <em>definitely</em> don&apos;t.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:contents gap-8">
                            <div className="flex flex-col gap-4">
                                <a className="text-xl" href="#" aria-label="Writing (currently empty)">Writing</a>
                                <a className="text-xl" href="#" aria-label="Art (currently empty)">Art</a>
                            </div>
                            <div className="flex flex-col gap-4">
                                <a className="text-xl" href="mailto:parthivmenon.dev@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email (opens in new tab)">Email</a>
                                <a className="text-xl" href="https://instagram.com/_.parthiv_" target="_blank" rel="noopener noreferrer" aria-label="Instagram (opens in new tab)">Instagram</a>
                                <a className="text-xl" href="https://linkedin.com/in/parthivmenon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:h-1/7 border-t border-[#302E28] pt-8 flex justify-between items-center gap-4">
                    <p>Developed by @theproton</p>
                    <button
                        className="flex gap-2 cursor-pointer group hover:opacity-80 transition-opacity bg-transparent border-none p-0 font-inherit text-inherit"
                        onClick={scrollToTop}
                        aria-label="Back to top"
                    >
                        Back to top
                        <span className="transition-transform duration-300 group-hover:-translate-y-1.5" aria-hidden="true">
                            <ArrowUpCircle />
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    )
}