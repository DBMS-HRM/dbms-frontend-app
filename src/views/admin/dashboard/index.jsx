import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import logo from "../../../JupLogo.svg";
import {useSelector} from "react-redux";
import {userSelectors} from "../../../store/user";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        display: "flex",
        flexDirection: "column",
        marginLeft: "15vw",
        marginTop: "10vh",
    },
    subContainer: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    content: {
        fontFamily: "'Poppins', sans-serif",
        fontWeight: "bold",
    },
    box: {
        height: "25vh",
        width: "20vw",
        margin: "2vh 10vw 5vh 0",
        backgroundColor: "#f5f0f0",
        borderRadius: "20px",
        boxShadow: "2px 5px #dbd5d5",
    },
    innerCont: {
        marginTop: "2vh",
        marginLeft: "2vw",
        display: "flex",
        flexDirection: "column",
    },
    bar: {
        margin: "30px 30px 0 0",
    },
}));

const Dashboard = (props) => {
    const classes = useStyles();
    const user = useSelector(userSelectors.user)

    return (
        <Box className={classes.mainContainer}>
            <Box>
                <Typography variant="h5">Welcome again!!!</Typography>
            </Box>
            <Box>
                <Typography>You have Logged in as {user.username}</Typography>
            </Box>
            <img src={logo} style={{ position: "fixed", top: "50%", left: "65%" }} />
        </Box>
    );
};

export default Dashboard;
