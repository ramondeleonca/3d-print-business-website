"use client";

import Preloader from "@/components/preloader";
import Image from "next/image";
import Lenis from "@/components/lenis";
import useLoaded from "@/hooks/use-loaded";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import appConfig from "./app-config";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Head from "next/head";
import * as motion from "motion/react-client";
import { Instagram, Mail } from "lucide-react";
import { scrollSmoothToTarget } from "@/lib/utils";

function Home() {
    return (
        <>
            <Head>
                <link rel="preload" href="/images/photo2-hero.webp" as="image" />
                <link rel="preload" href="/images/photo5.jpg" as="image" />
                <link rel="preload" href="/images/Assembly.JPG" as="image" />
                <link rel="preload" href="/images/viewport.png" as="image" />
                <link rel="preload" href="/images/desarrollo1.webp" as="image" />
                <link rel="preload" href="/images/benchies.JPG" as="image" />
            </Head>

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
                            <h1 className="text-white max-sm:text-5xl text-7xl md:text-9xl w-full flex flex-wrap font-mont font-black">
                                {appConfig.appName.split(" ").map((word, index) => <span key={word}>{word}&nbsp;</span>)}
                            </h1>
                            <p className="text-xl md:text-3xl text-white font-creato-display font-medium mt-4 max-sm:mt-6">{appConfig.description}</p>
                            <Button asChild variant="outline" className="mt-2 max-sm:mt-4" size="lg">
                                <Link href="#cotiza" onClick={scrollSmoothToTarget}>Cotiza con nosotros</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* WRAPPER */}
                <div className="px-8 pb-8">
                    {/* OUR SERVICES SECTION */}
                    <section className="mt-4">
                        {/* HEADER */}
                        <header className="w-full flex justify-center mb-4">
                            <h2 className="font-nexa font-black text-5xl text-center">Nuestros servicios</h2>
                        </header>
                        
                        {/* CONTENT */}
                        <div className="w-full flex items-stretch justify-evenly flex-wrap">
                            <Card className="m-2 basis-0 flex-grow flex flex-col max-w-96 min-w-64 drop-shadow-lg">
                                <CardHeader>
                                    <CardTitle>Impresión 3D</CardTitle>
                                    <CardDescription>Manufactura de modelos 3D por impresión FDM</CardDescription>
                                </CardHeader>
                                <CardContent className="mt-auto">
                                    <div className="w-full relative aspect-square rounded-xl overflow-hidden">
                                        <Image src="/images/photo5.jpg" alt="" fill className="object-cover object-center"></Image>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex flex-col">
                                    <Button asChild className="w-full">
                                        <Link href="#cotiza" onClick={scrollSmoothToTarget}><b>Cotiza ahora</b></Link>
                                    </Button>
                                    <p className="text-xs opacity-60 mt-1">¡Fabriquemos tu modelo 3D!</p>
                                </CardFooter>
                            </Card>

                            <Card className="m-2 basis-0 flex-grow flex flex-col max-w-96 min-w-64 drop-shadow-lg">
                                <CardHeader>
                                    <CardTitle>Diseño y modelado 3D</CardTitle>
                                    <CardDescription>Diseñamos el modelo que tu necesites, ya sea para fines ilustrativos o un modelo físico</CardDescription>
                                </CardHeader>
                                <CardContent className="mt-auto">
                                    <div className="w-full relative aspect-square rounded-xl overflow-hidden">
                                        <Image src="/images/Assembly.JPG" alt="" fill className="object-cover object-center"></Image>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex flex-col">
                                    <Button asChild className="w-full">
                                        <Link href="#contacto" onClick={scrollSmoothToTarget}>Contáctanos</Link>
                                    </Button>
                                    <p className="text-xs opacity-60 mt-1">Platiquemos sobre tu modelo</p>
                                </CardFooter>
                            </Card>

                            <Card className="m-2 basis-0 flex-grow flex flex-col max-w-96 min-w-64 drop-shadow-lg">
                                <CardHeader>
                                    <CardTitle>Renders</CardTitle>
                                    <CardDescription>¡Ya sea que tengas tu modelo 3D o necesites uno, te mostramos como se verá tu proyecto!</CardDescription>
                                </CardHeader>
                                <CardContent className="mt-auto">
                                    <div className="w-full relative aspect-square rounded-xl overflow-hidden">
                                        <Image src="/images/viewport.png" alt="" fill className="object-cover object-center"></Image>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex flex-col">
                                    <Button asChild className="w-full">
                                        <Link href="#contacto" onClick={scrollSmoothToTarget}>Contáctanos</Link>
                                    </Button>
                                    <p className="text-xs opacity-60 mt-1">¡Muestranos tu idea!</p>
                                </CardFooter>
                            </Card>

                            <Card className="m-2 basis-0 flex-grow flex flex-col max-w-96 min-w-64 drop-shadow-lg">
                                <CardHeader>
                                    <CardTitle>Desarrollo de Proyectos</CardTitle>
                                    <CardDescription>Cuéntanos tu idea y harémos tu proyecto de electrónica, programación o mecánica</CardDescription>
                                </CardHeader>
                                <CardContent className="mt-auto">
                                    <div className="w-full relative aspect-square rounded-xl overflow-hidden">
                                        <Image src="/images/desarrollo1.webp" alt="" fill className="object-cover object-center"></Image>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex flex-col">
                                    <Button asChild className="w-full">
                                        <Link href="#contacto" onClick={scrollSmoothToTarget}>Contáctanos</Link>
                                    </Button>
                                    <p className="text-xs opacity-60 mt-1">¡Queremos saber más sobre tu proyecto!</p>
                                </CardFooter>
                            </Card>
                        </div>
                    </section>

                    <section className="w-full h-[75vh] mt-4 rounded-xl overflow-hidden drop-shadow-xl">
                        <div className="w-full h-full relative">
                            <div className="top-0 left-0 right-0 bottom-0 absolute z-30 flex justify-between flex-col items-center">
                                <div className="_top mt-4">
                                    <h2 className="flex flex-wrap justify-center text-center font-nexa font-black text-6xl text-white px-4">Conoce Nuestra</h2>
                                </div>

                                <div className="_bottom mb-10">
                                    {/* <motion.h2 initial={{ translateY: 50, opacity: 0, scale: 0.5 }} whileInView={{ translateY: 0, opacity: 1, scale: 1 }} className="flex flex-wrap justify-center text-center font-nexa font-black text-7xl mt-4 text-white max-sm:text-5xl max-xs:text-4xl px-4">Variedad de materiales</motion.h2> */}
                                    <h2 className="flex flex-wrap justify-center text-center font-nexa font-black text-7xl mt-4 text-white max-sm:text-5xl max-xs:text-4xl px-4">Variedad de materiales</h2>
                                    <p className="text-white flex flex-wrap justify-center text-center font-creato-display font-normal px-8">Contamos con una variedad de materiales con diferentes propiedades estéticas y mecánicas</p>
                                    {/* <div className="w-full flex justify-center">
                                        <Button asChild variant="outline">
                                            <Link href="/catalogo-materiales">¡Ve nuestro catálogo!</Link>
                                        </Button>
                                    </div> */}
                                </div>
                            </div>
                            <div className="absolute z-20 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-25"></div>
                            <Image src="/images/benchies.JPG" alt="Variedad de filamentos" fill className="object-cover"></Image>
                        </div>
                    </section>

                    <section className="mt-4 w-full" id="contacto">
                        {/* HEADER */}
                        <header className="w-full flex justify-center mb-4">
                            <h2 className="font-nexa font-black text-5xl text-center">¿List@ para crear?</h2>
                        </header>

                        <div className="w-full">
                            <h3 className="text-xl font-creato-display text-center">Contáctanos</h3>
                            <div className="w-full flex justify-evenly flex-wrap gap-4">
                                <div className="flex gap-2 items-center">
                                    <Mail></Mail>
                                    <div className="flex flex-col items-left">
                                        <Link href={`mailto:${appConfig.contact.email}`} target="_blank">
                                            {appConfig.contact.email}
                                        </Link>

                                        <Link href={`mailto:${appConfig.contact.altEmail}`} target="_blank">
                                            {appConfig.contact.altEmail}
                                        </Link>
                                    </div>
                                </div>

                                <Link href={`https://www.instagram.com/${appConfig.contact.instagram}`} target="_blank" className="flex gap-2 items-center">
                                    <Instagram></Instagram>
                                    {appConfig.contact.instagram}
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section>
                        
                    </section>
                </div>
            </Lenis>
        </>
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
