"use client";

import Link from "next/link";

export default function Admin() {
    // Admin page
    return (
        <div className="p-4">

            <h1 className="text-4xl mb-4">Admin page index</h1>
            <div>
                <h2>Admin pages</h2>
                <Link href={"/admin/quoter"}>Quoter</Link>
            </div>
        </div>
    )
}