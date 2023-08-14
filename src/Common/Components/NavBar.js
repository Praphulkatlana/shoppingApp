import React,{useState,useEffect,useContext} from 'react'
import {useNavigate} from "react-router-dom"
import {BsFillCartFill} from 'react-icons/bs'
import { NavBarIconSize,homepageIndex1, cart } from '../Text/Const';
import Nav_logo from "./../Media/Image/Nav_logo.png";
import { scrollToTop } from './CommonUtlis';
import { siteIssue } from '../LongText';
import userContext from '../../State/UserContext';

const NavBar = () => {
  const isSiteHavingIssue=false;
  const Navigation=useNavigate();
  const {state}=useContext(userContext)
  const [isIndexPageScrolled, setisIndexPageScrolled] = useState(false)
  const numberOfItemInCart=state.cartItemLength;
  
  const handleScrolling=()=>{
    const IndexOneElement = document.getElementById(homepageIndex1)
    if(IndexOneElement){
      const IndexOneElementScrollValue=IndexOneElement.offsetTop;
      const windowScrollValue = window.scrollY;
      setisIndexPageScrolled(windowScrollValue>=IndexOneElementScrollValue)
    }
  }

useEffect(()=>{
 window.addEventListener("scroll",handleScrolling)
return(()=>{
  window.removeEventListener("scroll",handleScrolling)
})
})

const handleRedirection = (key)=>{
  Navigation(key)
  scrollToTop();
}

  return (
    <section className={`navbar_section ${isIndexPageScrolled?"isScrolled":""}`}>
      <div className={`navbar_container d_f jc_sb al_c ${isIndexPageScrolled?"isScrolled":""}`}>
        <img src={Nav_logo} alt="(())" className='c_p' onClick={()=>handleRedirection("")}/>
        {isSiteHavingIssue&&<h1 className='siteIssue'>{siteIssue}</h1>}
        <div className="cart_account">
          <div className="cart c_p" onClick={()=>handleRedirection(cart)}>
            <span className="numberOfItem " >{numberOfItemInCart}</span>
            <BsFillCartFill size={NavBarIconSize} />
            </div>
          <div className="account"></div>
        </div>
      </div>
    </section>
  )
}

export default NavBar