import { LOGOUT } from "../Constant"




export const Logout = () =>(dispatch)=>{
    localStorage.removeItem('token')
          dispatch({
              type:LOGOUT
          })
}