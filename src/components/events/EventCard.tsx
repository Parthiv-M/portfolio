import { Event } from "@/types";
import { Award } from "@deemlol/next-icons";

export default function EventCard(props: Event) {
    return (
        <div
            style={{ backgroundImage: `url(${props.image || '/hacks/fallback.jpg'})` }}
            className={`relative min-h-148 w-120 bg-center bg-no-repeat bg-cover grayscale rounded-lg`}
        >
            <div className="text-white absolute flex flex-col justify-between p-4 h-full w-full rounded-lg top-0 left-0 bg-gradient-to-tl from-[#302E28] to-[#302E28]/50">
                <div className="w-full flex justify-between">
                    <div>
                        <h3 className="antic font-bold text-2xl sm:text-3xl">{props?.name}</h3>
                        <p className="uppercase font-bold">{props?.role}</p>
                    </div>
                    {props?.isAward && <Award size={24} />}
                </div>
                <div className="min-h-1/3">
                    <p className="text-sm sm:text-base">
                        {props?.description[0]}
                    </p>
                    {props?.description.length == 2 &&
                        <p className="mt-2 text-sm sm:text-base">
                            {props?.description[1]}
                        </p>
                    }
                </div>
            </div>
        </div>
    )
}