import React,{useEffect, useState} from 'react'
import {useLocation} from "react-router-dom"
import Item from '../../Common/Components/Item';
import {  catagoryId, id_text, ListingIconSize, Searchresultfor, explore, value_text, all, vegetabels } from '../../Common/Text/Const';
import "./Listing.scss";
import {AiOutlineRight,AiOutlineLeft} from "react-icons/ai"
import { scrollToTop } from '../../Common/Components/CommonUtlis';


const Listing = () => {
  const params=useLocation()
  const queryParams=new URLSearchParams(params.search)
  const searchKeyWord=queryParams.get("text");
  const categoryKeyWord=queryParams.get("category");
  const pageIndex=queryParams.get("p")||1;

  const [paginationIndex, setpaginationIndex] = useState(pageIndex)
  const [selectedNavIndex, setselectedNavIndex] = useState(0)
  const [isPreDefineCatagory, setisPreDefineCatagory] = useState(false)
  const [itemsArray, setitemsArray] = useState([])
  const [dataToShow, setdataToShow] = useState([])
  const [mainData, setmainData] = useState([])
  const paginationItems=[1,2,3,4]
 
  
  const checkCategory=()=>{
  setisPreDefineCatagory(categoryKeyWord===explore);
    catagoryId.forEach((category)=>{

      if( category[value_text]===categoryKeyWord){
      setselectedNavIndex(category[id_text])
      setisPreDefineCatagory(true)
    }
  })
  }

  const onPageIndexChange=()=>{
    // fetch("")
    // .then(response=>response.json())
    // .then(data=>setListData(data))
    // .catch(err=>console.log(err))
  }

  const searchByText=(data)=>{
    const filterdata=data.filter(item=>{
      return item.name.toLowerCase().includes(searchKeyWord.toLowerCase())
    })
    setitemsArray([...filterdata])
  }
  
  useEffect(()=>{
    checkCategory()
    // onPageIndexChange();
  },[paginationIndex])

  const handleNavIndexChange =(index) => {
    setselectedNavIndex(index)
    if(searchKeyWord){
      filterDataByCategory(itemsArray,catagoryId[index].value)
    }else{
      filterDataByCategory(mainData,catagoryId[index].value)
    }
  }
  
const filterDataByCategory=(data=itemsArray,category=categoryKeyWord)=>{
  if(category==all){
    setdataToShow([...data])
    setitemsArray([...data])
    return data
  }
  let filteredData=data;
   filteredData=filteredData.filter(item=>item.category.toLowerCase()===category.toLowerCase());
  setdataToShow([...filteredData])
  return filteredData
}
const handlePaginationIndexChange = (index) => {
    setpaginationIndex(index)
    scrollToTop()
  }

  useEffect(()=>{
   getData()
  },[])

  useEffect(()=>{
    setdataToShow([...itemsArray])
  },[itemsArray])

  const getData=()=>{
    fetch('/Data.json')
    .then(response => response.json())
    .then(data=>
     { setmainData([...data])
      if(searchKeyWord){
        searchByText(data);
      }else{
        let filterData=filterDataByCategory(data)
        setitemsArray([...filterData])
      }

    }
      )
  }
  return (
    <section className='listingPage_section d_f al_c'>
      <div className='wrapper d_f al_c jc_c fd_c'>
        <div className='listingNavBar d_f fd_r jc_c al_c'>
         {catagoryId.map((item)=>{
         return (<div key={item.id} className={`selector c_p ${item.id===selectedNavIndex?"isSelected":""}`} onClick={()=>handleNavIndexChange(item.id)}>
          {item.value}
          </div>)
         })}
        </div>
       {!isPreDefineCatagory&&<p className='searchResultText'>{Searchresultfor}
        <span className='searchkeyword'>{`"${searchKeyWord}"`}</span>
        </p>}
        <div className='searchResult_container d_f fd_r jc_c' data-aos="fade-up" data-aos-duration="3000">
          {dataToShow&&dataToShow.length>0&&dataToShow.map(item=><Item key={item.id} data={item}/>)}
        </div>
        {/* <div className='pagination d_f jc_c'>
          <div className='item d_f jc_c al_c arrow arrowDisable c_p'> <AiOutlineLeft size={ListingIconSize}/></div>
          {paginationItems.map((item)=><div key={item} className={`item d_f jc_c al_c c_p ${paginationIndex==item?"selectedNumber":""}`} onClick={()=>handlePaginationIndexChange(item)}>{item}</div>)}
          <div className='item d_f jc_c al_c arrow c_p'><AiOutlineRight size={ListingIconSize}/></div>
          </div> */}
      </div>
    </section>
  )
}

export default Listing