import React from 'react'
import {useNavigate} from "react-router-dom"
import { scrollToTop } from '../../Common/Components/CommonUtlis'
import { catagorySubtitle } from '../../Common/LongText'
import {  shopNow, explore, vegetabels, catagory, all } from '../../Common/Text/Const'
import HomeCatagoryCard from './HomeCatagoryCard'

const HomeCatagory = () => {
    const navigation=useNavigate();

    const redirectToListingPage=()=>{
        scrollToTop();
        navigation({
            pathname: "/shop",
            search: `?category=${all}`,
          });
    }

    const catagoryItemList=catagory;
    
  return (
    <section className='homeCatagorySection d_f fd_r jc_c'>
        <div className='one d_f fd_c jc_sb'  data-aos="fade-up-right" data-aos-duration="1000">
            <HomeCatagoryCard tag={catagoryItemList[0].tag} img={catagoryItemList[0].image}/>
            <HomeCatagoryCard tag={catagoryItemList[1].tag} img={catagoryItemList[1].image}/>
        </div>
        <div className='two d_f al_c jc_c'>
            <div className='d_f fd_c al_c'>
                <h2>{vegetabels}</h2>
                <p>{catagorySubtitle}</p>
                <button className='c_p' onClick={redirectToListingPage}>{shopNow}</button>
            </div>
        </div>
        <div className='three d_f fd_c jc_sb'  data-aos="fade-up-left" data-aos-duration="1000">
            <HomeCatagoryCard tag={catagoryItemList[2].tag} img={catagoryItemList[2].image}/>
            <HomeCatagoryCard tag={catagoryItemList[3].tag} img={catagoryItemList[3].image}/>
        </div>
            
        
    </section>
  )
}

export default HomeCatagory