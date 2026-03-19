export default function Navbar() {
    return (
        <nav className="h-10 mb-2 flex gap-1 sm:gap-2">
            <a href="/" aria-label="Home" className="w-12 sm:w-18 rounded-md shrink-0">
                <img src="/logo.svg" alt="Parthiv Menon" className="invert w-full h-full pointer-events-none" />
            </a>
            <div className="flex flex-1 px-3 sm:px-4 bg-[#302E28] rounded-md items-center gap-4 sm:gap-8">
                <a href="/writing" className="text-sm sm:text-base" aria-label="Writing section">/writing</a>
                <a href="#" className="text-sm sm:text-base" aria-label="Art section (currently empty)">/art</a>
            </div>
        </nav>
    )
}