import React from 'react'
import{useNavigate} from"react-router-dom";
import { scrollToTop } from '../../Common/Components/CommonUtlis';

const HomeCatagoryCard = ({img,tag}) => {
  const navigation=useNavigate();
    const style={ backgroundImage: `url(${img})` }

    const handleItemClick = (tag)=>{
      scrollToTop();
      navigation({
        pathname: "/shop",
        search: `?category=${tag}`,
      });
    }


  return (
    <div className='HomeCatagoryCard c_p' style={style} onClick={()=>handleItemClick(tag)}>
        <div className='tag'>{tag}</div>
    </div>
  )
}

export default HomeCatagoryCard