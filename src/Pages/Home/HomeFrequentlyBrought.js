import React, { useEffect,useState } from 'react'
import Item from '../../Common/Components/Item'
import { FrequentlyBrought_description, FrequentlyBrought_subtitle, FrequentlyBrought_title } from '../../Common/LongText'


const HomeFrequentlyBrought = () => {
  const [featureProduct, setfeatureProduct] = useState([])
  const getData=()=>{
    fetch('/Data.json')
    .then(response => response.json())
    .then(responseData=>{
      let data=responseData.splice(0,8)
      setfeatureProduct([...data])})
    .catch(err=>console.log("error while fetch",err))
  }

  useEffect(()=>{
    getData()
  },[])
 

  return (
    <section className=' HomeFrequentlyBrought_section d_f fd_c' >
        <div className='title_container t_a_c'>
            <h4>{FrequentlyBrought_subtitle}</h4>
            <h2>{FrequentlyBrought_title}</h2>
            <p>{FrequentlyBrought_description}</p>
        </div>
        <div className='items_container d_f fd_r jc_c' >
          <div className='wrapper d_f fd_r jc_sa' data-aos="fade-up" data-aos-duration="2000" >
         {featureProduct.map((item)=><Item key={item.id}data={item}/>)}
         
          </div>
        </div>
    </section>
  )
}

export default HomeFrequentlyBrought