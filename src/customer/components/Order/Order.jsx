import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import OrderCard from './OrderCard'
import { getOrderHistory } from '../../../State/Order/Action'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@mui/system'

const orderStatus=[
    {lable:"On The Way",value:"on_the_way"},
    {lable:"Delivered",value:"delivered"},
    {lable:"Cancelled",value:"cancelled"},
    {lable:"Returned",value:"returned"},
    
    


]
const Order = () => {

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const {order}=useSelector(store=>store);

  useEffect(() => {
    dispatch(getOrderHistory({ jwt }));
  }, [jwt]);


  

  

  return (
    <div className='px:5 lg:px-20'>
     
     <Grid container sx={{justifyContent:"space-between"}}>

          <Grid item xs={2.5}>
            <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
               <h1 className='font-bold text-lg'>Filter</h1>
               <div className='space-y-4 mt-10'>
                <h1 className='font-semibold'>ORDER STATUS</h1>
                 
                 {orderStatus.map((option)=> <div className='flex items-center'>
                    <input className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500' type="checkbox"  defaultValue={option.value} />
                    <label className='ml-3 text-sm text-gray-600' htmlFor={option.value}>
                        {option.lable}
                    </label>
                </div>)}
               </div>

            </div>
          </Grid>
          <Grid item xs={9}>
          <Box className="space-y-5 ">
            {order.orders?.length>0 && order.orders?.map((order )=> {
              return order?.orderItems?.map((item,index)=> <OrderCard item={item} order={order} />)
            })}
          </Box>
           
          </Grid>
     </Grid>
    </div>
  )
}

export default Order