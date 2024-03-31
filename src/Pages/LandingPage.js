// src/components/LandingPage.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import counterSlice from '../Store/Reducers/counterSlice';
import { Box, Button, Typography, styled } from '@mui/material';
import { resetAPI } from '../utils/api';

function LandingPage() {
  const  dispatch = useDispatch()
  const selector = useSelector((state) => state.counter.count)


  const resetData = async () => {
    const response = await resetAPI();
    
  }
  useEffect(() => {
   resetData();
  }, []);
  return (
    <div>
      <Box className= 'main-container' sx={{display: 'flex', height:'100vh', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <Box className='welcome-text-box'>
      <Typography variant='h2' color='whitesmoke'>Welcome to the Fugitive Capture Game</Typography>
      </Box>
      <Box sx={{padding:'10px'}}>
      <Link to="/city">
        <Button variant="contained">Start</Button></Link>
        </Box>
     
      </Box>
    </div>
  );
}

export default LandingPage;
