import React from 'react'
import { features, homepageIndex1 } from '../../Common/Text/Const'
import HomeIndividualFeature from './HomeIndividualFeature'
const HomeFeatures = () => {
  return (
    <section className='home_feature d_f fd_r jc_sa' id={homepageIndex1} data-aos="fade-up" data-aos-duration="1000">
            {features.map(feature =>(
               <HomeIndividualFeature key={feature.id} logo={feature.logo} title={feature.title} subtitle={feature.subtitle}/>
            ))}
    </section>
  )
}

export default HomeFeatures