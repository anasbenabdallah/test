import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import {
  ShoppingCart,
  Search,
} from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../components/secondbar.css';
import logopic from '../images/logo_black.svg';
import PersonIcon from '@mui/icons-material/Person';

const SecondNavBar = () => {
  // Define the dropdown data for each link
  const dropdownData = {
    'Canapé convertible': ['Item 1', 'Item 2', 'Item 3'],
    'Armoire lit & Lit': ['Item 4', 'Item 5', 'Item 6'],
    'Table extensible': ['Item 7', 'Item 8', 'Item 9'],
  };

  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }} className="second-navbar">
      <Toolbar>
        <Typography variant="h5" className="title">
          <img
            src={logopic}
            alt="My Image"
            style={{
              maxWidth: '100%',
              height: '25px',
              margin: '20px -500px 20px 10px',
              display: 'block',
            }}
          />
        </Typography>
        <div className="middle-section">
          {/* Map over the dropdownData to generate the navigation links */}
          {Object.keys(dropdownData).map((link, index) => (
            <div
              key={index}
              className="nav-link-container"
              onMouseEnter={() => setActiveDropdown(link)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Typography className="nav-link">{link}</Typography>
              {/* Display the dropdown if activeDropdown matches the current link */}
              {activeDropdown === link && (
                <div className="dropdown">
                  {dropdownData[link].map((item, itemIndex) => (
                    <div key={itemIndex} className="dropdown-item">
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="right-section">
          <IconButton>
            <Search />
          </IconButton>
          <IconButton>
  <LocationOnIcon style={{ color: '#c5205b' }} />
</IconButton>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <ShoppingCart />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default SecondNavBar;
