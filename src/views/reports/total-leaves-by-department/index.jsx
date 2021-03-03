import React, { useState } from "react";
import { Box, Container, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TotalLeaveTable from "./TotalLeavesTable";
import { display } from "@material-ui/system";

const useStyles = makeStyles({
  container: {
    width: "100%-64px",
    height: "100%",
  },
  outerBox: {
    display: "flex",
    marginTop: "10%",
  },
  innerBox: {
    marginRight: "5%",
    marginBottom: "2.5%",
  },
});

export default function LeaveReport() {
  const classes = useStyles();
  const [dates, setDates] = useState({
    fromDate: "",
    toDate: "",
  });
  return (
    <Container className={classes.container}>
      <Box className={classes.outerBox}>
        <Box className={classes.innerBox}>
          <Typography variant="h6">Starting Date</Typography>
          <TextField
            type="date"
            value={dates.fromDate}
            onChange={(e) => setDates({ ...dates, fromDate: e.target.value })}
          />
        </Box>
        <Box className={classes.innerBox}>
          <Typography variant="h6">Ending Date</Typography>
          <TextField
            type="date"
            value={dates.toDate}
            onChange={(e) => setDates({ ...dates, toDate: e.target.value })}
          />
        </Box>
      </Box>
      <TotalLeaveTable
        fromDate={dates.fromDate}
        toDate={dates.toDate}
      />
    </Container>
  );
}
