import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function HeaderComponent() {

    return (
        <>
            <nav className="navbar navbar-expand-lg text-pink shadow mb-3 bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light fw-bold mx-3" to='/'>
                        <img src="./images/logo.png" alt="" height={"50px"} />
                    </Link>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link text-pink navigation-link" aria-current="page" to='/mission'>MISSION</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-pink navigation-link" aria-current="page" to='/team'>OUR TEAM</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-pink navigation-link" aria-current="page" to='/progress'>PROGRESS</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
