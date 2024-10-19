import { Black_Han_Sans } from "next/font/google";
import localFont from "next/font/local";

export const blackHanSans = Black_Han_Sans({
    weight: "400",
    subsets: ["latin"],
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