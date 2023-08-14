import React from 'react'

const HomeCustomerReviewCard = ({img,description,name,position}) => {
  return (
    <div className='HomeCustomerReviewCard_section'>
        <div className='imgContainer'>
            <img src={img} alt=""/>
        </div>
        <div className='name_positionContainer'>
            <p className='name'>{name}</p>
            <p className='position'>{position}</p>
        </div>
        <div className='descriptionContainer'>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default HomeCustomerReviewCard