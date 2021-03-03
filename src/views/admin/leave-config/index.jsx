import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Box, Button, Container, Grid, MenuItem, Select, TextField} from "@material-ui/core";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {selectors} from "../../../store";
import * as yup from "yup";
import {useFormik} from "formik";
import {updateLeaveConfig} from "../../../store/meta"


const payGradeList = [
    {
        value: 'Level 1',
        label: 'Level 1',
    },
    {
        value: 'Level 2',
        label: 'Level 2',
    },
    {
        value: 'Level 3',
        label: 'Level 3',
    },
    {
        value: 'Level 4',
        label: 'Level 4',
    },
    {
        value: 'Level 5',
        label: 'Level 5',
    },

];

const payGrades = {
    level1: "Level 1",
    level2: "Level 2",
    level3: "Level 3",
    level4: "Level 4",
    level5: "Level 5",
}

const leaveTypes = {
    annual: "annual",
    casual: "casual",
    maternity: "maternity",
    noPay: "nopay",
}

let loading = false

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

const validationSchema = yup.object({
    annualLeaves: yup
        .number('Not a valid leave date types'),
    casualLeaves: yup
        .number('Not a valid leave date types'),
    maternityLeaves: yup
        .number('Not a valid leave date types'),
    nopayLeaves: yup
        .number('Not a valid leave date types'),

})

const LeaveConfig = (props) => {
    const classes = useStyles();
    const payGradeSelectWrapper = React.createRef()
    const [payGrade, setPayGrade] = useState('');
    const [casualLeaves, setCasual] = useState('');
    const [annualLeaves, setAnnual] = useState('');
    const [maternityLeaves, setMaternity] = useState('');
    const [nopayLeaves, setNoPay] = useState('');
    const [btnStatus, setBtnStatus] = useState('Edit');
    const [readOnly, setReadOnly] = useState(true);

    const leaveConfig = useSelector(selectors.meta.leaveConfig);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            annualLeaves: '',
            casualLeaves: '',
            maternityLeaves: '',
            nopayLeaves: '',
        },

        validationSchema: validationSchema,
        onSubmit: async (formData) => {
            formData.payGrade = payGrade;
            const res = await dispatch(updateLeaveConfig(formData));
            console.log(res);
            if (res.status === 200) {
                toast.success("Leave configs changed successfully")
            } else {
                toast.error(res.message)
            }
        },
    });

    let formData = {
        casualLeaves: casualLeaves,
        maternityLeaves: maternityLeaves,
        annualLeaves: annualLeaves,
        nopayLeaves: nopayLeaves
    }

    const $setLeaves = (pay_grade) => {
        setReadOnly(true);
        formik.values.maternityLeaves = leaveConfig[pay_grade][leaveTypes.maternity];
        formik.values.annualLeaves = leaveConfig[pay_grade][leaveTypes.annual];
        formik.values.casualLeaves = leaveConfig[pay_grade][leaveTypes.casual];
        formik.values.nopayLeaves = leaveConfig[pay_grade][leaveTypes.noPay];
    }

    useEffect(() => {
        if (Object.keys(leaveConfig).length != 0) {
            $setLeaves(payGrades.level1);
        }

    }, [])

    function changePayGrade(event) {
        const payGrade = event.target.value;
        switch (payGrade) {
            case payGrades.level1:
                setPayGrade(payGrades.level1);
                $setLeaves(payGrades.level1);
                break;
            case payGrades.level2:
                setPayGrade(payGrades.level2);
                $setLeaves(payGrades.level2);
                break;
            case payGrades.level3:
                setPayGrade(payGrades.level3);
                $setLeaves(payGrades.level3);
                break;
            case payGrades.level4:
                setPayGrade(payGrades.level4);
                $setLeaves(payGrades.level4);
                break;
            default:
                setPayGrade(payGrade.level1);
                $setLeaves(payGrades.level1);
        }
    }

    function changeReadOnly() {
        setReadOnly(false);
    }

    return (
        <Container className={classes.container}>
            <main className={classes.layout}>
                <Box mt={12}>
                    <Paper className={classes.paper}>
                        <Typography component="h1" variant="h4" align="center">
                            Leave Config
                        </Typography>
                        <Box mt={3}>
                            <form onSubmit={formik.handleSubmit}>
                                <Grid container spacing={3}>

                                    <Grid item xs={12}>
                                        <Select
                                            variant="outlined"
                                            ref={payGradeSelectWrapper}
                                            required={true}
                                            error={false}
                                            id="payGrade"
                                            name="payGrade"
                                            label="Pay Grade"
                                            value={payGrade}
                                            onChange={(event) => changePayGrade(event)}
                                            fullWidth={true}
                                        >
                                            {payGradeList.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </Select>

                                    </Grid>


                                    <Grid item xs={12} sm={6}>
                                        <TextField className={classes.root}
                                                   variant="outlined"
                                                   id="annualLeaves"
                                                   name="annualLeaves"
                                                   label="Annual"
                                                   error={formik.touched.annualLeaves && Boolean(formik.errors.annualLeaves)}
                                                   helperText={formik.touched.annualLeaves && formik.errors.annualLeaves}
                                                   value={formik.values.annualLeaves}
                                                   onChange={formik.handleChange}
                                                   disabled={readOnly}
                                                   type="number"
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField className={classes.root}
                                                   variant="outlined"
                                                   id="casualLeaves"
                                                   name="casualLeaves"
                                                   label="Casual"
                                                   error={formik.touched.casualLeaves && Boolean(formik.errors.casualLeaves)}
                                                   helperText={formik.touched.casualLeaves && formik.errors.casualLeaves}
                                                   value={formik.values.casualLeaves}
                                                   onChange={formik.handleChange}
                                                   disabled={readOnly}
                                                   type="number"
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField className={classes.root}
                                                   variant="outlined"
                                                   id="maternityLeaves"
                                                   name="maternityLeaves"
                                                   label="Maternity"
                                                   error={formik.touched.maternityLeaves && Boolean(formik.errors.maternityLeaves)}
                                                   helperText={formik.touched.maternityLeaves && formik.errors.maternityLeaves}
                                                   value={formik.values.maternityLeaves}
                                                   onChange={formik.handleChange}
                                                   disabled={readOnly}
                                                   type="number"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField className={classes.root}
                                                   variant="outlined"
                                                   id="nopayLeaves"
                                                   name="nopayLeaves"
                                                   label="No-pay"
                                                   error={formik.touched.nopayLeaves && Boolean(formik.errors.nopayLeaves)}
                                                   helperText={formik.touched.nopayLeaves && formik.errors.nopayLeaves}
                                                   value={formik.values.nopayLeaves}
                                                   onChange={formik.handleChange}
                                                   disabled={readOnly}
                                                   type="number"
                                        />
                                    </Grid>
                                </Grid>
                                <Box mt={5}>
                                    {(readOnly) && <Button className={classes.root}
                                                           onClick={changeReadOnly}
                                                           variant="contained"
                                                           color="secondary"
                                    >Edit</Button>}
                                    {(!readOnly) && <Button className={classes.root}
                                                            variant="contained"
                                                            type="submit"
                                                            color="primary"
                                    >Submit</Button>}
                                </Box>
                            </form>

                        </Box>
                    </Paper>
                </Box>

            </main>
        </Container>
    );
}

export default LeaveConfig;

