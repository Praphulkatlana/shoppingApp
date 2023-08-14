import React,{useState,useContext, useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import "./Cart.scss"
import Lottie from "react-lottie";
import { all, emptyCartGifSize, emptyCartMessage, emptyCartOption, explore, YourBasketList } from '../../Common/Text/Const'
import CartList from './CartList/CartList.js'
import Coupon from './Coupon'
import Details from './Details'
import BillSummary from './BillSummary'
import { calculateDeliveryCharges, calculateSubTotal,getCartData, scrollToTop } from '../../Common/Components/CommonUtlis'
import userContext from '../../State/UserContext';


const Cart = () => {
  const navigation=useNavigate();
  const { state,dispatch } = useContext(userContext);

  const SubTotal=calculateSubTotal()
  const DeliveryCharges=calculateDeliveryCharges()
  const savedCartData=state.cartItem;
  const [cartListData, setcartListData] = useState([...savedCartData])

const [priceData, setpriceData] = useState(
  {
  totalPrice:SubTotal+DeliveryCharges,
  subTotalPrice:SubTotal,
  DeliveryCharges:DeliveryCharges,
  DiscountValue:0,
  }
  )
const handleExploreClicked=()=>{
  scrollToTop();
  navigation({
      pathname: "/shop",
      search: `?category=${all}`,
    });
}
const [isUserDetailsEntered, setisUserDetailsEntered] = useState(false)

const onApplyCouponCode=(price)=>{
  setpriceData({...priceData,DiscountValue:price,totalPrice:priceData.subTotalPrice+priceData.DeliveryCharges-price})
}

const onGettingUserDetails=()=>{
  setisUserDetailsEntered(true)
}
useEffect(()=>{
  setcartListData([...state.cartItem])
},[state.cartItem])


  return (
    <section className='cart_section'>
      <div className='wrapper d_f fd_c'>
       {cartListData&&cartListData.length>0?
       <>
          <CartList title={YourBasketList} cartListData={cartListData}/>
          <div className='cart_container d_f fd_r jc_sb'>
            <div className='coupon'data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
              <Coupon onApplyCouponCode={onApplyCouponCode} totalPrice={priceData.totalPrice}/>
            </div>
            <div className='details' data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
              <Details onGettingUserDetails={onGettingUserDetails}/>
            </div>
            <div className='bill' data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
              <BillSummary 
              DiscountValue={priceData.DiscountValue}
              totalPrice={priceData.totalPrice}
              subTotalPrice={priceData.subTotalPrice}
              DeliveryCharges={priceData.DeliveryCharges}
              isUserDetailsEntered={isUserDetailsEntered}
              />
            </div>
          </div>
       </>:
       <>
              <span className='emptyCartList d_f fd_c jc_c al_c'>
        <Lottie
              options={emptyCartOption}
              height={emptyCartGifSize}
              width={emptyCartGifSize}
            />
            <p>{emptyCartMessage}</p>
            <div className='expolore_btn d_f jc_c'><button onClick={handleExploreClicked}>{explore}</button></div>
        </span>
       
        </>

       }
      </div>
    </section>
  )
}

export default Cart