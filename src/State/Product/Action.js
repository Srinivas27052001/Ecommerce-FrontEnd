
import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, SEARCH_PRODUCT_FAILURE, SEARCH_PRODUCT_REQUEST, SEARCH_PRODUCT_SUCCESS } from "./ActionType";
import { api, API_BASE_URL } from "../../config/apiConfig";

export const findProducts = (reqData) => async (dispatch) => {

    dispatch({type:FIND_PRODUCTS_REQUEST})
    console.log(reqData)
    
    const { colors, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize } = reqData;
    try{

      // /api/products?color=&size=&minPrice=0&maxPrice=10000&minDiscount=0&category=mens_kurta&stock=null&sort=price_high&pageNumber=0&pageSize=10
       
  const {data}= await api.get(`api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
  console.log("productdata",data)


  // const {data}= await api.get("api/products?color=&size=&minPrice=0&maxPrice=10000&minDiscount=0&category=mens_kurta&stock=null&sort=price_low&pageNumber=0&pageSize=10")
  // console.log("productdata",data)
  // console.log("jekjkr")


  dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data})
    }catch(error){
        console.log("dfs")
        dispatch({type:FIND_PRODUCTS_FAILURE,payload:error.message})

        

    }
}

// find products by id
export const findProductsById = (reqData) => async (dispatch) => {

    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})
    const { productId} = reqData;
    console.log("productId",productId)
    
    try{
       
  const {data}= await api.get(`/api/products/id/${productId}`)
  console.log(data)
  dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data})
    }catch(error){
        dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.message})
        

    }
}


export const createProduct = (product) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_PRODUCT_REQUEST });
  
      const { data } = await api.post(
        `/api/admin/products/`,
        product
      );
  
      dispatch({
        type: CREATE_PRODUCT_SUCCESS,
        payload: data,
      });
  
      console.log("created product ", data);
    } catch (error) {
      dispatch({
        type: CREATE_PRODUCT_FAILURE,
        payload: error.message,
      });
    }
  };


  export const deleteProduct = (productId) => async (dispatch) => {
    console.log("delete product action",productId)
    try {
      dispatch({ type: DELETE_PRODUCT_REQUEST });
  
      let {data}=await api.delete(`/api/admin/products/${productId}/delete`);
  
      dispatch({
        type: DELETE_PRODUCT_SUCCESS,
        payload: data,
      });
  
      console.log("product delte ",data)
    } catch (error) {
      console.log("catch error ",error)
      dispatch({
        type: DELETE_PRODUCT_FAILURE,
        payload: error.message,
      });
    }
  };



  export const searchProduct = (keyword) => async (dispatch) => {
    try {
      dispatch({ type: SEARCH_PRODUCT_REQUEST });
  
      const { data } = await api.get(`/api/products/search`,{
        params:{
          q:keyword
        }
      });
  
      console.log("products by  id : ", data);
      dispatch({
        type: SEARCH_PRODUCT_SUCCESS ,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SEARCH_PRODUCT_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  