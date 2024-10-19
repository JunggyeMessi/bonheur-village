import type { Metadata } from "next";
import "./globals.css";
import { Black_Han_Sans } from "next/font/google";
import localFont from "next/font/local";

export const metadata: Metadata = {
    title: "Bonheur Village",
    description: "Welcome to Bonheur Village",
};

export const blackHanSans = Black_Han_Sans({
    weight: "400",
    display: "swap",
    style: "normal",
    subsets: ["latin"],
    preload: true,
});

export const kimJungChulMyungjo = localFont({
    src: [
        {
            path: "../assets/fonts/KimjungchulMyungjo-Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../assets/fonts/KimjungchulMyungjo-Light.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../assets/fonts/KimjungchulMyungjo-Bold.otf",
            weight: "700",
            style: "normal",
        },
    ],
});

export const sCoreDream = localFont({
    src: [
        {
            path: "../assets/fonts/SCDream1.otf",
            weight: "100",
            style: "normal",
        },
        {
            path: "../assets/fonts/SCDream2.otf",
            weight: "200",
            style: "normal",
        },
        {
            path: "../assets/fonts/SCDream3.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../assets/fonts/SCDream4.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../assets/fonts/SCDream5.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../assets/fonts/SCDream6.otf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../assets/fonts/SCDream7.otf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../assets/fonts/SCDream8.otf",
            weight: "800",
            style: "normal",
        },
        {
            path: "../assets/fonts/SCDream9.otf",
            weight: "900",
            style: "normal",
        },
    ],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body className={`antialiased`}>{children}</body>
        </html>
    );
}
