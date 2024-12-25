"use client";

import { useMemo } from "react";
// import '@aarsteinmedia/dotlottie-player-light';
import Head from "next/head";
import useLoaded from "@/hooks/use-loaded";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const loaderAnimations: Array<{ src: string }> = [
    // { src: "/animations/cube1.lottie" },
    { src: "/animations/cube2.lottie" },
    { src: "/animations/cube3.lottie" },
    { src: "/animations/cube4.lottie" },
    { src: "/animations/cube5.lottie" }
] as const;

export default function Preloader() {
    const loaded = useLoaded();
    const loaderAnimation = useMemo(() => loaderAnimations[Math.floor(Math.random() * loaderAnimations.length)], []);

    return (
        <>
            <Head>
                <link rel="preload" href={loaderAnimation.src} as="fetch" crossOrigin="anonymous" />
            </Head>
            <div className={`bg-foreground w-screen h-screen fixed top-0 left-0 right-0 bottom-0 z-[1000000] flex items-center justify-center transition-all ease-in-out-cubic duration-1000 delay-500 ${loaded ? "opacity-0 pointer-events-none" : "pointer-events-auto"}`}>
                <div className={`w-96 aspect-square transition-all ease-in-back duration-500 delay-500 ${loaded ? "scale-0" : ""}`}>
                    {/* <dotlottie-player src={loaderAnimation.src} autoplay loop speed={0.75}></dotlottie-player> */}
                    <DotLottieReact src={loaderAnimation.src} autoplay loop speed={0.75}></DotLottieReact>
                </div>
            </div>
        </>
    )
}