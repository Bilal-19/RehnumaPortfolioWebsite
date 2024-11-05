import HeaderComponent from '../Components/Header'
// import firstSessionImage from '../images/firstSession.png'
// import secondSessionImage from '../images/secondSession.jpg'
// import thirdSessionImage from "../images/thirdSession.jpg"
// import LastMeetupImage from "../images/LastMeetup.jpg"
import Footer from '../Components/Footer'
import "../App.css"

export default function ProgressPage() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <HeaderComponent />
                </div>

                <div className="row">
                    <p className='text-center h2 fw-bold' style={{ color: '#ae184f' }}>OUR PROGRESS</p>
                </div>


                <div className="row">
                    <div className="col-sm-6 col-md-10 mx-auto">
                        <div id="carouselExampleCaptions" className="carousel slide">

                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            </div>

                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                    <img src="./images/firstSession.PNG" className="d-block w-100 h-50 img-fluid" alt="..." />
                                </div>

                                <div className="carousel-item">
                                    <img src="./images/secondSession.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="./images/thirdSession.jpg" className="d-block w-100" alt="..." />
                                </div>

                                <div className="carousel-item">
                                    <img src="./images/LastMeetup.jpg" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <Footer />
                </div>

            </div>
        </>
    )
}
