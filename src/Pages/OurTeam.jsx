import React from 'react'

import HeaderComponent from '../Components/Header'
import TeamComponent from '../Components/team'
import Footer from '../Components/Footer'

export default function OurTeamPage() {
    let textColor = { 'color': '#ae184f' }
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <HeaderComponent />
                </div>
                <div className="row">
                    <p className='text-center h2 fw-bold' style={textColor}>OUR TEAM</p>
                </div>
                <div className="row">
                        <TeamComponent />
                </div>
                <div className="row">
                    <Footer />
                </div>
            </div>
        </>
    )
}
