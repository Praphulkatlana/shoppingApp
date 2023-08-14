import React,{useRef} from 'react'
import { notify } from '../../Common/Components/CommonUtlis';
import { CouponNotApplyAtThisPrice, invalidCoupon } from '../../Common/LongText';
import { ApplyCoupon, Code, couponCode, CouponCode, CouponCodeText, minProfitValue, type_submit, type_text } from '../../Common/Text/Const'

const Coupon = ({onApplyCouponCode,totalPrice}) => {
    const inputRef=useRef();
     const applyingCouponCode=(event)=>{
         event.preventDefault();
         let code=inputRef.current.value;
         let appliedCoupon=couponCode.filter((Coupon=>Coupon.id===code))
         if(appliedCoupon.length>0){
          if((totalPrice-minProfitValue)<=appliedCoupon[0].value){
            notify(CouponNotApplyAtThisPrice)
          }else{
            onApplyCouponCode(appliedCoupon[0].value)
            notify(`${code} applied of value ${appliedCoupon[0].value}`)
            }
          }else{
            notify(invalidCoupon)
          }

     }
  return (
    <>
        <h2>{CouponCode}</h2>
        <p>{CouponCodeText}</p>
        <form onSubmit={applyingCouponCode} className="d_f fd_c">
            <label>{Code}</label>
          <input type={type_text} ref={inputRef}/>
          <button type={type_submit} className="c_p">{ApplyCoupon}</button>
        </form>
    </>
  )
}

export default Coupon