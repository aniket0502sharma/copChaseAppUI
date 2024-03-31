import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const CityCard = ({ city, handleDialogClose }) => {
    const handleCardClick = (city) => {
        console.log('card Clicked', city)
        handleDialogClose(city);
    }
  return (
    <Card sx={{ maxWidth: 200, cursor:'pointer' }} onClick={() => handleCardClick(city)}>
      <CardMedia
        component="img"
        height="80"
        image={city.imageUrl}
        alt={city.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {city.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Distance from Current City: {city.distance}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CityCard;