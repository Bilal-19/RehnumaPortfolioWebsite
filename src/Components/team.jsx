import React from 'react'
import { teamDetails } from '../Databases/TeamData'
import { Link } from 'react-router-dom'

export default function TeamComponent() {
    let textColor = { 'color': '#ae184f' }
    return (
        <>
            <div className="container-fluid">


                <div className="row">
                    {teamDetails.map((item) =>
                        <>
                            <div key={item.id} className="card mx-2 mb-3" style={{ width: '20rem', height: '100%' }}>
                                <img className='mx-auto img-fluid pb-0' src={
                                    item.profileImage === null ?
                                        item.gender === 'male' ?
                                            'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-male-icon.png' :
                                            'https://cdn-icons-png.flaticon.com/512/17/17603.png'

                                        : item.profileImage
                                }

                                    height='150px' width='150px' style={{ borderRadius: '50%' }} />
                                <p className='text-center fw-bold pt-0' style={textColor}>{item.name}</p>
                                <p className='text-start'>{item.role} </p>
                                <Link className='btn text-light' style={{ 'backgroundColor': '#ae184f', marginBottom: '10px' }} to={item.linkedinProfile} target='_blank'>
                                    <i className='fa fa-linkedin-square mx-1'></i>View Profile
                                </Link>
                            </div >
                        </>
                    )}
                </div>
            </div >
        </>
    )
}
