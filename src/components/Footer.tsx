import { ArrowUpCircle } from "@deemlol/next-icons";

export default function Footer() {
    return (
        <footer className="h-screen bg-gradient-to-b from-transparent to-[#E8CC83]">
            <div className="h-full w-2/3 mx-auto">
                <div className="h-7/8 mx-auto flex justify-center items-center">
                    <div className="h-1/4 w-full grid grid-cols-4 gap-24 items-start">
                        <div className="col-span-2 flex flex-col justify-center items-center">
                            <div>
                                <h1 className="antic text-7xl">IF IT WORKS,</h1>
                                <h1 className="antic text-7xl">DON&apos;T TOUCH IT.</h1>
                                <p className="mt-4 tracking-wider text-xl font-light">If it doesn&apos;t, then <em>definitely</em> don&apos;t.</p>
                            </div>
                        </div>
                            <div className="flex flex-col gap-4">
                                <a className="text-xl" href="#">Writing</a>
                                <a className="text-xl" href="#">Art</a>
                            </div>
                            <div className="flex flex-col gap-4">
                                <a className="text-xl" href="#">Email</a>
                                <a className="text-xl" href="#">Instagram</a>
                                <a className="text-xl" href="#">LinkedIn</a>
                            </div>
                    </div>
                </div>
                <div className="border-t h-1/8 flex justify-between items-center">
                    <p>Developed by @theproton</p>
                    <p className="flex gap-2">
                        Back to top
                        <span><ArrowUpCircle /></span>
                    </p>
                </div>
            </div>
        </footer>
    )
}