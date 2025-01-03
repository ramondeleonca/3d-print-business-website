"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import useScroll from "@/hooks/use-scroll";
import { scrollSmoothToTarget } from "@/lib/utils";

export default function Navbar() {
    const { y: scrollY } = useScroll();
    const threshold = 20;

    return (
        <nav className="fixed z-[1000] top-0 left-0 p-4 px-4 w-full">
            <div className={`nav-content flex items-center justify-between relative w-full h-12 rounded-xl px-4 py-2 overflow-hidden transition-all duration-300 ease-out-cubic bg-white ${scrollY > threshold ? "bg-opacity-100 drop-shadow-md" : "bg-opacity-0 drop-shadow-none"}`}>
                <div className="h-full aspect-square relative">
                    <Image src="/assets/ccb.svg" alt="" fill className="object-contain relative"></Image>
                </div>
                {/* <div>b</div> */}
                <div>
                    <Button asChild className={`transition-all duration-200 ease-in-out-sine ${scrollY < threshold ? "opacity-0 blur-sm" : ""}`}>
                        <Link href={"#cotiza"} onClick={scrollSmoothToTarget}>Cotiza Ahora</Link>
                    </Button>
                </div>
            </div>
        </nav>
    )
}