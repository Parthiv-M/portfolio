import { ArrowLeft } from "@deemlol/next-icons";
import { usePortfolioData } from "@/hooks/usePortfolioData";

export default function Bio() {
    const data = usePortfolioData();
    return (
        <div className="h-full p-6 sm:p-10 flex flex-col justify-between">
            <div>
                <h1 className="antic text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight">{data.name.split(" ")[0]}</h1>
                <h1 className="antic text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight">{data.name.split(" ")[1]}</h1>
                <div className="mt-6 sm:mt-8">
                    <h4 className="text-lg sm:text-xl">Software Engineer /</h4>
                    <h4 className="text-lg sm:text-xl">Open Source Enthusiast</h4>
                </div>
                <div className="mt-6 sm:mt-8">
                    <p className="text-base sm:text-lg md:text-md">
                        Between finding the next best alliteration and fixing the syntactical
                        nitty gritties of my latest code lies the crux of my personality.
                    </p>
                </div>
            </div>
            <div className="mt-20">
                <div className="flex flex-col gap-2 font-mono text-sm sm:text-base">
                    {/* Work */}
                    <div className="flex gap-3 items-baseline w-fit">
                        <span className="text-[#8D8A83] opacity-60">[f2a1c4b]</span>
                        <span className="text-[#302E28]/80">work: Prev. SWE @ WMF</span>
                    </div>

                    {/* Internships */}
                    <div className="flex gap-3 items-baseline w-fit">
                        <span className="text-[#8D8A83] opacity-60">[7b92d6e]</span>
                        <span className="text-[#302E28]/80">intern: MITACS @ Lakehead</span>
                    </div>

                    {/* Hackathons */}
                    <div className="flex gap-3 items-baseline w-fit">
                        <span className="text-[#8D8A83] opacity-60">[d0c5a3b]</span>
                        <span className="text-[#302E28]/80">hack: Winner @ Hack NUACM</span>
                    </div>

                    {/* Projects */}
                    <div className="flex gap-3 items-baseline w-fit">
                        <span className="text-[#8D8A83] opacity-60">[3e811f9]</span>
                        <span className="text-[#302E28]/80">project: Katalog Goodreads stats</span>
                    </div>
                </div>
            </div>
        </div>
    )
}