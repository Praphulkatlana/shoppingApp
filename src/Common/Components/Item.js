import React,{useContext} from 'react'
import{useNavigate} from 'react-router-dom'
import { Catagory_fruitsImg } from '../Text/URLs'
import "./Style.scss"
// import {AiFillHeart} from "react-icons/ai";
import {BsFillCartPlusFill} from "react-icons/bs";
import { addtoSize, currencySymbol, off, percentageSymbol, perKG } from '../Text/Const';
import { addtoCartMethod, scrollToTop } from './CommonUtlis';
import userContext from '../../State/UserContext';
import { cartLengthUpadte, onCartUpdate } from '../../State/Action';

const Item = ({data}) => {
    const{id,name,price,discountPrice=null,tag=null,img,perSybmol=perKG}=data; 
    const { state,dispatch } = useContext(userContext);

    const navigation=useNavigate()

    const handleItemClick = ()=>{
        navigation({
            pathname: "/details",
            search: `?id=${id}`,
          });
        scrollToTop();
      }
    
      const handleAddToCart=()=>{
        const cartItem= addtoCartMethod(data,state.cartItem)
        dispatch(onCartUpdate(cartItem))
        dispatch(cartLengthUpadte(cartItem?.length))
        //tostify add here
      }

  return (
    <section className='item_section d_f fd_c t_a_c c_p'> 
        {tag&&<div className='tag'>{tag}{percentageSymbol} {off}</div>}
        <img className='img_container' src={Catagory_fruitsImg} alt="img" onClick={handleItemClick}/>
        <div className='price_title_container' >
            <p className='title'>{name}</p>
            {discountPrice&&<span className='oldprice'>{currencySymbol}{price}</span>}
            <span className='price'>{currencySymbol}{discountPrice?discountPrice:price}{perSybmol}</span>
            <div className='hoversection d_f fd_r jc_fe'>
                {/* <div className='addtowishList c_p'>
                    <AiFillHeart size={addtoSize}/>
                </div> */}
                <div className='addToCart c_p' onClick={handleAddToCart}>
                    <BsFillCartPlusFill size={addtoSize}/>
                </div>
            </div>
        </div>


    </section>  )
}

export default Item