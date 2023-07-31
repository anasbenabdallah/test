import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function CustomizedInputBase() {
  return (
    <Paper
      variant="outlined"
      square
      component="form"
      sx={{
        p: "2px 10px",
        display: "flex",
        alignItems: "center",
        borderRadius: "2rem",
        width: "15.5rem",
      }}
    >
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
      <IconButton type="button" sx={{ p: "5px" }} aria-label="search">
        <SearchIcon sx={{ color: "#7C7C7A" }} />
      </IconButton>
    </Paper>
  );
}
