export default function Navbar() {
    return (
        <nav className="h-10 mb-2 flex gap-1 sm:gap-2">
            <div className="w-12 sm:w-18 bg-[#302E28] rounded-md shrink-0"></div>
            <div className="flex flex-1 px-3 sm:px-4 bg-[#302E28] rounded-md items-center gap-4 sm:gap-8">
                <a href="" className="text-sm sm:text-base">/writing</a>
                <a href="" className="text-sm sm:text-base">/art</a>
            </div>
        </nav>
    )
}