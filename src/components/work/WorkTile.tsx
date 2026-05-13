import { WorkExperience } from "@/types";

interface WorkTileProps extends WorkExperience {
    variant?: "featured" | "compact";
}

export default function WorkTile(props: WorkTileProps) {
    const { variant = "compact" } = props;

    if (variant === "featured") {
        return (
            <div className="aspect-square rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 bg-black/3 flex flex-col justify-between transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/8 cursor-default">
                <div className="hidden sm:flex h-9 w-9 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full bg-black/10 overflow-hidden items-center justify-center shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={props?.logo} alt={`${props?.organization} logo`} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col min-w-0">
                    <h5 className="antic text-base sm:text-lg md:text-xl lg:text-2xl leading-tight">{props?.position}</h5>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg opacity-70 mt-0.5 sm:mt-1 truncate">{props?.organization}</p>
                    <p className="text-[10px] sm:text-xs md:text-sm lg:text-base opacity-50 mt-0.5">{props?.startDate} – {props?.endDate}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex gap-3 sm:gap-4 items-center">
            <div className="h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 shrink-0 rounded-full bg-black/20 overflow-hidden flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={props?.logo} alt={`${props?.organization} logo`} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col min-w-0 flex-1">
                <h6 className="antic text-lg sm:text-xl md:text-2xl truncate">{props?.position}</h6>
                <p className="text-xs sm:text-sm md:text-base opacity-80 truncate">{props?.organization} / {props?.startDate} - {props?.endDate}</p>
            </div>
        </div>
    );
}