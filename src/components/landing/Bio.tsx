import { usePortfolioData } from "@/hooks/usePortfolioData";

export default function Bio() {
    const data = usePortfolioData();
    return (
        <div className="h-full p-10 flex flex-col justify-between">
            <div>
                <h1 className="antic text-8xl">{data.name.split(" ")[0]}</h1>
                <h1 className="antic text-8xl">{data.name.split(" ")[1]}</h1>
                <div className="mt-8">
                    <h4 className="text-xl">Software Engineer /</h4>
                    <h4 className="text-xl">Open Source Enthusiast</h4>
                </div>
                <div className="mt-8">
                    <p className="text-xl">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. 
                        Sit amet consectetur adipiscing elit quisque faucibus ex. 
                        Adipiscing elit quisque faucibus ex sapien vitae pellentesque.
                    </p>
                </div>
            </div>
            <div id="landing-links" className="flex flex-col gap-5 text-xl">
                <a href="#">
                    Experience
                </a>
                <a href="#">Projects</a>
                <a href="#">Hackathons</a>
                <a href="#">Other stuff</a>
            </div>
        </div>
    )
}