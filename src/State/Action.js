import { StateConts } from "./Const"

export const cartLengthUpadte=(payload)=>({
    type:StateConts.CARTLENGTHUPDATE,
    payload:payload,
})

export const onCartUpdate=(payload)=>({
    type:StateConts.CARTUPDATE,
    payload:payload

})
export const onUserDetailsUpdate=(payload)=>({
    type:StateConts.USERDETAILSUPADTE,
    payload:payload

})