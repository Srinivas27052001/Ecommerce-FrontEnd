import axios from "axios"
import { API_BASE_URL } from "../../config/apiConfig";
import { GET_ALL_CUSTOMERS_FAILURE, GET_ALL_CUSTOMERS_REQUEST, GET_ALL_CUSTOMERS_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";


const token=localStorage.getItem("jwt");
const registerRequest=()=>({type:REGISTER_REQUEST});
const registerSuccess=(user)=>({type:REGISTER_SUCCESS,payload:user});
const registerFailure=(error)=>({type:REGISTER_FAILURE,payload:error});

export const register=(userData)=> async(dispatch)=>{

    dispatch(registerRequest())
    try{
        const response=await axios.post(`${API_BASE_URL}/auth/signup`,userData);
        const user=response.data;
        if(user.jwt){
            localStorage.setItem("jwt",user.jwt)
        }
        console.log("register",user)
        dispatch(registerSuccess(user.jwt))

    }catch(error){
        console.log("error",error)
         dispatch(registerFailure(error.message))
    }
}






const loginRequest=()=>({type:LOGIN_REQUEST});
const loginSuccess=(user)=>({type:LOGIN_SUCCESS,payload:user});
const loginFailure=(error)=>({type:LOGIN_FAILURE,payload:error});

export const login=(userData)=> async(dispatch)=>{

    dispatch(loginRequest())
    try{
        const response=await axios.post(`${API_BASE_URL}/auth/signin`,userData);
        const user=response.data;
        if(user.jwt){
            localStorage.setItem("jwt",user.jwt)
        }
        console.log("login",user)
        dispatch(loginSuccess(user.jwt))

    }catch(error){
         dispatch(loginFailure(error.message))
    }
}

const getUserRequest=()=>({type:GET_USER_REQUEST});
const getUserSuccess=(user)=>({type:GET_USER_SUCCESS,payload:user});
const getUserFailure=(error)=>({type:GET_USER_FAILURE,payload:error});


export const getUser=(jwt)=> async(dispatch)=>{

    dispatch(getUserRequest())
    try{
        const response=await axios.get(`${API_BASE_URL}/api/users/profile`,{
              headers:{
                "Authorization":`Bearer ${jwt}`
              }
        });
        const user=response.data;
       console.log("user",user)
        dispatch(getUserSuccess(user))

    }catch(error){
         dispatch(getUserFailure(error.message))
    }
}


export const getAllCustomers = (jwt) => {
    return async (dispatch) => {
      console.log("jwt - ",jwt)
      dispatch({ type: GET_ALL_CUSTOMERS_REQUEST });
      try {
        const response = await axios.get(`${API_BASE_URL}/api/admin/users`,{
          headers:{
            "Authorization":`Bearer ${jwt}`
          }
        });

        console.log(response)
        const users = response.data;
        console.log("users",users)
        

        dispatch({ type: GET_ALL_CUSTOMERS_SUCCESS, payload: users });
        console.log("All Customers",users)
      } catch (error) {
        const errorMessage = error.message;
        console.log(error)
        dispatch({ type: GET_ALL_CUSTOMERS_FAILURE, payload: errorMessage });
      }
    };
  };



export const logout=(jwt)=>(dispatch)=>{
    dispatch({type:LOGOUT,payload:null})
    localStorage.clear();

}

