import type { Metadata } from "next";
import localFont from "next/font/local";
import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-barlow",
});

const pilatWide = localFont({
    src: [
        { path: "../../public/fonts/PilatWide-Thin.ttf", weight: "100", style: "normal" },
        { path: "../../public/fonts/PilatWide-Light.ttf", weight: "300", style: "normal" },
        { path: "../../public/fonts/PilatWide-Book.ttf", weight: "350", style: "normal" },
        { path: "../../public/fonts/Pilat-Wide-Regular.woff", weight: "400", style: "normal" },
        { path: "../../public/fonts/Pilat-Wide-Demi.woff", weight: "600", style: "normal" },
        { path: "../../public/fonts/Pilat-Wide-Bold.woff2", weight: "700", style: "normal" },
        { path: "../../public/fonts/PilatWide-Heavy.ttf", weight: "800", style: "normal" },
        { path: "../../public/fonts/PilatWide-Black.ttf", weight: "900", style: "normal" },
    ],
    variable: "--font-pilat-wide",
    display: "swap",
});

const pilatNarrow = localFont({
    src: [
        { path: "../../public/fonts/Pilat-Light.woff2", weight: "300" },
        { path: "../../public/fonts/Pilat-Regular.woff2", weight: "400" },
    ],
    variable: "--font-pilat-narrow",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Sonatek Steels",
    description:
        "Sonatek Steels is a leading producer of high-quality steel products. We operate across 78 marine and inland terminals in 40+ countries.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${pilatWide.variable} ${pilatNarrow.variable} ${barlow.variable}`}
            suppressHydrationWarning
        >
            <body>
                {children}
            </body>
        </html>
    );
}
