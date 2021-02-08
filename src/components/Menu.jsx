import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { flexbox, height } from "@material-ui/system";
import logo from "../JupLogo.svg";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "80vh",
  },
  content: {
    fontFamily: "'Poppins', sans-serif",
    textAlign: "center",
  },
}));

const Menu = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <img src={logo} style={{ position: "fixed", top: "50%", left: "60%" }} />
      <Typography variant="h4" className={classes.content}>
        <Typography variant="h2" className={classes.content}>
          Welcome to JUPITER Apparel Company!!!
        </Typography>
        <br /> We have over 1000 employees spanned accross <br />
        Sri Lanka, Pakistan and Bangladesh.
      </Typography>
    </Box>
  );
};

export default Menu;
