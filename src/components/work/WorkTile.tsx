export default function WorkTile() {
    return (
        <div className="grid grid-cols-12 gap-3">
            <div className="h-11 w-11 my-auto rounded-full bg-black/20">
                {/* insert image here */}
            </div>
            <div className="px-1 col-span-11 flex flex-col">
                <h6 className="antic text-2xl">Position Name</h6>
                <p>Location or Organization / From date - To date</p>
            </div>
        </div>
    )
}