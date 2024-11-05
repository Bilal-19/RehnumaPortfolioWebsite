import React from 'react'


export default function About() {
    let textColor = { 'color': '#ae184f' }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <p className='fw-bold h2 fw-italic text-center mb-0' style={textColor}>REHNUMA</p>
                        <i className='fw-bold d-block text-center mt-0'>"HAR QADAM SEHAT KI JANIB"</i>
                    </div>

                    <div className="col-md-8 mx-auto mt-4">
                        <p className='text-start'>
                            <b>Rehnuma - Har Qadam Sehat Ki Janib</b> is the mission of providing awareness related to Menstrual Hygiene in underprivileged girls and women of Karachi.
                            It was established on <b>September, 2023</b> and conducted sessions on <b>12</b> different schools in <b>6</b> different areas and provided guidance to <b>495</b> students.

                            <br />
                            Ending the stigma surrounding menstruation and embracing empowerment is a vital mission for RAHNUMA, a dedicated group of 11 individuals committed to positive change. In our pursuit,
                            we set out to transform the narrative, fostering a respectful and empowering attitude towards menstruation.
                        </p>

                    </div>
                </div>
            </div >
        </>
    )
}
