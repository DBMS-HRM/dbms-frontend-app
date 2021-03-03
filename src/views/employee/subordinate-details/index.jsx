import React from "react";
import {
    Box,
    Container
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import EmployeeTable from "./EmployeeTable";
import SearchBar from "./SearchBar";
import EmployeeTableAdvance from "./EmployeeTableAdvance";

const useStyles = makeStyles({
   container: {
       width: "100%-64px",
       height: "100%",
       padding: "2rem"
   },
});

const SubordinateDetails = () => {
    const classes = useStyles()
    return (
          <Container className={classes.container} >
              <Box style={{marginTop: '4rem'}}>
                  {/*<EmployeeTable />*/}
                  <EmployeeTableAdvance />
              </Box>
          </Container>

    );
}

export default SubordinateDetails;