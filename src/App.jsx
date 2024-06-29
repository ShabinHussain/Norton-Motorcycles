import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import Opening from './Pages/Opening'
import Footer from './Components/Footer'
import TestRide from './Components/TestRide'











function App() {

  return (
    <>
    
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/opening' element={<Opening/>}/>  
      <Route path='/testride' element={<TestRide/>}/>

    </Routes>
    <Opening/>
    <Footer/>
    

    </>

     
  )
}

export default App
