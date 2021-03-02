import React from "react";
import { Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import OrderByTable from "./OrderByTable";
import Dropdown from "./Dropdown"

const useStyles = makeStyles({
  container: {
    width: "100%-64px",
    height: "100%",
    padding: "2rem",
  },
});

const drop = {
  labelName: "Order By",
  dropdown: [
    "Department",
    "Pay Grade",
    "Job Title"
  ]
}

export default function OrderByReport() {
  const classes = useStyles;
  return (
    <Container className={classes.container}>
      <Box style={{ marginTop: "10%" }}>
        <Dropdown labelName={drop.labelName} dropdown={drop.dropdown}/>
        <OrderByTable groupBy={}/>
      </Box>
    </Container>
  );
}
