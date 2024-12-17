"use client";

import Preloader from "@/components/preloader";
import Image from "next/image";
import Lenis from "@/components/lenis";
import useLoaded from "@/hooks/use-loaded";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import appConfig from "./app-config";

function Home() {
    return (
        <Lenis>
            {/* HERO */}
            <div className="hero-wrapper w-screen h-screen p-8 pt-20">
                <div className="w-full h-full rounded-2xl relative overflow-hidden drop-shadow-lg">
                    {/* Background */}
                    <div className="absolute image-container w-full h-full">
                        <div className="absolute top-0 left-0 right-0 bottom-0 z-20 bg-black bg-opacity-50"></div>
                        <Image className="z-10 object-cover" src="/images/photo2-hero.webp" alt="Impresora 3d" fill></Image>
                    </div>

                    {/* Content */}
                    <div className="content max-sm:w-full w-2/3 md:w-1/2 h-full absolute z-20 py-24 px-10 md:px-20">
                        <h1 className="text-white max-sm:text-5xl text-7xl md:text-9xl w-full whitespace-pre-wrap font-nexa font-black">{appConfig.appName}</h1>
                        <p className="text-xl md:text-3xl text-white font-creato-display font-medium mt-4 max-sm:mt-6">{appConfig.description}</p>
                        <Button asChild variant="outline" className="mt-2 max-sm:mt-4" size="lg">
                            <Link href="/#cotiza">Cotiza con nosotros</Link>
                        </Button>
                    </div>
                </div>
            </div>

            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cumque repudiandae labore neque deleniti animi illo aperiam itaque ex obcaecati quia assumenda doloremque, totam ad iure distinctio magnam id ipsa odit et facilis voluptas blanditiis expedita ratione. Quibusdam maiores expedita sit itaque minima molestias maxime tempore rerum, atque dolorum dignissimos.</h1>
        </Lenis>
    )
}

export default function Page() {
    return (
        <>
            <Preloader></Preloader>
            <Home></Home>
        </>
    )
}
