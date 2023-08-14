import React from 'react'

const HomeIndividualFeature = ({logo,title,subtitle}) => {
  return (
    <div className='individualFeature d_f al_c fd_c'>
        <div className='logoDiv'>
            {logo}
        </div> 
        <h2>{title}</h2>
        <p>{subtitle}</p>
    </div>
  )
}

export default HomeIndividualFeature