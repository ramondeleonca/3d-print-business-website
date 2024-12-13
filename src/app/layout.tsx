import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Mexicreadores"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-theme-bg`}>
        {children}
      </body>
    </html>
  );
}
