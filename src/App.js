import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "./components/dashboardL/navbar/Navbar"
import { Box,Toolbar } from '@material-ui/core'
const drawerWidth = 240;
const App = () => {
  return (
    <>
       
        <Box sx={{ display: {sm:'flex',md:'flex',lg:'flex'} }}>
          <Navbar/> 
          <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${240}px)` } }}
          >
          <Toolbar />
          <Outlet/>
        </Box>       

        </Box>
    </>

  )
}

export default App