import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { confirmOrder, deleteOrder, deliveredOrder, getOrders, shipOrder } from '../../State/Admin/Order/Action';
import { Avatar, AvatarGroup, Button, Card, CardHeader, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const OrdersTable = () => {

  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);

  const handleClick = (event,index) => {

    const newAnchorElArray=[...anchorEl];
    newAnchorElArray[index]=event.currentTarget
    setAnchorEl(newAnchorElArray);
  };

  const handleClose = (index) => {
    const newAnchorElArray=[...anchorEl];
    newAnchorElArray[index]=null
    setAnchorEl(newAnchorElArray);
  };


  const dispatch=useDispatch();

  const {adminOrder}=useSelector(store=>store)

  useEffect(()=>{
    dispatch(getOrders())
  },[adminOrder.confirmed,adminOrder.shipped,adminOrder.delivered,adminOrder.deletedOrder])


  console.log("admin orders",adminOrder)

  const handleShippedOrder=(orderId)=>{
    dispatch(shipOrder(orderId))
    console.log("handle shipped order",orderId)
    handleClose()
  }

  const handleConfirmedOrder=(orderId)=>{
    dispatch(confirmOrder(orderId))
    console.log("handle confirmed order",orderId)

    handleClose()
  }

  const handleDeliveredOrder=(orderId)=>{
    dispatch(deliveredOrder(orderId))
    console.log("handle deliverd order",orderId)

    handleClose()
  }

  const handleDeleteOrder=(orderId)=>{
    dispatch(deleteOrder(orderId))
    console.log("handle delete order",orderId)
    
    handleClose()
  }
  return (
    <div className='p-10'> 

<Card className="mt-2 bg-[#1b1b1b]">

<CardHeader title="Recent Products"/>
 <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Image</TableCell>
          <TableCell align="left">Title</TableCell>
          <TableCell align="left">Id</TableCell>
          <TableCell align="left">Price</TableCell>
          <TableCell align="left">Status</TableCell>


        </TableRow>
      </TableHead>
      <TableBody>
        {adminOrder.orders?.slice(0,5).map((item,index) => (
          <TableRow
            key={item.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="">

              <AvatarGroup max={3} sx={{justifyContent:"start"}}>
                {item.orderItems.map((orderItem)=> <Avatar src={orderItem.product.imageUrl}></Avatar>)}
              </AvatarGroup>
            </TableCell>

            <TableCell align='left' scope="row">
              {item.orderItems.map((orderItem)=><p>{orderItem.product.title}</p>)}
            {/* {item.title} */}
            
            </TableCell>
            
            <TableCell align="left">{item.id}</TableCell>
            <TableCell align="left">{item.totalPrice}</TableCell>

            <TableCell align="left"><span className={` text-white px-5 py-2 rounded-full
            ${item.orderStatus==="CONFIRMED"?"bg-[orange]" :
              item.orderStatus==="SHIPPED"?"bg-[blue]":
              item.orderStatus==="PLACED"?"bg-[green]":
              item.orderStatus==="DELIVERED"?"bg-[red]":

              item.orderStatus==="PENDING"?"bg-[gray]":


              "bg-[red}"}`}>{item.orderStatus}</span></TableCell>


            



          
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>



</Card>
    </div>
  )
}

export default OrdersTable