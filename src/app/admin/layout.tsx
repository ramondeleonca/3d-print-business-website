"use client"

import { SessionProvider, useSession } from "next-auth/react";
import React from "react";

function ProtectedWrapper(props: { children: React.ReactNode }) {
    // Get the session object
    const session = useSession({ required: true});

    // Redirect to login page if user is not logged in
    if (session.status == "loading") return <h1>Loading...</h1>

    // Admin page
    return props.children;
}

export default function AdminLayout(props: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <ProtectedWrapper>
                {props.children}
            </ProtectedWrapper>
        </SessionProvider>
    )
}