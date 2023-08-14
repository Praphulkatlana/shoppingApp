import react,{useReducer} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import "./Common/Style/Mixin.scss"
import './App.css';
import Main from './Main';
import {BrowserRouter} from "react-router-dom"
import UserProvide from './State/UserProvide';

AOS.init({
  once: false,
});


const App=()=> {



  return (
    <div className="App">
      <UserProvide>
       <BrowserRouter>
         <Main/>
       </BrowserRouter>
      </UserProvide>
    </div>
  );
}

export default App;