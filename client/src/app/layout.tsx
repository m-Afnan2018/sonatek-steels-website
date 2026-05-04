import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pilatWide = localFont({
    src: [
        { path: "../../public/fonts/PilatWide-Thin.ttf", weight: "100", style: "normal" },
        { path: "../../public/fonts/PilatWide-Light.ttf", weight: "300", style: "normal" },
        { path: "../../public/fonts/PilatWide-Book.ttf", weight: "350", style: "normal" },
        { path: "../../public/fonts/PilatWide-Regular.ttf", weight: "400", style: "normal" },
        { path: "../../public/fonts/PilatWide-DemiBold.ttf", weight: "600", style: "normal" },
        { path: "../../public/fonts/PilatWide-Bold.ttf", weight: "700", style: "normal" },
        { path: "../../public/fonts/PilatWide-Heavy.ttf", weight: "800", style: "normal" },
        { path: "../../public/fonts/PilatWide-Black.ttf", weight: "900", style: "normal" },
    ],
    variable: "--font-pilat-wide",
});

const pilatNarrow = localFont({
    src: [
        { path: "../../public/fonts/PilatNarrow-Thin.ttf", weight: "100", style: "normal" },
        { path: "../../public/fonts/PilatNarrow-Light.ttf", weight: "300", style: "normal" },
        { path: "../../public/fonts/PilatNarrow-Regular.ttf", weight: "400", style: "normal" },
        { path: "../../public/fonts/PilatNarrow-DemiBold.ttf", weight: "600", style: "normal" },
    ],
    variable: "--font-pilat-narrow",
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
        <html lang="en" suppressHydrationWarning>
            <body className={`${pilatWide.variable} ${pilatNarrow.variable}`}>
                {children}
            </body>
        </html>
    );
}
