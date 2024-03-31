import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, Typography, Avatar, Box } from '@mui/material';
import {styled} from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
  width: 300,
  margin: theme.spacing(2),
  height: 200,
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(7),
  height: theme.spacing(7),
}));

const CopCard = ({ cop }) => {
  return (
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
        {cop.selectedcity && <Typography variant="body2" color="textSecondary">
          City: {cop.selectedcity}
        </Typography>}
        {cop.selectedvehicle &&
        <Typography variant="body2" color="textSecondary">
          Vehicle: {cop.selectedvehicle}
        </Typography>}
      </CardContent>
    </StyledCard>
  );
};

export default CopCard;