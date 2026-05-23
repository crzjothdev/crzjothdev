import AppBar from "../../components/AppBar"
import Footer from "../../components/Footer"

import "../../styles/globals.next.css"

export default function Layout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <AppBar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}