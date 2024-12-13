"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function Quote() {
    useParams();

    useEffect(() => {
        window.print();
        window.close();
    }, []);

    return (
        <h1>Quote</h1>
    )
}