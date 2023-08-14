import React,{useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom"
import "./Checkout.scss"
import Lottie from "lottie-react";
import { card, cart, cashOnDelivery, continueShopping, orderConfrmGif, orderConfrmGifSize, orderSoonDelivered, pay, paymentDoneText, PaymentMode, PaymentModeType, thnxForPurchasing, type_radio, type_submit, UPI } from '../../Common/Text/Const'
import { notify, scrollToTop } from '../../Common/Components/CommonUtlis';
import { paymentDoneOrderPlaced } from '../../Common/LongText';

const Checkout = () => {
  const Navigation=useNavigate();

  let isUserDetailsEntered=true;

  useEffect(()=>{
    if(!isUserDetailsEntered)Navigation(`/${cart}`)
  },[])


  const [selectedPaymentMode, setselectedPaymentMode] = useState(null)
  const [paymentDone, setpaymentDone] = useState(false)


const onSelectPaymentMode=(event)=>{
  event.preventDefault();
  if(selectedPaymentMode===null)return
  if(selectedPaymentMode===cashOnDelivery){
    setpaymentDone(true)
    notify(paymentDoneOrderPlaced)
    return
  }
  alert(selectedPaymentMode)

}
const handleContinueShoppingClicked=()=>{
  Navigation("/")
  scrollToTop()
}


  return (
    <section className='checkout_section d_f jc_c al_c' data-aos="fade-up"
    data-aos-anchor-placement="top-center">
       {!paymentDone&& <div className="wrapper">
            <h1>{PaymentMode}</h1>
            <div className='paymentMode d_f fd_c'>
                <form className='d_f fd_c' onSubmit={onSelectPaymentMode}>                   
                   <span>
                    <input type={type_radio}
                     name={PaymentModeType} value={UPI} 
                     onChange={()=>setselectedPaymentMode(UPI)}
                    />
                    {UPI}
                    </span> 

                   <span>
                    <input type={type_radio} name={PaymentModeType} value={card}
                     onChange={()=>setselectedPaymentMode(card)}/>
                    {card}
                    </span> 

                   <span>
                    <input type={type_radio} name={PaymentModeType} value={cashOnDelivery}
                     onChange={()=>setselectedPaymentMode(cashOnDelivery)}/>
                    {cashOnDelivery}
                    </span> 
                    <button disabled={selectedPaymentMode===null} type={type_submit}>{pay}</button>
                </form>
            </div>
        </div>}
        {paymentDone&&<div className='paymentDone'>
          <div className="title d_f al_c">
            <h1>{paymentDoneText}</h1>
          <Lottie
              animationData={orderConfrmGif}
              style={{
                width: orderConfrmGifSize,
                height:orderConfrmGifSize,
              }}
            />
          </div>
          <h4>{orderSoonDelivered}</h4>
          <p>{thnxForPurchasing}</p>
          <div className='continueShopping_btn'><button onClick={handleContinueShoppingClicked}>{continueShopping}</button></div>
        </div>}
    </section>
  )
}

export default Checkout