import React from 'react'
import Headertest from './Headertest'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { height } from '@fortawesome/free-solid-svg-icons/faWindowRestore';
import './Headertestcss.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';




function TestRide() {
  return (
    <>
    <Headertest/>
    <section className='bg-white whit'>
        <h1 className='test1 text-black text-center'>REQUEST A TEST RIDE</h1>
        <h5 className='test2 text-center text-black'>Experience riding a Norton at our HQ in <span className='test21'>Birmingham or with our <Link className='text-black'>Sales Partners</Link> across the <span className='test22'>UK.</span></span></h5>
        <h5 className='test3 text-center text-black mt-5'>SELECT THE MODEL YOU ARE INTERESTED IN</h5>

        
    <div className='row d-flex align-items-center justify-content-center mt-5 '>
    <Card style={{ width: '400px', height:'300px' }} className='bg-white'>
      <Card.Img variant="top" src="Images/Norton_banner28.webp" height={'270px'} width={'400px'} className='lt'/>
      <Card.Body className='bg-white '>
        <Card.Title className='text-center pb-2 text-black test4' style={{height:'10px'}}>COMMANDO 961 SP</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '400px', height:'300px' }} className='ms-2 bg-white'>
      <Card.Img variant="top" src="Images/Norton_banner27.webp" height={'270px'}  className='lt'/>
      <Card.Body  className='bg-white'>
        <Card.Title className='text-center pb-2 text-black test4' style={{height:'10px'}}>COMMANDO 961 CR</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '400px', height:'300px' }} className='ms-2 bg-white '>
      <Card.Img variant="top" src="Images/Norton_banner29.webp" height={'270px'}  className='lt'/>
      <Card.Body  className='bg-white'>
        <Card.Title className='text-center pb-2 text-black test4' style={{height:'10px'}}>V4SV</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className="row d-flex align-items-center justify-content-center ">

    <div className="col-md-5"></div>
    <div className="col-md-2 d-flex align-items-center justify-content-center">
    <Button className='test5 mt-5 bg-black'>NEXT<FontAwesomeIcon icon={faArrowRight} /></Button>

    </div>
    <div className="col-md-5"></div>


    </div>

    


    
   
  


    </section>
    </>
  )
}

export default TestRide
