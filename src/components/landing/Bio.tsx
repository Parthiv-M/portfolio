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
            <div id="landing-links" className="mt-10 md:mt-0 flex flex-col gap-5 text-xl">
                <a href="#" className="group flex gap-2 items-center">
                    <span>Experience</span><span className="hidden group-hover:block"><ArrowLeft size={24} /></span>
                </a>
                <a href="#" className="group flex gap-2 items-center">
                    <span>Projects</span><span className="hidden group-hover:block"><ArrowLeft size={24} /></span>
                </a>
                <a href="#" className="group flex gap-2 items-center">
                    <span>Hackathons</span><span className="hidden group-hover:block"><ArrowLeft size={24} /></span>
                </a>
                <a href="#" className="group flex gap-2 items-center">
                    <span>Other stuff</span><span className="hidden group-hover:block"><ArrowLeft size={24} /></span>
                </a>
            </div>
        </div>
    )
}