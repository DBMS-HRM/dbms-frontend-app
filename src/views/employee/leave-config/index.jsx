import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Container, Box, TextField, Grid, MenuItem, Button} from "@material-ui/core";


const paygrade = [
    {
      value: 'level1',
      label: 'Level 1',
    },
    {
      value: 'level2',
      label: 'Level 2',
    },
    {
       value: 'level3',
       label: 'Level 3',
    },
    {
       value: 'level4',
       label: 'Level 4',
      },
  ];


const useStyles = makeStyles((theme) => ({

    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    root: {
        width: '33ch',
    },
   
     
}));
const LeaveConfig = (props) => {
    const classes = useStyles();
    const payGradeSelectWrapper = React.createRef()


    return (
        <Container className={classes.container}>
            <main className={classes.layout}>
                <Box mt={12}>           
                <Paper className={classes.paper}>                    
                    <Typography component="h1" variant="h4" align="center">
                        Leave Config
                    </Typography>
                    <Box mt={3}>                  
                    <Grid container spacing={3}>
                    
                    <Grid item xs={12}  > 
                        <TextField
                            select
                            variant="outlined"
                            ref={payGradeSelectWrapper}
                            required = {true}
                            error = {false}
                            id="payGrade"
                            name="payGrade"
                            label="Pay Grade"
                            value={props.paygrade}
                            onChange={e=>props.setPayGrade(e.target.value)}
                            fullWidth = {true}
                            >
                            {paygrade.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                
                    </Grid>
               
                    
                    <Grid item xs={12} sm={6}>
                        <TextField className={classes.root}
                            variant="outlined"
                            id="annual"
                            name="annual"
                            label="Annual"
                            defaultValue="50"
                            InputProps={{
                                readOnly:true
                        }}
                    />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField className={classes.root}
                            variant="outlined"
                            id="casual"
                            name="casual"
                            label="Casual"
                            defaultValue="50"
                            InputProps={{
                                readOnly:true
                                
                        }}
                    />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField className={classes.root}
                            variant="outlined"
                            id="maternity"
                            name="maternity"
                            label="Maternity"
                            defaultValue="50"
                            InputProps={{
                                readOnly:true
                                
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField className={classes.root}
                            variant="outlined"
                            id="no-pay"
                            name="no-pay"
                            label="No-pay"
                            defaultValue="50"
                            InputProps={{
                                readOnly:true
                                
                            }}
                        />
                    </Grid>
                </Grid> 
                <Box mt={5}>
                <Button className={classes.root}                  
                    variant="contained"                    
                    >Edit</Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
        
    </main> 
</Container>
);
}

export default LeaveConfig;

