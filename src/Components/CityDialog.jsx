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
import { getCity, updateCop } from '../utils/api';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    margin: '1rem',
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedCityDialogs({currentCop, cityList, handleSelect}) {
  const [open, setOpen] = React.useState(false);

  const [key, setKey] = React.useState(0);

React.useEffect(() => {
  setKey(prevKey => prevKey + 1);
}, [cityList]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCitySelect = async (city) => {
    const payLoad = {name: city.name, copid: currentCop}
    console.log(payLoad)  
      const response = await updateCop(payLoad);
      if(response){
        console.log(response)
        handleSelect(response);
        setOpen(false);
      }  
      // window.location.reload();
  };

  React.useEffect(() => {
    console.log(cityList)
   }, [cityList]);

  

  return (
   <div key={key}>
    <Box sx={{ width: '100%', display:'flex', justifyContent: 'center'}}>
      <Button variant="contained" onClick={handleClickOpen}>
        Select City
      </Button>
      </Box>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
         Select City from List
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
          {cityList.length > 0 && <Grid container spacing={2}>
        {cityList.map((city) => (
          <Grid key={city.id} item xs={12} sm={6} md={4}>
            <CityCard city={city} handleDialogClose={handleCitySelect}/>
          </Grid>
        ))}
      </Grid> }
      
    </DialogContent>
        
      </BootstrapDialog>
      </div>
  );
}