import React, {useState} from "react";
import {Box, Container, TextField} from "@material-ui/core";
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
  const [dates, setDates] = useState({
    startingDate: '',
    endingDate: ''
  })
  return (
    <Container className={classes.container}>
      <Box style={{ marginTop: "10%" }}>
        <TextField
            label="Starting Date"
            type="date"
            value={dates.startingDate}
            onChange={e=>setDates({...dates, startingDate: e.target.value})}
        />
        <TextField
            label="Ending Date"
            type="date"
            value={dates.endingDate}
            onChange={e=>setDates({...dates, endingDate: e.target.value})}
        />
        <TotalLeaveTable />
      </Box>
    </Container>
  );
}
