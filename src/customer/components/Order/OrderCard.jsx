import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';
// import { StarIcon } from '@heroicons/react/24/outline';
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import StarIcon from "@mui/icons-material/Star";

const OrderCard = ({item,order}) => {

    const navigate=useNavigate();
    console.log("items ", item,order,order.orderStatus);

  return (
    <div onClick={()=>navigate(`/account/order/${order?.id}`)} className='p-5 shadow-md shadow-gray hover:shadow-2xl border'>


        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>

            <Grid item xs={6} >
                <div className='flex cursor-pointer '>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src={item?.product.imageUrl} alt="" />
                   <div className='ml-5' space-y-2>
                         <p className=''>{item?.product.title}</p>
                         <p className='opacity-50 text-sm font-semibold '>Size: {item?.size}</p>
                         <p className='opacity-50 text-sm font-semibold '>Color:{item?.product?.color}</p>
                   </div>
                </div>

            </Grid>
               <Grid item xs={2}>
               <p>₹{item?.price}</p>
        </Grid>
        <Grid item xs={4}>
          <p className="space-y-2 font-semibold">
            {order?.orderStatus === "DELIVERED"? (
             <>
             <FiberManualRecordIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 p-0 mr-2 text-sm"
                />
                <span>Delivered On Mar 03</span>
                 <p className="text-xs">Your Item Has Been Delivered</p>

            </>
            ):  <>
               
                <AdjustIcon
                sx={{ width: "15px", height: "15px" }}
                className="text-green-600 p-0 mr-2 text-sm"
              />
              <span>Expected Delivery On Mar 03</span>
              </>}
            
          </p>
         
          {item.orderStatus === "DELIVERED" && (
            <div
              onClick={() => navigate(`/account/rate/{id}`)}
              className="flex items-center text-blue-600 cursor-pointer"
            >
              <StarIcon sx={{ fontSize: "2rem" }} className="px-2 text-5xl" />
              <span>Rate & Review Product</span>
            </div>
          )}
               </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard