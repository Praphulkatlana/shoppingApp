import React from 'react'
import { footer_2_text1, footer_aboutDescription, footer_aboutTitle, footer_contactUsTitle, footer_copyright, footer_deliveryTitle, footer_mobileNumber,footer_whatsUpmobileNumber, Weekdays, WeekdaysTime, WeekEnd, WeekEndTime } from '../LongText'
import {AiTwotonePhone} from"react-icons/ai";
import {AiFillMail} from"react-icons/ai";
import {AiFillInstagram} from"react-icons/ai";
import {AiFillHeart} from"react-icons/ai";
import {BsTwitter} from"react-icons/bs";
import {BsYoutube} from"react-icons/bs";
import {IoLogoWhatsapp} from"react-icons/io";
import { footerIconSize, footerSocialIconSize, footer_instaLink, footer_twitterLink, footer_whatsupLink, footer_youtubeLink,footer_emailaddress, footer_emailLink, footer_numberLink,footer_BlackIconSize } from '../Text/Const';
import { getCurrentYear } from './CommonUtlis';

const Footer = () => {
  return (
    <section className='footer_section'>
        <div className='wrapper d_f fd_r jc_sb'>    
            <div className='about'>
                <p className='title'>{footer_aboutTitle}</p>
                <p className='description'>{footer_aboutDescription}</p>
                <div className='socialIcon'>
                 <a href={footer_instaLink} target="_blank" rel="noopener noreferrer">
                    <AiFillInstagram size={footerSocialIconSize} className="c_p"/>
                 </a>
                 <a href={footer_twitterLink} target="_blank" rel="noopener noreferrer">
                    <BsTwitter size={footerSocialIconSize} className="c_p"/>
                 </a>
                 <a href={footer_youtubeLink} target="_blank" rel="noopener noreferrer">
                    <BsYoutube size={footerSocialIconSize} className="c_p"/>
                 </a>
                </div>
            </div>
            <div className='deliveryTimings'>
                <p className='title'>{footer_deliveryTitle}</p>
                <div className='content d_f jc_sb'>
                    <span className='day'>{Weekdays} </span>
                    <span className='time'>{WeekdaysTime}</span>
                </div>
                <div className='content d_f jc_sb'>
                    <span className='day'>{WeekEnd} </span>
                    <span className='time'>{WeekEndTime}</span>
                </div>
            </div>
            <div className='contactUs'>
                <p className='title'>{footer_contactUsTitle}</p>
                <div className='content d_f '>
                    <span className='logo'>
                      <a href={footer_numberLink} target="_blank" rel="noopener noreferrer"> 
                         <AiTwotonePhone size={footerIconSize}/>
                      </a>
                    </span>
                    <span className='data'>{footer_mobileNumber}</span>
                </div>
                <div className='content d_f '>
                    <span className='logo'>
                      <a href={footer_emailLink} target="_blank" rel="noopener noreferrer"> 
                            <AiFillMail size={footerIconSize}/> 
                      </a>
                    </span>
                    <span className='data'>{footer_emailaddress}</span>
                </div>
                <div className='content d_f '>
                    <span className='logo'>
                      <a href={footer_whatsupLink} target="_blank" rel="noopener noreferrer"> 
                        <IoLogoWhatsapp size={footerIconSize}/> 
                      </a>
                    </span>
                    <span className='data'>{footer_whatsUpmobileNumber}</span>
                </div>
            </div>
        </div>
        <div className='blackFooter  d_f al_c jc_c'>{footer_copyright} &copy; {getCurrentYear()} {footer_2_text1}<AiFillHeart size={footer_BlackIconSize}/></div>
    </section>
  )
}

export default Footer