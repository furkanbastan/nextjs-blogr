import { Poppins } from "next/font/google";

import "@/styles/reset.css";
import "@/styles/global.css";
import { Header } from "@/components/header";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
    title: "NEXTJS | BLOGR",
    description: "A fullstack application.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
