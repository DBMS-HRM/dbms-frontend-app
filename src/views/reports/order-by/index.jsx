import React, {useState} from "react";
import { Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import OrderByTable from "./OrderByTable";
import Dropdown from "./Dropdown"
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  container: {
    width: "100%-64px",
    height: "100%",
    padding: "2rem",
  },
});


export default function OrderByReport() {
  const classes = useStyles;

  let [item, setItem] = useState("departmentName");


  return (
    <Container className={classes.container}>
      <Box style={{ marginTop: "10%" }}>
        <Dropdown item={item} setItem={setItem} />
        <OrderByTable groupBy={item}/>
      </Box>
    </Container>
  );
}
