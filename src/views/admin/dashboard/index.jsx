import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import logo from "../../../JupLogo.svg";

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

    return (
        <Box className={classes.mainContainer}>
            <Typography variant="h6" className={classes.content}>
                Remaining Leaves
            </Typography>
            <Box className={classes.subContainer}>
                <Box className={classes.box}>
                    <Box className={classes.innerCont}>
                        <Typography variant="h6" className={classes.content}>
                            Annual
                        </Typography>
                        <Typography
                            variant="h3"
                            className={classes.content}
                            style={{ marginTop: "10%" }}
                        >
                            10
                        </Typography>
                        <LinearProgress
                            variant="determinate"
                            value={50}
                            className={classes.bar}
                        />
                    </Box>
                </Box>
                <Box className={classes.box}>
                    <Box className={classes.innerCont}>
                        <Typography variant="h6" className={classes.content}>
                            Casual
                        </Typography>
                        <Typography
                            variant="h3"
                            className={classes.content}
                            style={{ marginTop: "10%" }}
                        >
                            10
                        </Typography>
                        <LinearProgress
                            variant="determinate"
                            value={50}
                            className={classes.bar}
                        />
                    </Box>
                </Box>
            </Box>
            <Box className={classes.subContainer}>
                <Box className={classes.box}>
                    <Box className={classes.innerCont}>
                        <Typography variant="h6" className={classes.content}>
                            Maternity
                        </Typography>
                        <Typography
                            variant="h3"
                            className={classes.content}
                            style={{ marginTop: "10%" }}
                        >
                            5
                        </Typography>
                        <LinearProgress
                            variant="determinate"
                            value={50}
                            className={classes.bar}
                        />
                    </Box>
                </Box>
                <Box className={classes.box}>
                    <Box className={classes.innerCont}>
                        <Typography variant="h6" className={classes.content}>
                            No-Pay
                        </Typography>
                        <Typography
                            variant="h3"
                            className={classes.content}
                            style={{ marginTop: "10%" }}
                        >
                            50
                        </Typography>
                        <LinearProgress
                            variant="determinate"
                            value={50}
                            className={classes.bar}
                        />
                    </Box>
                </Box>
            </Box>
            <img src={logo} style={{ position: "fixed", top: "50%", left: "65%" }} />
        </Box>
    );
};

export default Dashboard;
