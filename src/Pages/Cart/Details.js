import React,{useState,useRef,useContext, useEffect} from 'react'
import { notify } from '../../Common/Components/CommonUtlis';
import { userDetailsUpdated } from '../../Common/LongText';
import {yourDetail, email, name, mobile, type_submit, update, address, additionalMessage, type_text, emailRegx, mobileRegx, onlySpecialCharsRegex, dataErrorMessage, additionalMessage_placeholder } from '../../Common/Text/Const';
import { onUserDetailsUpdate } from '../../State/Action';
import userContext from '../../State/UserContext';

const Details = ({onGettingUserDetails}) => {
const nameRef=useRef();
const mobileRef=useRef();
const emailRef=useRef();
const addressRef=useRef();
const additionalMsgRef=useRef();


const [inputDataError, setinputDataError] = useState({
  Name:false,
  Email:false,
  Mobile:false,
  Address:false,
  Additional_Message:'',
})

const [isDataError, setisDataError] = useState(false)
const { state,dispatch } = useContext(userContext);
const {Name,Mobile,Email,Address}=state.userDetails

const checkDataError=()=>{
  let errorCheck={
    Name:nameRef.current.value.trim()===""||onlySpecialCharsRegex.test(nameRef.current.value.trim()),
    Email:!emailRegx.test(emailRef.current.value),
    Mobile:!mobileRegx.test(mobileRef.current.value),
    Address:addressRef.current.value.trim()===""||onlySpecialCharsRegex.test(addressRef.current.value.trim()),
    Additional_Message:false,
  }
   setinputDataError({...errorCheck})
  return Object.values(errorCheck).some(value=>value)

}
  const onSubmitDetails=(event)=>{
    event.preventDefault();  
    let isError=checkDataError();
    setisDataError(isError)

    if(!isError){
    let userData={
      Name:nameRef.current.value.trim(),
      Email:emailRef.current.value,
      Mobile:mobileRef.current.value,
      Address:addressRef.current.value.trim(),
      Additional_Message:additionalMsgRef,
    }
      dispatch(onUserDetailsUpdate(userData))
      onGettingUserDetails()
      notify(userDetailsUpdated)
  }
  }
  const checkUserDetails=()=>{
    return Name||Mobile||Email||Address===""?false:true
  }
  useEffect(()=>{
    if(checkUserDetails()){
      onGettingUserDetails()
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
    <h2>{yourDetail}</h2>
   {isDataError&&<p className='hasErrorText'>{dataErrorMessage}</p>}
      <form onSubmit={onSubmitDetails} className="d_f fd_c">

        <label>{name}</label>
        {/* <input type={type_text} name={name} value={userDetails.name} onChange={handleFormDataChange}/> */}
        <input type={type_text} ref={nameRef} value={Name} className={`${inputDataError.Name?"isError":""}`}/>

        <label>{mobile}</label>
        {/* <input type={type_number} name={mobile} value={userDetails.mobile} onChange={handleFormDataChange}/> */}
        <input type={type_text} ref={mobileRef} value={Mobile} className={`${inputDataError.Mobile?"isError":""}`}/>

        <label>{email}</label>
        {/* <input type={type_email} name={email} value={userDetails.email} onChange={handleFormDataChange}/> */}
        <input type={type_text} ref={emailRef} value={Email} className={`${inputDataError.Email?"isError":""}`}/>


        <label>{address}</label>
        {/* <input type={type_text} name={address} value={userDetails.address} onChange={handleFormDataChange}/> */}
        <input type={type_text} ref={addressRef} value={Address} className={`${inputDataError.Address?"isError":""}`}/>


        <label>{additionalMessage}</label>
        {/* <input type={type_text} name={additionalMessage_form} value={userDetails.Additional_Message} onChange={handleFormDataChange}/> */}
        <textarea ref={additionalMsgRef} placeholder={additionalMessage_placeholder}></textarea>

        <button type={type_submit}>{update}</button>

      </form>
    </>
  )
}

export default Details