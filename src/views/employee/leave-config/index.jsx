import React from "react";
import {
    Box,
    Container
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import LeaveTable from "./LeaveTable";
import TabView from "./TabView";

const useStyles = makeStyles({
    container: {
        width: "100%-64px",
        height: "100%",
        padding: "2rem"
    },
});

const LeaveConfig = () => {
    const classes = useStyles();
    const [payGrade, setPayGrade] = React.useState();
    const handleChange = (event) => {

    }
    return (
        <Container className={classes.container} >
            <Box style={{marginTop: '4rem'}}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Container>

    );
}

export default LeaveConfig;