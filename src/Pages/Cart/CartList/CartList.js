import React,{useContext, useEffect, useState} from 'react'
import "./CartList.scss";
import{useNavigate} from 'react-router-dom'
import {AiOutlineDelete} from"react-icons/ai"
import {MdExpandLess,MdExpandMore} from"react-icons/md"
import { Price,productList, Quantity, Total, cartListIconSize, yourWishlist, expandCollapseIconSize,showMoreText, showLessText, deleteSureMsg} from '../../../Common/Text/Const';
import { scrollToTop,deleteCartItem } from '../../../Common/Components/CommonUtlis';
import cartItemImg from '../../../Common/Media/Image/cartItemImg.png'
import { cartLengthUpadte, onCartUpdate } from '../../../State/Action';
import userContext from '../../../State/UserContext';


const CartList = ({title=yourWishlist,cartListData=[]}) => {

  const [showMore, setshowMore] = useState(true)
  const [currentDataList, setcurrentDataList] = useState([...cartListData])
  const { state,dispatch } = useContext(userContext); 
  const navigation=useNavigate()
  const handleItemClick = (id)=>{
    navigation({
      pathname: "/details",
      search: `?id=${id}`,
    });
    scrollToTop();
  }
  
  const handleExpandCollapseClick=()=>{
       setshowMore(!showMore);
  }
const ExpandCollapseIconShow=currentDataList.length>3;

let fliterDataList=currentDataList.filter((item,index)=>index<3);

const [itemListToRender, setitemListToRender] = useState([...fliterDataList])


const filterData=()=>{
  let tempDataList=showMore? fliterDataList:currentDataList;
  setitemListToRender([...tempDataList])
}
const onRemoveItem=(id)=>{
  const sure=window.confirm(deleteSureMsg)
if(!sure)return
console.log("cart",state.cartItem)
  const cartItem=deleteCartItem(id);
  dispatch(onCartUpdate(cartItem))
  dispatch(cartLengthUpadte(cartItem?.length))
  console.log("cart2",cartItem)
  console.log("cart3",state.cartItem)
}
useEffect(()=>{
  setcurrentDataList([...cartListData])
},[cartListData])
useEffect(()=>{
 filterData()
},[showMore,currentDataList])
console.log("last",itemListToRender)
  return (
    <section className='cartList_section' >
      <div className='wrapper d_f fd_c'>
        <h1 className='title'>{title}</h1>
      <table className='cartList_table'>
      <thread className="thread">
        <tr className='header_row'>
         {ExpandCollapseIconShow?
          <th className='c_p' onClick={handleExpandCollapseClick}>
            {showMore?<MdExpandMore size={expandCollapseIconSize}/> :<MdExpandLess size={expandCollapseIconSize}/>}
            <p className='showmoreless'>{showMore?showMoreText:showLessText}</p>
            </th>:
             <th>{}</th>
        }
          <th colSpan={2}>{productList}</th>
          <th>{Price}</th>
          <th>{Quantity}</th>
          <th>{Total}</th>
        </tr>
      </thread>
      <tbody>
        {itemListToRender.map((item)=><tr className='items_row' data-aos="fade-up" data-aos-duration="2000" key={item.id} >
          <td className='item-remove c_p'><span onClick={()=>onRemoveItem(item.id)}><AiOutlineDelete size={cartListIconSize}/></span></td>
          <td className='item-img'><img className='c_p' src={cartItemImg} alt='img' onClick={()=>handleItemClick(item.id)}/></td>
          <td className='item-productName c_p' onClick={()=>handleItemClick(item.id)}>
            <h3>{item.name}</h3>
            <p>{item.shortDescription}</p>
          </td>
          <td className='item-price'>{item.price}</td>
          <td className='item-quantity'>{item.quantity}</td>
          <td className='item-total'>{item.price*item.quantity}</td>
        </tr>)}
       
      </tbody>

      </table>
      </div>
    </section>
  )
}

export default CartList