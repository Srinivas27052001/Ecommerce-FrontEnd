import { Box, Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../../../State/Order/Action'
import { useNavigate } from 'react-router-dom'

const DeliveryAddressForm = ({handleNext}) => {

    const dispatch=useDispatch();
    const navigate =useNavigate();
    const {auth}=useSelector(store=>store)
    const [selectedAddress, setSelectedAddress] = useState(null);

    console.log("auth",auth)

    

    const handleSubmit=(e)=>{
            e.preventDefault();
        
        const data=new FormData(e.currentTarget)

        const address ={
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            streetaddress:data.get("address"),
            city:data.get("city"),
            state:data.get("state"),
            zipCode:data.get("zip"),
            mobile:data.get("phoneNumber")


        }

           const orderData={address,navigate}
        dispatch(createOrder(orderData))

        console.log("address",orderData);
        // handleNext();
    
    }

    const handleCreateOrder = (item) => 
      
      {
           console.log("item",item)
        
        // const orderData1={ address:item, navigate}
        dispatch(createOrder({address:item,navigate}));
        // console.log(orderData1)
        // handleNext();
    
      };



    return (
        <div>
            <Grid container spacing={4}>
            <Grid item xs={12} lg={5}>
        <Box className="border rounded-md shadow-md h-[40.5rem] overflow-y-scroll ">
          {auth.user?.address.map((item) => (
            <div
              onClick={() => setSelectedAddress(item)}
              className="p-5 py-7 border-b cursor-pointer"
            >
              {" "}
              <AddressCard address={item} />
              {selectedAddress?.id === item.id && (
                <Button
                  sx={{ mt: 2 }}
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={()=>handleCreateOrder(item)}
                >
                  Deliverd Here
                </Button>
              )}
            </div>
          ))}
        </Box>
      </Grid>

                <Grid item xs={12} lg={7}>
                    <Box className="border rounded-s-md shadow-md p-5">

                        <form  onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                     <TextField
                                     required
                                     id='firstName'
                                     name='firstName'
                                     label='FirstName'
                                     fullWidth
                                     autoComplete='given name'
                                     autoSave=''
                                     />
                                    
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                     <TextField
                                     required
                                     id='lastName'
                                     name='lastName'
                                     label='LastName'
                                     fullWidth
                                     autoComplete='given name'
                                     autoSave=''
                                     />
                                    
                                </Grid>
                                <Grid item xs={12} >
                                     <TextField
                                     required
                                     id='address'
                                     name='address'
                                     label='Address'
                                     fullWidth
                                     autoComplete='given name'
                                     multiline
                                     rows={4}
                                     />
                                    
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                     <TextField
                                     required
                                     id='city'
                                     name='city'
                                     label='City'
                                     fullWidth
                                     autoComplete='given name'
                                     />
                                    
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                     <TextField
                                     required
                                     id='state'
                                     name='state'
                                     label='State/Province/Region'
                                     fullWidth
                                     autoComplete='given name'
                                     />
                                    
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                     <TextField
                                     required
                                     id='zip'
                                     name='zip'
                                     label='Zip/Postal Code'
                                     fullWidth
                                     autoComplete=' shipping postal code'
                                     />
                                    
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                     <TextField
                                     required
                                     id='phoneNumber'
                                     name='phoneNumber'
                                     label='Phone Number'
                                     fullWidth
                                     autoComplete='given name'
                                     />
                                    
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                <Button sx={{ py:1.5 ,mt:2,bgcolor:"RGB(145 85 253)"}} size='large' variant='contained' type='submit'>Delivery Here</Button>
                                    
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>

        </div>
    )
}

export default DeliveryAddressForm