import React, { useEffect } from 'react'
import HomeMain from './Pages/Home/HomeMain'
import Footer from './Common/Components/Footer';
import NavBar from './Common/Components/NavBar';
import {Route,Routes} from "react-router-dom"
import Listing from './Pages/ListingPage/Listing';
import PDP from './Pages/PDP/PDP';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Checkout/Checkout';
import AOS from 'aos';
import { ToastContainer } from 'react-toastify';
import 'aos/dist/aos.css'; 

const Main = () => {

  useEffect(()=>{
    AOS.init({offset: 100, duration: 700,  once: true,});
  },[])

  return (
    <div>
       <NavBar/>
       <ToastContainer
       position="top-right"
       autoClose={5000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="dark"
       />
    <Routes>
      <Route path={""} element={<HomeMain/>}/>
      <Route path={"/shop"} element={<Listing/>}/>
      <Route path={"/details"} element={<PDP/>}/>
      <Route path={"/cart"} element={<Cart/>}/>
      <Route path={"/checkout"} element={<Checkout/>}/>
      <Route path={"*"} element={<HomeMain/>}/>
    </Routes>
       <Footer/>

      </div>
  )
}

export default Main