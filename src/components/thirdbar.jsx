import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Flag, House, Star, ThumbUp } from '@mui/icons-material';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="flag">
          <Flag sx={{ color: 'black' }} />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1, fontSize: '14px', color: 'grey' }}>
          Fabrication Italienne
        </Typography>

        <IconButton color="inherit" aria-label="house">
          <House sx={{ color: 'black' }} />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1, fontSize: '14px', color: 'grey' }}>
          Garantie 10 ans
        </Typography>

        <IconButton color="inherit" aria-label="star">
          <Star sx={{ color: 'black' }} />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1, fontSize: '14px', color: 'grey' }}>
          Noté Excellent sur Trustpilot
        </Typography>

        <IconButton color="inherit" aria-label="like">
          <ThumbUp sx={{ color: 'black' }} />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1, fontSize: '14px', color: 'grey' }}>
          Expert depuis 1980
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
