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

const ShowLeaves = () => {
    const classes = useStyles()
    return (
          <Container className={classes.container} >
              <Box style={{marginTop: '4rem'}}>
                  <TabView view="normal" />
              </Box>
          </Container>

    );
}

export default ShowLeaves;