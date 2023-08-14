import {useNavigate} from "react-router-dom"
import { cart, cartNumber } from "../Text/Const";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { itemAddedToCart, itemRemoveFromCart } from "../LongText";

export const notify = (message) =>toast(message)
export const NavigationFn = (link) => {
    const Navigation=useNavigate();
    // const customNavigation = ()=>{
        Navigation(link);
    // }
    // return customNavigation;
 
}


export const getCurrentYear = () =>{
    return (new Date().getFullYear())
}

export const scrollToTop=()=>{
    window.scrollTo( {top: 0,behavior: 'smooth'});
}

export const navigateTo=(path)=>{
scrollToTop();
}

export const getCartData=()=>{
    let cartData=JSON.parse(localStorage.getItem(cart))||[];
    return cartData;
}
export const getCartDateLength=()=>{
    let cartDataLength=localStorage.getItem(cartNumber)||0;
    return cartDataLength;
}

export const addtoCartMethod=(data,cartItems=[],quantity=1)=>{
// let previousSavedCartData=getCartData();
let previousSavedCartData=cartItems;

if(previousSavedCartData===null){
    data.quantity=quantity
    previousSavedCartData=[data]
}else{
    const existingItem=previousSavedCartData.find(item=>item.id===data.id)
    if(existingItem){
        existingItem.quantity +=quantity
    }else{
        data.quantity=1
        previousSavedCartData.push(data)
    }
}
const previousSavedCartData_stringify= JSON.stringify(previousSavedCartData)
// previousSavedCartData=previousSavedCartData===null?[data]:previousSavedCartData.push(data)

localStorage.setItem(cart,previousSavedCartData_stringify);
notify(itemAddedToCart)
return previousSavedCartData

}

export const deleteCartItem=(id)=>{
    let previousSavedCartData=getCartData();
    let cartItemNumber=previousSavedCartData&&previousSavedCartData.length?
                        previousSavedCartData.length:0
    previousSavedCartData= previousSavedCartData.filter((item)=>item.id!==id);
    const previousSavedCartData_json=JSON.stringify(previousSavedCartData)

    localStorage.setItem(cart,previousSavedCartData_json);
    localStorage.setItem(cartNumber,--cartItemNumber);
    notify(itemRemoveFromCart);
    return previousSavedCartData;
}



export const calculateDeliveryCharges=()=>{
    return 5;
}
export const calculateSubTotal=()=>{
    let subtotalPricevalue=0;
   getCartData().forEach((item)=>{
  subtotalPricevalue+=(item.price*item.quantity)
})
return subtotalPricevalue
} 

export const userDetailUpdate=(data)=>{
}