"use client";

import { useWindowScroll } from "react-use";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
    const { y: scrollY } = useWindowScroll();

    return (
        <nav className="fixed z-[1000] top-0 left-0 p-4 w-full">
            <div className={`nav-content flex items-center justify-between relative w-full h-12 rounded-xl px-4 transition-all duration-300 ease-out-cubic bg-white ${scrollY > 10 ? "bg-opacity-100 drop-shadow-md" : "bg-opacity-0 drop-shadow-none"}`}>
                <div>a</div>
                <div>b</div>
                <div>
                    <Button asChild>
                        <Link href={"/#cotiza"}>Cotiza con nosotros</Link>
                    </Button>
                </div>
            </div>
        </nav>
    )
}