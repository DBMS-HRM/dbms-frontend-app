import React from "react";
import {
    Button,
    Box,
    Typography,
    Select,
    MenuItem,
    MuiThemeProvider,
    TableContainer,
    Table, TableHead, TableRow, TableCell, TableBody, Container
} from "@material-ui/core";
import {createMuiTheme, makeStyles} from "@material-ui/core/styles";
import Avatar from "react-avatar";

const useStyles = makeStyles({
   container: {
       width: "100%-64px",
       height: "100%",
       padding: "2rem"
   },
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
    tableContainer: {
      boxShadow: "0 6px 18px 0 rgba(0,0,0,0.06)",
    },
    table: {
        minWidth: 650,
    },
    cell: {
        fontFamily: "'Poppins', sans-serif",
        "& span": {
            fontWeight: "500",
            "&.title": {
                color: "#323C47"
            }
        },
    },
    avatar: {
       marginRight: '1rem'
    }
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

function createData(name, email, role) {
    return { name, email, role };
}

const rows = [
    createData('Lindsey Stroud', 'lindsey.stroud@gmail.com', 'Manager'),
    createData('Nicci Troiani', 'nicci.troiani@gmail.com', 'Manager'),
    createData('Rebecca Moore', 'george.fields@gmail.com', 'CEO'),
    createData('George Fields', 'rebecca.moore@gmail.com', 'Manager'),
    createData('Jane Doe', 'jane.doe@gmail.com', 'Engineer'),
];

const EmployeeDetails = () => {
    const classes = useStyles()
    return (
          <Container className={classes.container} >
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
                                      <MenuItem className={classes.option} value="Maintenance">Maintenance</MenuItem>
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
              <Box style={{marginTop: '4rem'}}>
                  <TableContainer className={classes.tableContainer} >
                      <Table className={classes.table} aria-label="simple table">
                          <TableHead>
                              <TableRow>
                                  <TableCell className={classes.cell}><span>Name</span></TableCell>
                                  <TableCell className={classes.cell} align="left"><span>Email</span></TableCell>
                                  <TableCell className={classes.cell} align="left"><span>Role</span></TableCell>
                              </TableRow>
                          </TableHead>
                          <TableBody>
                              {rows.map((row) => (
                                  <TableRow key={row.name}>
                                      <TableCell className={classes.cell} component="th" scope="row">
                                          <Avatar name={row.name} round={true} size={36} className={classes.avatar} />
                                          <span className="title">{row.name}</span>
                                      </TableCell>
                                      <TableCell className={classes.cell} align="left">{row.email}</TableCell>
                                      <TableCell className={classes.cell} align="left">{row.role}</TableCell>
                                  </TableRow>
                              ))}
                          </TableBody>
                      </Table>
                  </TableContainer>
              </Box>
          </Container>

    );
}

export default EmployeeDetails;