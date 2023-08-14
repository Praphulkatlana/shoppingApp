import React,{useState,useEffect,useContext} from 'react'
import {useNavigate,useLocation}from"react-router-dom"
import "./PDP.scss";
import cabbage from "./../../Common/Media/Image/cabbage.png";
import { addSymbol, addtoCart, cart, currencySymbol, minusSymbol, ProceedToCart,perKG } from '../../Common/Text/Const';
import { realtedItemSubTitle, realtedItemTitle } from '../../Common/LongText';
import { convertRatingToStar } from '../Home/HomeUtlis';
import Item from '../../Common/Components/Item';
import { addtoCartMethod, scrollToTop } from '../../Common/Components/CommonUtlis';
import HorizontalLine from '../../Common/Components/HorizontalLine';
import { cartLengthUpadte, onCartUpdate } from '../../State/Action';
import userContext from '../../State/UserContext';

const PDP = () => {
  const perSybmol=perKG;
  const { state,dispatch } = useContext(userContext);
  const params=useLocation()
  const Navigation=useNavigate();
  const queryParams=new URLSearchParams(params.search)
  const productId=queryParams.get("id")
  const [quantity, setquantity] = useState(1)
  const [allProducts, setallProducts] = useState([])
  const [productDetails, setproductDetails] = useState({})
  const [relatedProducts, setrelatedProducts] = useState([])

  const getData=()=>{
    fetch('/Data.json')
    .then(response => response.json())
    .then(responseData=>setallProducts([...responseData]))
    .catch(err=>console.log("error while fetch",err))

      }

  const getDataById=()=>{
     // eslint-disable-next-line eqeqeq
   let product= allProducts.filter(item=>item.id==productId)
   product=product[0]
    setproductDetails({...product})
  }   

  const filterRelatedProducts=()=>{
    let relatedProducts=allProducts.filter(item=>{
      // eslint-disable-next-line eqeqeq
      return (item.category===productDetails.category&&item.id!=productId)
    })
    relatedProducts=relatedProducts.slice(0,4)
    setrelatedProducts([...relatedProducts])
  }

  useEffect(()=>{
    getData()
   },[productId])

   useEffect(()=>{
    getDataById()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   },[allProducts])
 
   useEffect(()=>{
    filterRelatedProducts()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   },[productDetails])
 

const handleQuantityChange =(symbol)=>{
  // eslint-disable-next-line no-unused-expressions
  symbol===addSymbol?setquantity((prv)=>prv+1):quantity>1?setquantity((prv)=>prv-1):"";
}

const addToCartItem = ()=>{
  const cartItem=addtoCartMethod(productDetails,state.cartItem,quantity)
  dispatch(onCartUpdate(cartItem))
  dispatch(cartLengthUpadte(cartItem?.length))
}
const handleProceedToCart=()=>{
  Navigation(`/${cart}`);
  scrollToTop();
}


  return (
    <section className='pdp_section d_f jc_c fd_c'>
      <div className='wrapper d_f fd_r '>
        <div className='leftpart d_f jc_c al_c'  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <img src={cabbage} alt={"img"}/>
        </div>
        <div className='rightpart' data-aos="fade-up" data-aos-duration="3000">
          <p className='title'>{productDetails.name}</p>
          <div className='rating'>{productDetails.rating} 
          {convertRatingToStar(productDetails.rating)}
          </div>
          <p className='price'>{currencySymbol}{productDetails.price}{perSybmol}</p>
          <div className='description'>{}{productDetails.description}</div>
          <div className='quantity d_f fd_r jc_c'>
            <div className={`subQuantity c_p ${quantity===1?"disableAction":""}`} onClick={()=>handleQuantityChange(minusSymbol)}>{minusSymbol}</div>
            <div className='currentQuantity d_f al_c'>{quantity}</div>
            <div className='addQuantity c_p' onClick={()=>handleQuantityChange(addSymbol)}>{addSymbol}</div>
          </div>
          <div className='button_section d_f jc_sa'>
          <button className='addToCartButton c_p' onClick={addToCartItem}>{addtoCart}</button>
          <button className='proceedToCart c_p' onClick={handleProceedToCart}>{ProceedToCart}</button>
          </div>
        </div>
      </div>
      <HorizontalLine/>
      <div className='realtedItem'>
          <p className='realtedItem-title'>{realtedItemTitle}</p>
          <p className='realtedItem-subtitle'>{realtedItemSubTitle}</p>
          <div className='realtedItem_section d_f fd_r jc_sb' data-aos="fade-up" data-aos-duration="2000">
          {relatedProducts.map(item=><Item key={item.id} data={item}/>)}
          </div>
        </div>
    </section>
  )
}

export default PDP