import Header from "@/components/Header"
import { getSession } from "@/db/server"
import "@/styles/globals.scss"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Split",
    description: "Split",
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await getSession()
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header session={session} />
                <main>{children}</main>
            </body>
        </html>
    )
}
