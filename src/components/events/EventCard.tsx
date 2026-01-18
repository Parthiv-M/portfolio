import { Event } from "@/types";
import { Award } from "@deemlol/next-icons";

export default function EventCard(props: Event) {
    return (
        <div
            style={{ backgroundImage: `url(${props.image || '/hacks/fallback.jpg'})` }}
            className={`group relative min-h-148 w-120 bg-center bg-no-repeat bg-cover grayscale transition-all duration-500 hover:grayscale-0 rounded-lg overflow-hidden`}
        >
            <div className="text-white absolute flex flex-col justify-between p-6 h-full w-full rounded-lg top-0 left-0 bg-gradient-to-t from-[#302E28] via-[#302E28]/80 to-transparent">
                <div className="w-full flex justify-between">
                    <div>
                        <h3 className="antic font-bold text-2xl sm:text-3xl">{props?.name}</h3>
                        <p className="uppercase font-bold text-sm text-neutral-300">{props?.role}</p>
                    </div>
                    {props?.isAward && <Award size={24} />}
                </div>

                <div className="mt-auto transition-all duration-700 ease-in-out max-h-24 group-hover:max-h-96 overflow-hidden">
                    <p className="text-sm sm:text-base whitespace-pre-line line-clamp-4 group-hover:line-clamp-none transition-all duration-700">
                        {props.description.join("\n\n")}
                    </p>
                </div>
            </div>
        </div>
    )
}