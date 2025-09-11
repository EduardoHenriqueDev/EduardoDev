import Navbar from './Navbar'
import { ReactNode } from 'react'
import '../styles/Layout.css'
import '../styles/Socials.css'

type LayoutProps = {
    children: ReactNode
}

function Layout({ children }: LayoutProps) {
    return (
        <div className="layout">
            <Navbar />
            <main className="content">{children}</main>
        </div>
    )
}

export default Layout
