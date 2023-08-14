import React, { useEffect, useState, useRef } from "react";
import {useNavigate} from"react-router-dom";
import {
  images,
  indexGifOption,
  indexGifSize,
  onlySpecialCharsRegex,
  SearchItem,
  type_submit,
  type_text,
} from "../../Common/Text/Const";
import Lottie from "lottie-react";
import { indexTitle } from "../../Common/LongText";
import { scrollToTop } from "../../Common/Components/CommonUtlis";
import { isVaildString } from "./HomeUtlis";

const HomeIndex = () => {
  
const styleMain = {
  backgroundImage: `url(${images[0]})`,
};

  const inputRef = useRef();
  const navigation=useNavigate()

 

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let keyword=inputRef.current.value;
   keyword=keyword.trim();
    if(isVaildString(keyword)) return    
    scrollToTop();
    navigation({
      pathname: "/shop",
      search: `?text=${keyword}&p=1`,
    });
    
    // navigation(redirection("shop",));
  };

  const [imgIndex, setimgIndex] = useState(0);


useEffect(() => {
    const interval = setInterval(() => {
      setimgIndex((prvIndex) => (prvIndex +1)%images.length );
    }, 4000);
   
    return () => {
      clearInterval(interval);
    };
  });

  useEffect(()=>{
    scrollToTop()
  },[])


  return (
    <section className="index_section d_f jc_c al_c fd_c" style={styleMain}>
      <div className="imgCarousal" style={{backgroundImage:`url(${images[imgIndex]})`}}></div>
      <div className="overlay"> </div>
      <h2 className="title"> {indexTitle}</h2>
      <div className="searchContainer d_f">
        <form onSubmit={handleFormSubmit} className="d_f fd_r">
          <input
            type={type_text}
            className="search"
            placeholder={SearchItem}
            ref={inputRef}
          />
          <button type={type_submit} className="btn c_p">

            <Lottie
              animationData={indexGifOption}
              style={{
                width: indexGifSize,
                height:indexGifSize,
              }}
            />

          </button>
        </form>
      </div>
    </section>
  );
};

export default HomeIndex;
