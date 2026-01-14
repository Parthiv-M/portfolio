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
                                <a className="text-xl" href="#">Writing</a>
                                <a className="text-xl" href="#">Art</a>
                            </div>
                            <div className="flex flex-col gap-4">
                                <a className="text-xl" href="mailto:parthivmenon.dev@gmail.com" target="_blank">Email</a>
                                <a className="text-xl" href="https://instagram.com/_.parthiv_" target="_blank">Instagram</a>
                                <a className="text-xl" href="https://linkedin.com/in/parthivmenon" target="_blank">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:h-1/7 border-t border-[#302E28] pt-8 flex justify-between items-center gap-4">
                    <p>Developed by @theproton</p>
                    <div
                        className="flex gap-2 cursor-pointer group hover:opacity-80 transition-opacity"
                        onClick={scrollToTop}
                    >
                        Back to top
                        <span className="transition-transform duration-300 group-hover:-translate-y-1.5">
                            <ArrowUpCircle />
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}