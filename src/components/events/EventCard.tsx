import { Award } from "@deemlol/next-icons";

export default function EventCard({
    isAward=false
}: {
    isAward?: boolean
}) {
    return (
        <div className={`relative min-h-148 w-120 bg-[url('/ppixel.png')] bg-center bg-no-repeat bg-contain rounded-lg`}>
            <div className="text-white absolute flex flex-col justify-between p-4 h-full w-full rounded-lg top-0 left-0 bg-gradient-to-t from-black/90 to-black/20">
                <div className="w-full flex justify-between">
                    <div>
                        <h3 className="antic text-3xl">Event name</h3>
                        <p className="uppercase font-bold">Position / Other things</p>
                    </div>
                    {isAward && <Award size={24} />}
                </div>
                <div className="min-h-1/3">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus 
                        ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus 
                        duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus 
                        fringilla lacus nec metus bibendum egestas. 
                    </p>
                    <p className="mt-2">
                        Iaculis massa nisl malesuada 
                        lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti 
                        sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                    </p>
                </div>
            </div>
        </div>
    )
}