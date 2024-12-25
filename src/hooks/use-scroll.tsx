"use client";

import { useEffect, useState } from "react";

export default function useScroll() {
    const [scroll, setScroll] = useState<{x: number, y: number}>({x: 0, y: 0});
    const update = () => setScroll({x: window.scrollX, y: window.scrollY});
    
    useEffect(() => {
        const init = () => {
            update();
            window.addEventListener("scroll", update);
            return () => window.removeEventListener("scroll", update);
        }

        if (typeof window != undefined) {
            return init();
        } else {
            window.addEventListener("DOMContentLoaded", init);
            return () => window.removeEventListener("DOMContentLoaded", init);
        }
    }, []);

    return scroll;
}