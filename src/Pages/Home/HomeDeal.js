import React,{useEffect, useState,useContext} from 'react'
import { addtoCartMethod } from '../../Common/Components/CommonUtlis'
import { dealDescription, dealEndMessage, dealSubtitle, dealTitle } from '../../Common/LongText'
import { days_text, currencySymbol, hours_text, minutes_text, now, only, seconds_text, addtoCart } from '../../Common/Text/Const'
import { cartLengthUpadte, onCartUpdate } from '../../State/Action'
import userContext from '../../State/UserContext'
import { convertRemainingTimeInMiliSeconds, formateDay, formateHours, formateMiutes, formateSeconds } from './HomeUtlis'


const HomeDeal = ({data}) => {
   const {name,price,discountedPrice,img,endDealTime,perSybmol}=data;
   const { state,dispatch } = useContext(userContext);

const remainingTime=convertRemainingTimeInMiliSeconds(endDealTime);

const getRemainingTime=()=>{
        return remainingTime-(Date.now())
    }

const [MiliSeconds, setMiliseconds] = useState(getRemainingTime())

const handleAddToCart=()=>{
    if(MiliSeconds<=0)return
    data.price=discountedPrice;
   const cartItem= addtoCartMethod(data,state.cartItem)
    dispatch(onCartUpdate(cartItem))
    dispatch(cartLengthUpadte(cartItem?.length))
}

useEffect(()=>{

    let SecondsInterval;
       SecondsInterval=setInterval(() => {
            SecondsInterval>=0&&setMiliseconds(getRemainingTime())
         }, 1000)
         
         if(MiliSeconds<0){
             clearInterval(SecondsInterval)
         }
    return(()=>{
    clearInterval(SecondsInterval)}
    )
      // eslint-disable-next-line react-hooks/exhaustive-deps
},[MiliSeconds])

  return (
    <section className='homDeal_section d_f fd_r al_c'>
        <img src={img} alt={"img"} />
        <div className='content d_f fd_c jc_c' data-aos="flip-right" data-aos-duration="700">
            <p className='subtitle'>{dealSubtitle}</p>
            <p className='title'>{dealTitle}</p>
            <p className='description'>{dealDescription}</p>
            <p className='itemName'>{name}</p>
            <p className='price'>
               <span className="oldprice">{currencySymbol}{price}</span>
               <span className="greenColor">{now}</span>
               <span className="greenColor">{currencySymbol}{discountedPrice}{perSybmol}</span>
               <span className="greenColor">{only}</span>
            </p>
            <div className='dealTimer d_f fd_r' data-aos="fade-down" data-aos-duration="700"data-aos-offset="10" >
                <div className='days'>
                    {formateDay(MiliSeconds)}<p>{days_text}</p>
                </div>
                <div className='hours'>
                 {formateHours(MiliSeconds)}<p>{hours_text}</p>
                </div>
                <div className='minutes'>
                    {formateMiutes(MiliSeconds)}<p>{minutes_text}</p>
                </div>
                <div className='second'>
                 {formateSeconds(MiliSeconds)}<p>{seconds_text}</p>
                </div>
            </div>
            {MiliSeconds<=0&&<p className='dealEndMsg'>{dealEndMessage}</p>}
            <button className='addToCart c_p' disabled={MiliSeconds<=0} onClick={handleAddToCart}>{addtoCart}</button>
        </div>
    </section>
  )
}

export default HomeDeal