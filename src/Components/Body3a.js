import React from 'react'
import cimgg1 from './images/tool.png'
import cimgg2 from './images/expert.png'
import cimgg3 from './images/clients.png'
import cimgg4 from './images/success.png'
const Body3a = () => {
  return (
    <div>
        <div className='ltbg1'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 cn' >
                        <div className='col-md-3' >
                            <div className='card cb'>
                                <div className='card-body body1'>
                                    <div className=' move'>
                                    <img src={cimgg1}  alt="tool"/>
                                    <p><span className='exc'>500+</span> professionals trained</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-2' >
                            <div className='card cb'>
                                <div className='card-body body1'>
                                    <div className=' move'>
                                <img src={cimgg2}  alt="expert"/>
                                <p><span className='exc'>10+ Years</span> of Experience</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        <div className='col-md-3 '>
                            <div className='card cb'>
                                <div className=' card-body body1'>
                                    <div className='move'>
                                <img src={cimgg3}  alt="client"/>
                                <p><span className='exc'>15+</span> Companies Association</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        <div className='col-md-3' >
                            <div className='card cb'>
                                <div className='card-body body1'>
                                    <div className='move'>
                                <img src={cimgg4}  alt="success"/>
                              <p><span className='exc'>99% </span>Job Guarantee</p>
                              </div>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Body3a