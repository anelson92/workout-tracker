import * as React from "react";
import { Link, Route, Router } from "react-router-dom";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Auth from '../utils/auth';
import {LOGOUT} from '../utils/mutations'
import { useMutation } from '@apollo/client';

function Navbar({isLoggedIn}) {

  const [logout, { error }] = useMutation(LOGOUT);

  const logOutHandle = async (event) => {
    try {
      const { data } = await logout({
        headers: { authorization: Auth.getToken() }
      })
      Auth.logout(data.token)
    } catch (err) {
      console.error(err)
    }
  }

  const styles = {
    navStyles: {
      display: "flex",
      justifyContent: "spaceBetween",
      width: "100%",
    },

    linkBox: {
      margin: 10,
      textDecoration: "none",
      padding: "10px 15px",
      fontSize: "1.55vw",
      display: "flex",

      alignItems: "center",
    },

    linkStyles: {
      margin: 10,
      color: "white",
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
            mr: 10,
            display: { md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            fontSize: 35,
            letterSpacing: ".2rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Workout Tracker
        </Typography>


        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
          <Typography
            sx={{
              display: { xs: "flex", md: "flex" },
              // fontFamily: "monospace",
              fontWeight: 300,
              fontSize: 20,
              letterSpacing: ".1rem",
              color: "inherit",
              textAlign: "center",
              textDecoration: "none",
            }}
          >

          <Link style={styles.linkStyles} to={"/"}>
              Home
            </Link>
           {Auth.loggedIn ? ( 
            <>
            <Link style={styles.linkStyles} to={"dashboard"}>
              Dashboard
            </Link>
            <Link style={styles.linkStyles} to={"/"} onClick={logOutHandle}>
              Log Out
            </Link>
            </>
           ) :  ( <><Link style={styles.linkStyles} to={"login"}>
              Login
            </Link>
            <Link style={styles.linkStyles} to={"signup"}>
              Sign Up
            </Link>
            </>
            )}
          </Typography>
          </Box>
        
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
    
  );
}
export default Navbar;
