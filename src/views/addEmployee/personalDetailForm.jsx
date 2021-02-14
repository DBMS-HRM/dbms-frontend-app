import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {Container} from '@material-ui/core';
import {
    KeyboardDatePicker,
} from '@material-ui/pickers';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {makeStyles} from "@material-ui/core/styles";
import CustomInputField from "../../components/customInput";
// import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles({
    container: {
        width: "100%-64px",
        height: "100%",
        padding: "2rem"
    },
});

export default function PersonalDetailForm() {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <Container className={classes.container}>
            <Typography variant="h6" gutterBottom>
                Add employee
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <CustomInputField
                        required = {false}
                        error = {false}
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth = {true}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomInputField
                        required = {false}
                        error = {false}
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth = {true}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    {/*<KeyboardDatePicker*/}
                    {/*    disableToolbar*/}
                    {/*    variant="inline"*/}
                    {/*    format="MM/dd/yyyy"*/}
                    {/*    margin="normal"*/}
                    {/*    id="date-picker-inline"*/}
                    {/*    label="Date picker inline"*/}
                    {/*    value={selectedDate}*/}
                    {/*    onChange={handleDateChange}*/}
                    {/*    KeyboardButtonProps={{*/}
                    {/*        'aria-label': 'change date',*/}
                    {/*    }}*/}
                    {/*/>*/}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomInputField
                        required = {false}
                        error = {false}
                        id="maritialStatus"
                        name="maritialStatus"
                        label="Maritial Status"
                        fullWidth = {true}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomInputField
                        required = {false}
                        error = {false}
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth = {true}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomInputField
                        required = {false}
                        error = {false}
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth = {true}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomInputField
                        required = {false}
                        error = {false}
                        id="mobileNumber"
                        name="mobileNumber"
                        label="Mobile Number"
                        fullWidth = {true}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Address line 1"
                        fullWidth
                        autoComplete="shipping address-line1"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="address2"
                        name="address2"
                        label="Address line 2"
                        fullWidth
                        autoComplete="shipping address-line2"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="shipping address-level2"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="state" name="state" label="State/Province/Region" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="shipping postal-code"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="shipping country"
                    />
                </Grid>
            </Grid>
        </Container>

    );
}