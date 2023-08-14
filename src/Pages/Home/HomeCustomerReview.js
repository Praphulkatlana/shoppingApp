import React,{useState} from 'react'
import { customerReviewSectionDescription, customerReviewSectionSubtitle, customerReviewSectionTitle } from '../../Common/LongText'
import { shoppingReviews } from '../../Common/Text/Const'
import HomeCustomerReviewCard from './HomeCustomerReviewCard'
import { paginationNumbers } from './HomeUtlis'

const HomeCustomerReview = () => {

  const [currentReviewIndex, setcurrentReviewIndex] = useState(0)  
  const reviewArray=shoppingReviews;

  const dotsToShow=paginationNumbers(reviewArray.length);

  const initialreviewToShow=reviewArray.slice((currentReviewIndex*3),(currentReviewIndex*3)+3);

  const [reviewToShow, setreviewToShow] = useState([...initialreviewToShow])
  
  const onClickIndex=(index)=>{
    let startingIndex=index*3
    setcurrentReviewIndex(index);
    setreviewToShow([...reviewArray.slice((startingIndex),startingIndex+3)]);
  }

  const dotElement=Array.from({length: dotsToShow},(_,index)=>(
    <div
    key={index}
    className={`item c_p ${currentReviewIndex===index?"selected":""}`}
    onClick={()=>onClickIndex(index)}
    >
    </div>
  ))



  return (
    <section className='HomeCustomerReview d_f fd_c'>
        <div className='title_section d_f fd_c al_c'>
            <p className='subtitle'>{customerReviewSectionSubtitle}</p>
            <p className='title'>{customerReviewSectionTitle}</p>
            <p className='description'>{customerReviewSectionDescription}</p>
        </div>
        <div className='content_section d_f fd_r jc_c' >
          <div className='wrapper d_f fd_r jc_sa ' data-aos="zoom-out">
            {reviewToShow.map((item)=><HomeCustomerReviewCard key={item.id} img={item.img} description={item.description} name={item.title} position={item.position}/>)}
          </div>
        </div>
        <div className='dot_section d_f fd_r'>
          {dotElement}
        </div>
    </section>
  )
}

export default HomeCustomerReview