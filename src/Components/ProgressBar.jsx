import CountUp from 'react-countup'
import '../index.css'

export default function ProgressBar() {
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <p className='fw-bold text-center h5' style={{ color: '#ae184f' }}>IMPACT WE CREATE</p>
                </div>

                <div className="row">
                    <div className="col-sm-12 col-md-4 text-center">
                        <CountUp start={0} end={495} delay={0} style={{ color: '#ae184f' }} className='fw-bold fs-3 mb-0' />
                        <p className='fs-5 mt-0' style={{ color: '#ae184f' }}>Students</p>
                    </div>

                    <div className="col-sm-12 col-md-4 text-center">
                        <CountUp start={0} end={12} delay={0} style={{ color: '#ae184f' }} className='fw-bold fs-3 mb-0' />
                        <p className='fs-5 mt-0' style={{ color: '#ae184f' }}>Schools</p>
                    </div>


                    <div className="col-sm-12 col-md-4 text-center">
                        <CountUp start={0} end={6} delay={0} style={{ color: '#ae184f' }} className='fw-bold fs-3 mb-0' />
                        <p className='fs-5 mt-0' style={{ color: '#ae184f' }}>Areas</p>
                    </div>

                </div>
            </div>
        </>
    )
}
