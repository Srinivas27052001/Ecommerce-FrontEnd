// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import { Avatar, CardHeader, Pagination } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux";
import { getAllCustomers } from '../../State/Auth/Action'
import { border } from '@mui/system'



const CustomerTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector(store => store)

  console.log("auth", auth)

  useEffect(() => {
    console.log("customer table use effect")
    dispatch(getAllCustomers(localStorage.getItem("jwt")))
  }, [])
  console.log("customer table ")
  return (
    <div className='p-10'>
      <Card className="mt-2 bg-[#1b1b1b]">
        <CardHeader
          title='New Customers'
          sx={{ pt: 2, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
          action={<Typography onClick={() => navigate("/admin/customers")} variant='caption' sx={{ color: "blue", cursor: "pointer", paddingRight: ".8rem" }}>View All</Typography>}
          titleTypographyProps={{
            variant: 'h5',
            sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' }
          }}
        />
        <TableContainer>
          <Table sx={{ minWidth: 390, }} className='border-black' aria-label='table in dashboard'>
            <TableHead >
              <TableRow>
                <TableCell><b>Image</b></TableCell>
                <TableCell><b>Name</b></TableCell>
                <TableCell><b>Email</b></TableCell>
              </TableRow>

            </TableHead>
            <TableBody>
              {auth.customers?.map(item => (
                <TableRow hover key={item?.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                  <TableCell> <Avatar sx={{ width: 46, height: 46, bgcolor: "#9155fd" }}>{item.firstName[0].toUpperCase()}</Avatar> </TableCell>
                  <TableCell>{item.firstName} {item.lastName}</TableCell>
                  <TableCell>{item.email}</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      </div>
  )
}

export default CustomerTable
