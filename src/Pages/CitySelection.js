import React, { useEffect, useState } from 'react';
import {  Box, Button, Grid, Typography } from '@mui/material';

import { mockCopsList } from '../mockData/mockData';

import CopCard from '../Components/copCard';
import { Link } from 'react-router-dom';
import { getCity, getCops, updateCop } from '../utils/api';
import CustomizedCityDialogs from '../Components/CityDialog';



const CitySelection = () => {
  const [copsList, setCopsList] = useState([]);
  const [nextButton, setNextButton] = useState();
  
  const [citiesList, setCitiesList] = useState([]);

  const getCopsList = async () => {
    const response = await getCops();
    setCopsList(response?.data);
    // console.log(response?.data);
  }

  useEffect(() => {
   
   if(citiesList.length === 0){
    getCityList();
    getCopsList();
   }
  
  }, []);


    const getCityList = async () => {
      const response = await getCity(); 
      if(response.data){
      setCitiesList(response.data);
    }
    }

    useEffect(() => {
      if(citiesList){
        getCopsList();
      }    
    }, [citiesList]);

    useEffect(() => {
    
    copsList.forEach(element => {
        if(element.selectedcity === ""){
          setNextButton(false)
        }
        else{
          setNextButton(true)
        }
      });  
    }, [copsList]);
    

    const handleCitySelect = (updatedCityList) => {
        setCitiesList(updatedCityList.cities);
    }

    const handleNext = () => {

    }
  return (
    <div className='main-container'>
      {copsList.length > 0 && <Grid container justifyContent="center" spacing={2} sx={{minHeight: '90vh'}} alignItems='center'>
      {copsList?.map((cop) => (
        <Grid item key={cop.copid}>
          <CopCard cop={cop} />
          {!cop.selectedcity && <CustomizedCityDialogs currentCop={cop.copid} cityList={citiesList} handleSelect={handleCitySelect}/>} 
        </Grid>
      ))}
    </Grid>}
    
    <Box sx={{ display:'flex', width: '100%', justifyContent:'center'}}>
      
    <Button variant='contained' disabled={!nextButton} onClick={() => handleNext()}>
      
      <Link to='/vehicle'>
        <Typography variant='overline' color= { nextButton ? 'white' : 'transparent'}>Proceed to Vehicle Selection</Typography>
      </Link></Button>
    
    </Box>
    </div>
  );
};

export default CitySelection;
