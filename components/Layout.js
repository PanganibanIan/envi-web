import React from "react"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout(props) {
    const {children} = props
    return (
        <div className='flex flex-col min-h-screen relative bg-lightBG text-textColor'>
        <Header/>
        <main className="flex-1 flex flex-col">
            {children}
        </main>
        <Footer/>
        </div>
    )
}