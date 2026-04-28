import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/core/home - old/Footer";

export const metadata: Metadata = {
    title: "DP World — We Make Trade Flow",
    description:
        "DP World is a leading enabler of global trade. We operate across 78 marine and inland terminals in 40+ countries.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Navbar/>
                {children}</body>
                <Footer/>
        </html>
    );
}
