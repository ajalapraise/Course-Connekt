import React from 'react'
import './mainlayout.css'
import NavBar from '../NavBar/NavBar'
import Footer from '../footer/Footer'

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className='mainlayout'>
            <NavBar />
            <main className='main'>
                {children}
            </main>

            <Footer />




        </div>
    )
}

export default MainLayout