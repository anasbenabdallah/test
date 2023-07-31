import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Pets } from "@mui/icons-material";
import CustomizedInputBase from "./components/CustomizedInputBase";
import MenuIcons from "./components/MenuIcons/MenuIcons";
import { Link } from "react-router-dom";
import { Grid, Stack } from "@mui/material";
import NavbarTab from "./components/NavbarTab";
import IconButton from "@mui/material/IconButton";
import MoreIcon from "@mui/icons-material/MoreVert";

const CustomNavbar = () => {
  const user = localStorage.getItem("user");
  const myData = JSON.parse(user);
  const title = myData.role == "user" ? "SKILLRISE" : "SKILLRISECOMPANY";
  return (
    <Grid container>
      <AppBar position="fixed" variant="elevation" elevation={0}>
        <Toolbar
          sx={{
            bgcolor: "background.paper",
            padding: "0px!important",
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Grid item xs={10} sm={8} md={3} p={"0 0 0 24px"}>
            <Stack flexDirection={"row"} alignItems={"center"} gap={"1rem"}>
              <Typography
                variant="h4"
                sx={{
                  display: { xs: "none", lg: "block" },
                  color: "black",
                  textDecoration: "none",
                }}
                component={Link}
                to="/"
              >
                {title}
              </Typography>
              <Pets
                sx={{
                  display: { xs: "block", lg: "none" },
                  color: "black",
                }}
              />

              <CustomizedInputBase />
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <NavbarTab />
          </Grid>
          <Grid item xs={2} sx={{ display: { xs: "flex", sm: "none" } }}>
            <Box>
              <IconButton
                size="large"
                aria-label="show more"
                aria-haspopup="true"
                color="black"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid
            item
            sm={3}
            sx={{
              display: { sm: "flex", xs: "none" },
            }}
            justifyContent={"flex-end"}
            p={"0px 24px"}
          >
            <MenuIcons />
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Grid>
  );
};

export default CustomNavbar;
