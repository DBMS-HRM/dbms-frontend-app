import React from "react";
import { Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TotalLeaveTable from "./TotalLeavesTable";

const useStyles = makeStyles({
  container: {
    width: "100%-64px",
    height: "100%",
    padding: "2rem",
  },
});

export default function LeaveReport() {
  const classes = useStyles;
  return (
    <Container className={classes.container}>
      <Box style={{ marginTop: "10%" }}>
        <Dropdown />
        <TotalLeaveTable />
      </Box>
    </Container>
  );
}