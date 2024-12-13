import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const handler = NextAuth({
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(creds) {
                if (!creds) return Promise.resolve(null);
                if (creds.username == process.env.ADMIN_USERNAME && creds.password == process.env.ADMIN_PASSWORD) {
                    return Promise.resolve({ id: "1", name: "Admin" });
                } else {
                    return Promise.resolve(null);
                }
            },
        })
    ],
    session: {
        strategy: "jwt"
    }
});