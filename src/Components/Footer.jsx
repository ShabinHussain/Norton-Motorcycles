import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <div className='bg-black ftr justify-content-center align-items-center hgt' style={{height:'250px'}}>
        <div className="row rtr1">
            <div className="col-md-5"></div>
            <div className="col-md-2 d-flex justify-content-center align-items-center">
            <div ><FontAwesomeIcon icon={faFacebook} size="2xl" className='text-white'/></div>
            <div className='icons ms-4 justify-content-center align-items-center'><FontAwesomeIcon icon={faTwitter} size="xl" className='icons2 text-black'/></div>
            <div className='icons ms-4 justify-content-center align-items-center'><FontAwesomeIcon icon={faInstagram} size="xl" className=' icons2 text-black' /></div>
            <div className='icons ms-4 justify-content-center align-items-center'><FontAwesomeIcon icon={faLinkedinIn} size="xl" className='icons2 text-black'/></div>
            </div>
            <div className="col-md-5"></div>
        </div>

        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <div className="row mt-5 icons3">
                    <div className="col-md-2 car">Careers</div>
                    <div className="col-md-2 car1">Newsletter</div>
                    <div className="col-md-3 icons4 car2">Privacy <span className='car6'>Policy</span></div>
                    <div className="col-md-2 car3">T&Cs</div>
                    <div className="col-md-3 car4">Cookie <span className='car7'>Policy</span></div>

                </div>
            </div>
            <div className="col-md-4"></div>

        </div>

        <p className='icons5 mt-4 car5'>Copyright © The Norton Motorcycle Co. Limited 2024 - <span className='car8'>Company No. 12545195</span></p>

        

    </div>
  )
}

export default Footer