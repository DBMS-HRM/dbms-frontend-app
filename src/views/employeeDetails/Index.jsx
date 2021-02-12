import React from "react";
import {
    Box,
    Container
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import EmployeeTable from "./EmployeeTable";
import SearchBar from "./SearchBar";

const useStyles = makeStyles({
   container: {
       width: "100%-64px",
       height: "100%",
       padding: "2rem"
   },
});

const Index = () => {
    const classes = useStyles()
    return (
          <Container className={classes.container} >
              <SearchBar />
              <Box style={{marginTop: '4rem'}}>
                  <EmployeeTable />
              </Box>
          </Container>

    );
}

export default Index;