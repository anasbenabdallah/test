import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import {
 
  ShoppingCart,
  Search,

} from "@mui/icons-material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "../components/secondbar.css";
import logopic from  '../images/logo_black.svg'
import PersonIcon from '@mui/icons-material/Person';

const SecondNavBar = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white" }}
      className="second-navbar"
    >
      <Toolbar>
        <Typography variant="h6" className="title">
        <img
          src={logopic}
          alt="My Image"
          style={{
            maxWidth: "100%", // Make the image expand to its container width
            height: "20px",   // Automatically adjust the height based on the width
            margin: "30px -500px 20px 10px",
            display: "block",
          }}
        />
        </Typography>
        <div className="middle-section">
          <Typography className="nav-link">Canapé convertible</Typography>
          <Typography className="nav-link">Armoire lit & Lit</Typography>
          <Typography className="nav-link">Table extensible</Typography>
          <Typography className="nav-link">Déstockage</Typography>
          <Typography className="nav-link">Blog</Typography>
          <Typography className="nav-link">À propos</Typography>
        </div>
        <div className="right-section">
          <IconButton>
            <Search />
          </IconButton>
          <IconButton>
          <LocationOnIcon/>
          </IconButton>
          <IconButton>
          <PersonIcon/> 
          </IconButton>
          <IconButton>
          <ShoppingCart/>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default SecondNavBar;
