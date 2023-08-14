import { StateConts } from "./Const";
import { InitialState } from "./InitialState";

export const reducer=(state=InitialState,action)=>{
    switch (action.type) {
        case StateConts.CARTLENGTHUPDATE:
            return {...state,cartItemLength:action.payload}
        case StateConts.CARTUPDATE:
            return {...state,cartItem:action.payload}
        case StateConts.USERDETAILSUPADTE:
            return {...state,userDetails:action.payload}
        default:
            return {...state};
    }
}

