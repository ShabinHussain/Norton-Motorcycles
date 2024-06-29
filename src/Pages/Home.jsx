import React from 'react'
import '../Header.css'
import {  Carousel} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons/faWindowRestore'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'







function Home() {



  return (
    
   <>
       <Header/>

    <Carousel className='caur' controls={true} indicators={false} interval={4000} autoPlay={true} fade>
      <Carousel.Item >
      <img
          className="d-block w-100"
          src="./Images/Norton_banner30.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <Link to={'/testride'} > <button className='bt'>REQUEST A TEST RIDE</button></Link>


        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="./Images/Norton_banner2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        <button className='bt'>V4 LIMITED EDITIONS</button>


        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="./Images/Norton_banner3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        <button className='bt'>COMMANDO 961 LE</button>


         </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
      <img
          className="d-block w-100"
          src="./Images/Norton_banner4.jpg"
          alt="Fourth slide"
        />
        <Carousel.Caption>
        <button className='bt'>SHOP CLOTHING  <FontAwesomeIcon icon={faWindowRestore} /></button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


   
    <section className='ddiv hei1'>
      <div className="row " style={{height:'670px'}}>
        <div className="col-md-5 ">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
            <img src="./Images/Commando-961-logov2.png" alt="logo" width={'167px'} height={'70px'} className='mt-5 pt-4'/>
            <h5 className='mt-5 text-black'>NORTON COMMANDO 961</h5>
            <p className=' pt-4 text-black fnt'>The Commando name has been a byword for the pinnacle of British motorcycling for decades and this new Commando, manufactured less than ten miles from where Norton was founded 125 years ago, is no different. Cutting edge engineering, world class components and ride quality you’ve only dreamt of.</p>
            <button className='bt2'>DISCOVER</button>


            

            </div>
            <div className="col-md-1"></div>
          </div>

        </div>
        <div className="col-md-7  mt-4" >
        <Carousel controls={false} interval={1500} autoPlay={true} className='caur1'>
      <Carousel.Item >
      <img
          className="d-block w-100"
          src="./Images/Norton_banner9.png"
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="./Images/Norton_banner10.png"
          alt="Second slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="./Images/Norton_banner11.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>

         
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
        </div>

      </div>

    </section>

    
    <section className='ddiv bg-secondary hei2'>
      <div className="row" style={{height:'640px'}}>
        <div className="col-md-5 ">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
            <img src="./Images/V4SV-MODEL-LOGO.png" alt="logo" width={'167px'} height={'70px'} className='mt-5 pt-4'/>
            <h5 className='mt-5 text-white'>THE MARQUE OF SOMETHING SPECIAL</h5>
            <p className='fs-5 pt-4 text-white fnt'>The new re-engineered V4SV is the most luxurious British superbike ever created. The only British built and designed superbike in production. The speed, the handling, the feeling... Nothing comes close to it. The Isle of Man TT is where the V4SV was imagined, the road is where it was born.</p>
            <button className='bt1'>DISCOVER</button>


            

            </div>
            <div className="col-md-1"></div>
          </div>

        </div>
        <div className="col-md-7 " >
        <Carousel controls={false} interval={2000} autoPlay={true} className='caur1'>
      <Carousel.Item >
      <img
          className="d-block w-100"
          src="./Images/Norton_banner12.jpg"
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="./Images/Norton_banner13.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="./Images/Norton_banner14.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>

         
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
        </div>

      </div>

    </section>

     <section className='ddiv hei3'>
      <div className="row" style={{height:'700px'}}>
        <div className="col-md-5 ">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
            <img src="./Images/V4CR-MODEL-LOGO.png" alt="logo" width={'167px'} height={'70px'} className='mt-5 pt-4'/>
            <h5 className='mt-5 text-black'>MAKE SPACE</h5>
            <p className='fs-5 pt-4 text-black fnt'>The V4 Café Racer is the rebellious younger brother to the V4SV, sharing the same superbike DNA but differing in attitude and emotion. It’s stripped-back fairing reveals Norton’s technical artistry and craftmanship, naked with nothing to hide. And while the V4CR embraces nostalgic design cues and Norton character, it’s all about the present moment. A modern incarnation of the past.</p>
            <button className='bt2'>DISCOVER</button>


            

            </div>
            <div className="col-md-1"></div>
          </div>

        </div>
        <div className="col-md-7 " >
        <Carousel controls={false} interval={2000} autoPlay={true} className='caur1' style={{height:'700px'}}>
      <Carousel.Item >
      <img
          className="d-block w-100"
          src="./Images/Norton_banner15.png"
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="./Images/Norton_banner16.png"
          alt="Second slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="./Images/Norton_banner17.png"
          alt="Third slide"
        />
        <Carousel.Caption>

         
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
        </div>

      </div>

    </section>

    <section className='hei4'>
      <div className="row" style={{height:'620px'}}>
        <div className="col-md-5 bg-secondary">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
            <h5 className='mt-5 pt-4'>CELEBRATING 125 YEARS</h5>
            <p className='fs-5 pt-4 text-white fnt'>Since 1898, at Norton we have strived to be the best we can be. We have taken risks – some we've won, others we haven’t – but we would not be where we are if we had not tried. After all, you don't win eight World Championships, 94 TTs and countless Bike of the Year accolades without pushing the boundaries. To celebrate our 125th anniversary, we are creating a range of Limited Editions</p>
            <button className='bt1'>LEARN MORE</button>


            

            </div>
            <div className="col-md-1"></div>
          </div>

        </div>
        <div className="col-md-7 bg-danger ">
        <Carousel controls={false} interval={3000} autoPlay={true} className='caur1'>
      <Carousel.Item >
      <img
          className="d-block w-100"
          src="./Images/Norton_banner6.jpg"
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="./Images/Norton_banner5.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="./Images/Norton_banner7.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>

         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
      <img
          className="d-block w-100"
          src="./Images/Norton_banner8.jpg"
          alt="Fourth slide"
        />
        <Carousel.Caption>

        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>

      </div>

    </section>


    <section className='ddiv3 hei5'>
      <div className="row" style={{height:'635px'}}>
        <div className="col-md-5 ">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
            <h5 className='h11 text-white hei51'>REQUEST A TEST RIDE</h5>
            <p className='fs-5 pt-4 text-white fnt'>Experience riding a Norton at our HQ in Birmingham or with our Sales Partners across the UK.</p>
            <button className='bt1 mt-5'>BOOK NOW</button>


            

            </div>
            <div className="col-md-1"></div>
          </div>

        </div>
        <div className="col-md-7 " >
        <Carousel controls={false} interval={5000} autoPlay={false} className='caur1'>
      <Carousel.Item >
      <img
          className="d-block w-100"
          src="./Images/Norton_banner18.jpg"
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      
     
      
    </Carousel>
        </div>

      </div>

    </section>

    <section className='hei9'>
      <div className="row" style={{height:'635px'}}>
        <div className="col-md-7 ddiv3">
        <Carousel controls={false} interval={5000} autoPlay={false} className='caur2'>
      <Carousel.Item >
      <img
          className="d-block w-100"
          src="./Images/Norton_banner19.jpg"
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      
     
      
    </Carousel>
          

        </div>
        <div className="col-md-5 ddiv" >
        <div className="row caurr1">
            <div className="col-md-1"></div>
            <div className="col-md-10">
            <h5 className='h11 text-black hei10'>SHOP CLOTHING</h5>
            <p className='fs-5 pt-4 text-black fnt'>Explore our online store and discover our range of stylish premium clothing. From timeless classics to modern designs, our apparel collection embodies the spirit of the open road, allowing you to wear your passion with pride.</p>
            <button className='bt2 mt-3'><pre className='pt-2'>VIEW STORE   <FontAwesomeIcon icon={faArrowTrendUp}/></pre> </button>


            

            </div>
            <div className="col-md-1"></div>
          </div>
       
        </div>

      </div>

    </section>

    <section className='ddiv'>
      <div className="row" style={{height:'635px'}}>
        <div className="col-md-5 ">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
            <h5 className='h12 text-black'>DEALER LOCATOR</h5>
            <p className='fs-5 mt-2  text-black'>Find your nearest Norton dealer</p>
            <button className='bt2 mt-4'>SEARCH NOW</button>


            

            </div>
            <div className="col-md-1"></div>
          </div>

        </div>
        <div className="col-md-7 " >
        <Carousel controls={false} interval={5000} autoPlay={false} className='caur1'>
      <Carousel.Item >
      <img
          className="d-block w-100"
          src="./Images/Norton_banner20.jpg"
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      
     
      
    </Carousel>
        </div>

      </div>

    </section>


     <section className='bg-black hei6'>
      <div className="row" style={{height:'670px'}}>
        <div className="col-md-5 ">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
            <h5 className='mt-5 text-white'>THE NORTON DIFFERENCE</h5>
            <p className='fs-5 mt-2  text-white fnt'>Not all bikes are created equal. </p>
            <p className='fs-5 mt-2  text-white fnt'>Nortons stand apart. Nothing else looks like them or feels like them. It’s because Nortons are built without compromise to be the most rewarding bike you can own. </p>
            <p className='fs-5 mt-2  text-white fnt'>Designed for agility, to fit closer, to feel better and react instinctively. Combining our unique mix of industry-leading technology, innovation and craftsmanship, our bikes are assembled in our state-of-the-art facility by passionate experts with quality at the forefront of everything we do.</p>
            <p className='fs-5 mt-2  text-white fnt'>If you want more than just a motorcycle, you want a Norton.</p>



            

            </div>
            <div className="col-md-1"></div>
          </div>

        </div>
        <div className="col-md-7" >
        <Carousel controls={false} interval={5000} autoPlay={false} className='caur1' style={{height:'670px'}}>
      <Carousel.Item >
      <img
          className="d-block w-100"
          src="./Images/Norton_banner21.jpg"
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
      <img
          className="d-block w-100"
          src="./Images/Norton_banner22.jpg"
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      
     
      
    </Carousel>
        </div>

      </div>

    </section>

    <section className='bg-black ght6' style={{height:'1070px'}}>
    <div className="row" >
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <h5 className='text-center mt-5'>STORIES</h5>
      <div className='mt-5 align-items-center justify-content-center'>
        <Carousel controls={true} interval={50000} autoPlay={false} className='caur1'>
      <Carousel.Item >
      <img
          className="d-block w-100"
          src="./Images/Norton_banner23.webp"
          alt="First slide"
          height={'500px'}
        />
        <Carousel.Caption>


        </Carousel.Caption>
        <p className='inter fs-5 text-white ms-5'>INTERNATIONAL WOMENS DAY 2024</p>
        <button className='btt mb-5 fnt1'>MORE STORIES</button>


      </Carousel.Item>

      <Carousel.Item >
      <img
          className="d-block w-100"
          src="./Images/Norton_banner24.webp"
          alt="First slide"
          height={'500px'}

        />
        <Carousel.Caption>
       

        </Carousel.Caption>
        <p className='inter fs-5 text-white ms-5'>INTRODUCING SOUTH DOWNS MOTORCYCLES: A NEW MEMBER OF THE NORTON MOTORCYCLES FAMILY</p>
        <button className='btt mb-5 fnt1'>MORE STORIES</button>
      </Carousel.Item>

      <Carousel.Item >
      <img
          className="d-block w-100"
          src="./Images/Norton_banner25.webp"
          alt="First slide"
          height={'500px'}

        />
        <Carousel.Caption>
       

        </Carousel.Caption>
        <p className='inter fs-5 text-white ms-5'>EXPLORE OUR SOLIHULL HEADQUARTERS: THROUGH THE LENS OF A FIRST-PERSON VIEW DRONE</p>
        <button className='btt mb-5 fnt1' >MORE STORIES</button>
      </Carousel.Item>

      <Carousel.Item >
      <img
          className="d-block w-100"
          src="./Images/Norton_banner26.webp"
          alt="First slide"
          height={'500px'}

        />
        <Carousel.Caption>
       

        </Carousel.Caption>
        <p className='inter fs-5 text-white ms-5'>CELEBRATING NOTABLE PEOPLE WHO STEERED THE BRAND’S LEGACY</p>
        <button className='btt mb-5 fnt1'>MORE STORIES</button>
        
      </Carousel.Item>
      
     
      
    </Carousel>
        </div>

      </div>
      <div className="col-md-4"></div>
       
   
      </div>


    </section>


  



   </>
  
 
   
    
  )
}

export default Home