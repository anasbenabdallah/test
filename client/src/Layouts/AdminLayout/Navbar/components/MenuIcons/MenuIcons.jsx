import React from "react";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import MoreIcon from "@mui/icons-material/MoreVert";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/material";
import ProfileMenu from "../ProfileMenu";
import NotificationBell from "./Notification";

const MenuIcons = () => {

  return (
    <div>
      <Box sx={{ display: { xs: "none", md: "flex", alignItems: "center" } }}>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <NotificationBell />
        <ProfileMenu />
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="show more"
          aria-haspopup="true"
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </Box>
    </div>
  );
};

export default MenuIcons;
