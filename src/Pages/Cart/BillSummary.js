import React,{useState} from 'react'
import {useNavigate} from"react-router-dom";
import { scrollToTop } from '../../Common/Components/CommonUtlis';
import { cartTotal, currencySymbol, dataEntryMessage, Delivery, Discount, ProceedToCheckout, Subtotal, Total } from '../../Common/Text/Const'

const BillSummary = ({DiscountValue=0,totalPrice=0,subTotalPrice=0,DeliveryCharges=0,isUserDetailsEntered=false}) => {
const Navigation=useNavigate()

const [errorMsgShow, seterrorMsgShow] = useState(false)
const proceedToCheckout =()=>{
  seterrorMsgShow(true)
  if(!isUserDetailsEntered){
    alert("enter deatils first")
     return}
    Navigation("/checkout")
    scrollToTop()
}

  return (
    <>
      <h2>{cartTotal}</h2>
      <div className="itemRow d_f jc_sb fd_r">
        <p>{Subtotal}</p>
        <p>{currencySymbol}{subTotalPrice}</p>
      </div>
      <div className="itemRow d_f jc_sb fd_r">
        <p>{Delivery}</p>
        <p>{currencySymbol}{DeliveryCharges}</p>
      </div>
      <div className="itemRow d_f jc_sb fd_r">
        <p>{Discount}</p>
        <p>{currencySymbol}{DiscountValue}</p>
      </div>
      <div className="itemRow total d_f jc_sb fd_r">
        <p>{Total}</p>
        <p>{currencySymbol}{totalPrice}</p>
      </div>
      {!isUserDetailsEntered&&errorMsgShow&&<p className='hasErrorText'>{dataEntryMessage}</p>}
      <div className='proceedBtn'>
         <button onClick={proceedToCheckout}>{ProceedToCheckout}</button>
      </div>
    </>
  )
}

export default BillSummary;