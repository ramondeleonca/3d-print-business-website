"use client";

import DropZone, { useDropZone } from "@/components/drop-zone";
import Preloader from "@/components/preloader";
import { useEffect } from "react";
import * as motion from "motion/react-client"
import { AnimatePresence } from "motion/react";
import Head from "next/head";

function Home() {
    const dropZone = useDropZone();

    useEffect(() => {
        console.log(dropZone?.isDragging);
    }, [dropZone?.isDragging]);

    return (
        <div className="hero w-screen h-screen">
            {/* Drop Zone ui */}
            <Head>
                <link rel="preload" href="/animations/cube1.lottie" as="fetch" crossOrigin="anonymous" />
            </Head>

            {/* TODO: change this to classes because motion messes it up 😭 */}
            <AnimatePresence>
                {dropZone?.isDragging ? <>
                    <motion.div className="z-50 fixed top-0 left-0 right-0 bottom-0 bg-theme-green bg-opacity-50 flex items-center justify-center" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                        <motion.div className={`w-96 aspect-square transition-all ease-in-back duration-500 delay-500 invert`}>
                            <dotlottie-player src={"/animations/cube1.lottie"} autoplay loop></dotlottie-player>
                        </motion.div>
                    </motion.div>
                </> : null}
            </AnimatePresence>
        </div>
    )
}

export default function Page() {
    return (
        <>
            <Preloader></Preloader>

            <DropZone>
                <Home></Home>
            </DropZone>
        </>
    )
}
