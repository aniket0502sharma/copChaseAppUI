import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import { Box, Grid } from '@mui/material';
import { cityData } from '../mockData/mockData';
import CityCard from './CityCard';
import { getVehicle, updateVehicle } from '../utils/api';
import VehicleCard from './VehicleCard';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    margin: '1rem',
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedVehicleDialogs({currentCop, vehicleList, handleSelect}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleVehicleSelect = async (v) => {
    const payLoad = {type: v.type, copid: currentCop}
    console.log(payLoad)  
      const response = await updateVehicle(payLoad);
      if(response){
        console.log(response)
        handleSelect(response);
        setOpen(false);
      }  
      // window.location.reload();
  };

  React.useEffect(() => {
    console.log(vehicleList)
   }, [vehicleList]);


  return (
    <React.Fragment>
      <Box sx={{ width: '100%', display:'flex', justifyContent: 'center'}}>
      <Button variant="contained" onClick={handleClickOpen}>
        Select Vehicle
      </Button>
      </Box>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
         Select Vehicle from List
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          {/* <CloseIcon /> */}
        </IconButton>
        <DialogContent dividers>
            {vehicleList.length > 0 && <Grid container spacing={2}>
        {vehicleList.map((v) => (
          <Grid key={v.id} item xs={12} sm={6} md={4}>
            <VehicleCard vehicle={v} handleDialogClose={handleVehicleSelect}/>
          </Grid>
        ))}
      </Grid>}
      
    </DialogContent>
        
      </BootstrapDialog>
    </React.Fragment>
  );
}