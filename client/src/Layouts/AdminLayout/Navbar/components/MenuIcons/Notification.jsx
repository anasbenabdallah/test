import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";

import {
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";

// sx styles
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: "1rem",
};

const actionSX = {
  mt: "6px",
  ml: 1,
  top: "auto",
  right: "auto",
  alignSelf: "flex-start",
  transform: "none",
};

const NotificationBell = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };

  return (
    <div>
      <React.Fragment>
        <Box sx={{ flexShrink: 0, ml: 0.75 }}>
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "profile-grow" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Badge badgeContent={17} color="primary">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            disableScrollLock={true}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                minWidth: 300,
                maxWidth: 400,
                "& .MuiAvatar-root": {
                  width: 50,
                  height: 50,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            {/*==============================|| Content ||==============================*/}

            <List
              component="nav"
              sx={{
                p: 0,
                "& .MuiListItemButton-root": {
                  py: 0.5,
                  "& .MuiAvatar-root": avatarSX,
                  "& .MuiListItemSecondaryAction-root": {
                    ...actionSX,
                    position: "relative",
                  },
                },
              }}
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar src="https://source.unsplash.com/WNoLnJo7tS8" />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="h6">
                      <Typography component="span" variant="subtitle2" noWrap>
                        Cristina Danny invited to join Meeting.
                      </Typography>{" "}
                    </Typography>
                  }
                  secondary="2 min Ago"
                />
              </ListItemButton>
              <Divider />
              <ListItemButton
                sx={{ textAlign: "center", py: `${12}px !important` }}
              >
                <ListItemText
                  primary={
                    <Typography color="primary" fontSize={"16px"}>
                      View all Notifications
                    </Typography>
                  }
                />
              </ListItemButton>
            </List>
          </Menu>
        </Box>
      </React.Fragment>
    </div>
  );
};

export default NotificationBell;
