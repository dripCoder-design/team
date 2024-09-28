import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Engineering from '@mui/icons-material/Engineering';
import { useLogout } from '../hook/useLogout';
import { useAuthContext } from '../hook/useAuthContext';
import { motion } from 'framer-motion';
const Navbar = () => {
  const { logout } = useLogout()
  const {  user } = useAuthContext()
  const handleClick = ()=> {
logout()
  }

  return (
    <Grid container spacing={2}>
  <Grid item xs={12} md={12}>
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='warning'>
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <EngineeringIcon />
          </IconButton>
          <Typography variant="h4"  sx={{ flexGrow: 1 }} component={motion.div} initial={{ opacity:0}}animate= {{opacity:1}} transition={{duration:2}} >
            Kabuddy
          </Typography>
          {user && (
           <Stack direction="row"> 
          <Box sx={{ mx: 2 }} component={motion.div} initial={{ opacity:0}}animate= {{opacity:1}} > <span> {user.email} </span> </Box>
          <Box sx={{ mx: 2 }} component={motion.div} initial={{ opacity:0}}animate= {{opacity:1}} ><NavLink  to="/" >Home</NavLink></Box>
          <Box sx={{ mx: 2 }} component={motion.div} initial={{ opacity:0}}animate= {{opacity:1}} ><Button onClick={handleClick} > Log Out</Button> </Box>
          </Stack>
          ) }
          
         {!user && (
  <Stack direction="row"> 
   <Box sx={{ mx: 2 }} component={motion.div} initial={{ opacity:0}}animate= {{opacity:1}} ><NavLink  to="SignUp" >Sign Up</NavLink></Box>
   <Box sx={{ mx: 2 }} component={motion.div} initial={{ opacity:0}}animate= {{opacity:1}} ><NavLink  to="Login" >Login</NavLink></Box>
   </Stack>
   
         )}
       
        </Toolbar>
      </AppBar>
    </Box>
  
  </Grid>
  
</Grid>
  )
}

export default Navbar