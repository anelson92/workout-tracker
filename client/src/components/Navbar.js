import * as React from "react";
import { Link, Route, Router } from "react-router-dom";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Navbar() {
  const styles = {
    navStyles: {
      display: "flex",
      justifyContent: "spaceBetween",
      width: "100%",
    },
  };

  return (
    // <header style={styles.navStyles}>
    // <Box sx={{ flexGrow: 1 }}>
    <AppBar style={styles.navStyles} position="static">
      <Toolbar disableGutters>
        {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
        <FitnessCenterIcon
          //         onClick={() => handlePageChange("Home")}
          // sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Workout Tracker
        </Typography>
        <Box>
          <Link to={"/"}>Home</Link>
          <Link to={"dashboard"}>Dashboard</Link>
          <Link to={"login"}>Login</Link>
        </Box>
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
    // </Box>
    // </header>
  );
}
export default Navbar;
