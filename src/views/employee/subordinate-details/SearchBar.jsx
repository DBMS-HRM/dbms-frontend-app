import React from "react";
import {createMuiTheme, makeStyles} from "@material-ui/core/styles";
import {Box, Button, MenuItem, MuiThemeProvider, Select, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    editButton: {
        textTransform: "none",
        backgroundColor: "#109CF1",
        color: "white"
    },
    searchItem: {
        fontFamily: "'Poppins', sans-serif",
        fontWeight: "500",
        color: "#6A707E",
        fontSize: '14px'
    },
    select: {
        fontFamily: "'Poppins', sans-serif",
        fontWeight: "500",
        backgroundColor: 'rgba(0,0,0,0)',
        color: '#109CF1',
        marginLeft: '8px',
        '&:before': {
            borderBottom: 0,
        },
        '&:hover:not(.select):before': {
            borderBottom: 0,
        },
        '&:after': {
            borderBottom: 0,
        },
    },
    option: {
        fontFamily: "'Poppins', sans-serif",
        fontWeight: "500",
    },
});

const overrideSelect = createMuiTheme({
    overrides: {
        MuiSelect: {
            select: {
                "&:focus": {
                    backgroundColor: "rgba(0,0,0,0)"
                }
            }
        }
    }
})

const SearchBar = () => {
    const classes = useStyles()
    return (
        <Box display="flex" justifyContent="space-between" >
            <Box display="flex" alignItems="center" >
                <Box style={{marginRight: "1rem"}} display="flex" alignItems="center" >
                    <Box>
                        <Typography className={classes.searchItem}>
                            Department :
                        </Typography>
                    </Box>
                    <Box>
                        <MuiThemeProvider theme={overrideSelect} >
                            <Select defaultValue="All" className={classes.select}>
                                <MenuItem className={classes.option} value="All">All</MenuItem>
                                <MenuItem className={classes.option} value="HR">HR</MenuItem>
                                <MenuItem className={classes.option} value="Security">Security</MenuItem>
                                <MenuItem className={classes.option} value="Financial">Financial</MenuItem>
                                <MenuItem className={classes.option} value="Quality Assurance">Quality Assurance</MenuItem>
                                <MenuItem className={classes.option} value="ICT">ICT</MenuItem>
                            </Select>
                        </MuiThemeProvider>
                    </Box>
                </Box>
                <Box style={{marginRight: "1rem"}} display="flex" alignItems="center" >
                    <Box>
                        <Typography className={classes.searchItem}>
                            Roll :
                        </Typography>
                    </Box>
                    <Box>
                        <MuiThemeProvider theme={overrideSelect} >
                            <Select defaultValue="All" className={classes.select}>
                                <MenuItem className={classes.option} value="All">All</MenuItem>
                                <MenuItem className={classes.option} value="Manager">Manager</MenuItem>
                                <MenuItem className={classes.option} value="CEO">CEO</MenuItem>
                                <MenuItem className={classes.option} value="Engineer">Engineer</MenuItem>
                                <MenuItem className={classes.option} value="Developer">Developer</MenuItem>
                            </Select>
                        </MuiThemeProvider>
                    </Box>
                </Box>
            </Box>
            <Box >
                <Button className={classes.editButton} variant="contained" disableElevation>
                    Edit Custom Columns
                </Button>
            </Box>
        </Box>
    );
}

export default SearchBar;