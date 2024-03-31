import React from 'react';
import { Card, CardContent, Typography, CardMedia, Badge } from '@mui/material';

const VehicleCard = ({ vehicle, handleDialogClose }) => {
    const handleCardClick = (city) => {
        handleDialogClose(city);
    }
  return (
    <Card sx={{ maxWidth: 200, cursor:'pointer' }} onClick={() => handleCardClick(vehicle)}>
      <CardMedia
        component="img"
        height="80"
        image={vehicle.imageURL}
        alt={vehicle.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {vehicle.type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Range: {vehicle.range}
        </Typography>
      </CardContent>
      <Badge
    color="error"
    badgeContent={vehicle.count}
    overlap="circular"
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    sx={{
      position: 'relative',
      top: -170,
      right: -170,
    }}
  />
    </Card>
  );
};

export default VehicleCard;