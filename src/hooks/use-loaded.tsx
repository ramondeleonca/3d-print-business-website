"use client";

import { useEffect, useState } from "react";

export default function useLoaded() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (typeof document != undefined && document.readyState == "complete") {
            setLoaded(true);
        } else {
            const cb = () => setLoaded(true);
            window.addEventListener("load", cb);
            return () => window.removeEventListener("load", cb);
        }
    }, []);

    return loaded;
}