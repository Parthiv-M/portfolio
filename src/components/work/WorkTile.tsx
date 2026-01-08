export default function WorkTile({
    logo
}: {
    logo: string
}) {
    return (
        <div className="flex gap-4 items-center">
            <div className="h-10 w-10 sm:h-11 sm:w-11 shrink-0 rounded-full bg-black/20 overflow-hidden flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo} alt="Organization Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col min-w-0">
                <h6 className="antic text-xl sm:text-2xl truncate">Position Name</h6>
                <p className="text-sm sm:text-base opacity-80 truncate">Location or Organization / From date - To date</p>
            </div>
        </div>
    )
}