import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Navbar from "@/components/nav-bar";
import appConfig from "./app-config";

export const metadata: Metadata = {
  title: appConfig.appName
};

const montFont = localFont({
  src: [
    {
      path: "./fonts/Mont-ExtraLightDEMO.otf",
      weight: "200",
      style: "normal"
    },
    {
      path: "./fonts/Mont-HeavyDEMO.otf",
      weight: "800",
      style: "normal"
    }
  ],
  variable: "--font-mont"
});

const nexaFont = localFont({
  src: [
    {
      path: "./fonts/Nexa-ExtraLight.ttf",
      weight: "200",
      style: "normal"
    },
    {
      path: "./fonts/Nexa-Heavy.ttf",
      weight: "800",
      style: "normal"
    }
  ],
  variable: "--font-nexa"
});

const creatoDisplayFont = localFont({
  src: [
    {
      path: "./fonts/Creato-Display/CreatoDisplay-Thin.otf",
      weight: "100",
      style: "normal"
    },
    {
      path: "./fonts/Creato-Display/CreatoDisplay-ThinItalic.otf",
      weight: "100",
      style: "italic"
    },
    {
      path: "./fonts/Creato-Display/CreatoDisplay-Light.otf",
      weight: "300",
      style: "normal"
    },
    {
      path: "./fonts/Creato-Display/CreatoDisplay-LightItalic.otf",
      weight: "300",
      style: "italic"
    },
    {
      path: "./fonts/Creato-Display/CreatoDisplay-Regular.otf",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/Creato-Display/CreatoDisplay-RegularItalic.otf",
      weight: "400",
      style: "italic"
    },
    {
      path: "./fonts/Creato-Display/CreatoDisplay-Medium.otf",
      weight: "500",
      style: "normal"
    },
    {
      path: "./fonts/Creato-Display/CreatoDisplay-MediumItalic.otf",
      weight: "500",
      style: "italic"
    },
    {
      path: "./fonts/Creato-Display/CreatoDisplay-Bold.otf",
      weight: "700",
      style: "normal"
    },
    {
      path: "./fonts/Creato-Display/CreatoDisplay-BoldItalic.otf",
      weight: "700",
      style: "italic"
    },
    {
      path: "./fonts/Creato-Display/CreatoDisplay-ExtraBold.otf",
      weight: "800",
      style: "normal"
    },
    {
      path: "./fonts/Creato-Display/CreatoDisplay-ExtraBoldItalic.otf",
      weight: "800",
      style: "italic"
    },
    {
      path: "./fonts/Creato-Display/CreatoDisplay-Black.otf",
      weight: "900",
      style: "normal"
    },
    {
      path: "./fonts/Creato-Display/CreatoDisplay-BlackItalic.otf",
      weight: "900",
      style: "italic"
    }
  ],
  variable: "--font-creato-display"
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${montFont.variable} ${nexaFont.variable} ${creatoDisplayFont.variable} antialiased bg-theme-bg`}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
