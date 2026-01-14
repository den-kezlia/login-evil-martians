import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const w95font = localFont({
    src: "../../public/fonts/w95font.woff2",
    variable: "--font-w95",
    weight: "400"
})

const w95fontBold = localFont({
    src: "../../public/fonts/w95font-bold.woff2",
    variable: "--font-w95-bold",
    weight: "700"
})

export const metadata: Metadata = {
    title: "Login",
    description: "Login to Evil Martians team"
}

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="en">
            <body className={`${w95font.variable} ${w95fontBold.variable}`}>
                {children}
            </body>
        </html>
    )
}
