
import { Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import InboxIcon from '@mui/icons-material/Inbox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreateProductForm from './component/CreateProductForm';
import ProductsTable from './component/ProductsTable';
import OrdersTable from './component/OrdersTable.jsx';
import CustomersTable from './component/CustomersTable.jsx';
import Dashboard from './component/Dashboard.jsx';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AdminDashboard from './component/Dashboard.jsx';
import AdminNavbar from './AdminNavbar.jsx';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AddCardIcon from '@mui/icons-material/AddCard';
import ViewListIcon from '@mui/icons-material/ViewList';
import AccountBoxIcon from '@mui/icons-material/AccountBox';



const menu = [
    {name:"Dashboard",path:"/admin",icon:<DashboardIcon/>},
    {name:"Products",path:"/admin/products",icon:<Inventory2Icon/>},
    {name:"Customers",path:"/admin/customers",icon:<AccountBoxIcon/>},
    {name:"Orders",path:"/admin/orders",icon:<ViewListIcon/>},
    {name:"AddProduct",path:"/admin/product/create",icon:<AddCardIcon/>},
    // {name:"",path:""},
 
  ];


const Admin = () => {

    
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = useState(false);
    const navigate=useNavigate();


    
  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // border:"1px solid blue",
        height:"100%"
        

      }}
    >
     <>
     {/* {isLargeScreen && <Toolbar />} */}
      <List>
        {menu.map((item, index) => 
          <ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
            </ListItemIcon>
            <ListItemText>{item.name}</ListItemText>   
            </ListItemButton>
          </ListItem>
        )}
      </List>
     </>

      <List  >
      
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleIcon/>

              </ListItemIcon>
              <ListItemText>Account</ListItemText>
            </ListItemButton>
          </ListItem>
    
      </List>
    </Box>
  );



   
  return (


    

        <div className='relative flex h-[100vh]'>
          <CssBaseline/> <AdminNavbar/>
          <div  className='shadow-lg shadow-gray-600 w-[15%]  h-[90vh] fixed top-20 ' >
            {drawer}
          </div>
          <div className='w-[85%] h-[90vh] ml-[15%]  sticky top-20 '>

            <Routes>
              <Route path='/' element={<AdminDashboard/>}></Route>
              <Route path='/product/create' element={<CreateProductForm/>}></Route>
              <Route path='/products' element={<ProductsTable/>}></Route>
              <Route path='/orders' element={<OrdersTable/>}></Route>
              <Route path='/customers' element={<CustomersTable/>}></Route>

            </Routes>
          </div>

        </div>

    

  )
}

export default Admin