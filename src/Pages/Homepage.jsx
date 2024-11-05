import React from 'react'
import About from '../Components/About'
import HeaderComponent from '../Components/Header'
import Footer from '../Components/Footer'
import ProgressBar from '../Components/ProgressBar'
export default function Homepage() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <HeaderComponent />
                </div>
                <div className="row">
                    <About />
                </div>
                <div className="row">
                    <ProgressBar />
                </div>
                <div className="row">
                    <Footer />
                </div>
            </div>

        </>
    )
}
