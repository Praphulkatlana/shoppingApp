import React from 'react'
import "./Home.scss"
import HorizontalLine from '../../Common/Components/HorizontalLine'
import HomeCatagory from './HomeCatagory'
import HomeCustomerReview from './HomeCustomerReview'
import HomeDeal from './HomeDeal'
import HomeFeatures from './HomeFeatures'
import HomeFrequentlyBrought from './HomeFrequentlyBrought'
import HomeIndex from './HomeIndex'
import { dealProduct } from '../../Common/Text/Const'

const HomeMain = () => {
  const isDealAvailable=true;
  const dealProductData= isDealAvailable===true?dealProduct:null;

  return (
    <section className='homeMain_section d_f fd_c'>
     <HomeIndex/>

     <HomeFeatures/>
     <HorizontalLine/>

     <HomeCatagory/>
     <HorizontalLine/>

     <HomeFrequentlyBrought/>
     <HorizontalLine/>

     {isDealAvailable&&<HomeDeal data={dealProductData}/>}
     <HorizontalLine/>

     <HomeCustomerReview/>
    </section>
  )
}

export default HomeMain