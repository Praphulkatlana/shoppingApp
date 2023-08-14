import { defaultEndDealDate, onlySpecialCharsRegex, outOfStarnumber, ratingIconSize } from "../../Common/Text/Const";
import {AiOutlineStar,AiFillStar} from "react-icons/ai";
import {BiSolidStarHalf} from "react-icons/bi";

export const convertRatingToStar = (rating)=>{
const outlineStar=Math.floor(rating);

let starRating=new Array(outOfStarnumber).fill(null).map((_,index)=> (<AiOutlineStar key={index} size={ratingIconSize}/>));
let index=0;
for(; index<outlineStar; index++){
  starRating[index]=<AiFillStar key={`fill_${index}`} size={ratingIconSize}/>;
}
// eslint-disable-next-line no-unused-expressions
outlineStar!==rating? starRating[index]=<BiSolidStarHalf key={`half_${index}`} size={ratingIconSize}/>:"";

return starRating;
}


export const paginationNumbers = (list, perPage = 3) => {
  return list % perPage === 0 ? list / perPage : Math.floor(list / perPage) + 1;
};

export const redirection=(pageName,searchStr)=>{
 return {
  pathname: `/${pageName}`,
  searchStr,
}
}

export const containsOnlySpecialCharacters=(str)=>{
  return onlySpecialCharsRegex.test(str);
  }

export const isVaildString=(str)=>{
  return str === ""
                || str.length === 0
                || onlySpecialCharsRegex.test(str)
   
}

export const convertRemainingTimeInMiliSeconds=(inputdate=defaultEndDealDate)=>{
  return Date.parse(inputdate);
}

  export const formateDay=(time)=>{
    return time<0?0:Math.floor(time/(3600000*24))
  }
  export const formateHours=(time)=>{
    return time<0?0:Math.floor(time/3600000%24)
  }
  export const formateMiutes=(time)=>{
    return time<0?0:Math.floor(time/60000%60)
  }
  export const formateSeconds=(time)=>{
    return time<0?0: Math.floor(time/1000%60)
  }



/*
// export const placeholderCreater =()=>{
// let placeholderArray=[];
//    return placeholderArray.flat();
// }

// function generateAlphabetArray(inputString) {
//     const alphabetArray = [];
//     const strLength = inputString.length;
  
//     for (let i = 1; i <= strLength; i++) {
//       alphabetArray.push(inputString.slice(0, i));
//       if(i===strLength){
//         alphabetArray.push(inputString.slice(0, i));
//         alphabetArray.push(inputString.slice(0, i));
//       }
//     }
  
//     for (let i = strLength - 1; i >= 1; i--) {
//       alphabetArray.push(inputString.slice(0, i));
//     }
//     return alphabetArray;
//   }

*/
 