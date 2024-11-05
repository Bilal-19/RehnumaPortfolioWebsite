import React from 'react'
import HeaderComponent from '../Components/Header'
import Footer from '../Components/Footer'


export default function MissionPage() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <HeaderComponent />
                </div>

                <div className="row">
                    <p className='fw-bold text-center h2 text-pink'>OUR MISSION</p>
                </div>

                <div className="row">
                    <div className="col-md-9 mx-auto">
                        <p className='text-start'>
                            The problem that we've identified is the lack of awareness about menstrual hygiene in underprivileged
                            women, ultimately leading them to suffer from infections like UTIs, & gradual deterioration of their
                            fertility health.
                        </p>
                        <h5 className='text-pink'>PROBLEM:</h5>
                        <p>
                            Lack of awareness about menstrual hygiene in underprivileged women, and lack of basic
                            knowledge about menstruation in girls about to hit puberty in these areas. Providing them awareness on
                            how to manage pain, what to eat, how to take care of themselves and how they can save themselves
                            from rashes or allergies.
                        </p>

                        <h5 className='text-pink'>SOLUTION:</h5>
                        <p>
                            Providing them with manufactured pads, teaching them how to use it and teaching these
                            women how to make low-cost sanitary pads, by only using 3 raw materials; cotton, gauze & tape. Will
                            also teach them to market and sell them to other women in their communities. Educating younger girls
                            about menstruation, its does & donts, pain management & infection prevention techniques.

                        </p>

                        <h5 className='text-pink'>OUTCOME:</h5>
                        <p>
                            Better female health conditions in underprivileged area, breaking of a taboo surrounding the
                            menstruation concept & a business setup for women in their community
                        </p>
                    </div>
                </div>

                <div className="row">
                    <Footer />
                </div>
            </div>

        </>
    )
}
