import React, { useEffect, useState } from 'react';
import {  Box, Button, Grid, Typography } from '@mui/material';


import CopCard from '../Components/copCard';
import { Link } from 'react-router-dom';
import { getCity, getCops, getVehicle, updateCop } from '../utils/api';
import CustomizedCityDialogs from '../Components/CityDialog';
import CustomizedVehicleDialogs from '../Components/VehicleDialog';



const VehicleSelection = () => {
  const [copsList, setCopsList] = useState([]);
  const [nextButton, setNextButton] = useState();
  
  const [vehicleList, setVehicleList] = useState([]);

  const getCopsList = async () => {
    const response = await getCops();
    setCopsList(response?.data);
    console.log(response?.data);
  }

  useEffect(() => {
   if(vehicleList.length === 0){
    getVehicleList();
    getCopsList();
   }
  }, []);


    const getVehicleList = async () => {
      const response = await getVehicle();
      // setCityList(response?.data);
      console.log(response.data)
      if(response.data){
      setVehicleList(response.data);
    }
    }

    useEffect(() => {
      if(vehicleList){
        getCopsList();
      }    
    }, [vehicleList]);

    useEffect(() => {
    
    copsList.forEach(element => {
        if(element.selectedvehicle === ""){
          setNextButton(false)
        }
        else{
          setNextButton(true)
        }
      });  
    }, [copsList]);
    

    const handleCitySelect = (updatedVehicleList) => {
        setVehicleList(updatedVehicleList.vehicles);
    }

    const handleNext = () => {

    }
  return (
    <div className='main-container'>
      {copsList.length > 0 && <Grid container justifyContent="center" spacing={2} sx={{minHeight: '90vh'}} alignItems='center'>
      {copsList?.map((cop) => (
        <Grid item key={cop.copid}>
          <CopCard cop={cop} />
          {!cop.selectedvehicle && <CustomizedVehicleDialogs currentCop={cop.copid} vehicleList={vehicleList} handleSelect={handleCitySelect}/>} 
        </Grid>
      ))}
    </Grid>}
    
    <Box sx={{ display:'flex', width: '100%', justifyContent:'center'}}>
      
    <Button variant='contained' disabled={!nextButton} onClick={() => handleNext()}>
      
      <Link to='/result'>
        <Typography variant='overline' color= { nextButton ? 'white' : 'transparent'}>Get Result</Typography>
      </Link></Button>
    
    </Box>
    </div>
  );
};

export default VehicleSelection;
