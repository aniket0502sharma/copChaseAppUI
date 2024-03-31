// src/components/ResultPage.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getResult } from '../utils/api';
import { Avatar, Box, Button, Card, CardContent, CardHeader, CardMedia, Typography, styled } from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
  width: 300,
  margin: theme.spacing(2),
  height: 200,
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(7),
  height: theme.spacing(7),
}));
function ResultPage() {
  const [cop, setCop] = useState();
  const getFinalResult = async () => {
    const response = await getResult();
    console.log(response.data);
    setCop(response.data.cop)
   
  }
  useEffect(() => {

   getFinalResult();
  }, []);
  return (
    <div>
      <Box className= 'main-container' sx={{display: 'flex', height:'100vh', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <Box className='welcome-text-box'>
      <Typography variant='h2' color='whitesmoke'>Winner!!!</Typography>
      </Box>
      <Box sx={{padding:'10px'}}>
        {cop && 
      <StyledCard>
      <CardHeader
        avatar={<StyledAvatar src={cop.image} alt={cop.name} />}
        title={<Typography variant="h6" sx={{ fontWeight: 'bold' }}>{cop.name}</Typography>}
        subheader={cop.profile}
      />
      <CardContent>
        <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
          {cop.post}
        </Typography>
         <Typography variant="body2" color="textSecondary">
          City: {cop.selectedcity}
        </Typography> 
         
        <Typography variant="body2" color="textSecondary">
          Vehicle: {cop.selectedvehicle}
        </Typography>
        
       
      </CardContent>
    </StyledCard>}
        </Box>
     
      </Box>
    </div>
  );
}

export default ResultPage;
