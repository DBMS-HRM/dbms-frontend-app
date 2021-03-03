import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from '@material-ui/core/Grid';
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import api from "../../../api";
import {toast} from "react-toastify";
import {Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

const dropList = {
    dropdown: [
        {label: "Department", value: "departmentName"},
        {label: "Pay Grade", value: "payGrade"},
        {label: "Job Title", value: "jobTitle"}
    ]
}

const Dropdown = (props) => {
  const classes = useStyles
    const [drop, setDrop] = useState(dropList);
    const [select, setSelect] = useState("departmentName");
    useEffect(() => {
        async function getCustomAttributes() {
            const [res, fetchedData] = await api.user.get.customEmployeeAttributes();
            if (res.status !== 200) {
                toast.error(res.message);
                return;
            }
            console.log(drop);
            fetchedData.map((record) => {
                const custom = {
                    label: record.customColumn,
                    value: record.customColumn,
                }
                dropList.dropdown.push(custom);
            });
            setDrop(dropList);
            console.log(drop);
            if (fetchedData.length === 0) {
                toast.error("No data fetched!");
                return;
            }
        }
        getCustomAttributes();
    }, []);
  console.log("returnign drop", drop);
  return (
    <FormControl variant="filled" className={classes.formControl}>
        <Grid container spacing={3}>
        <Grid item xs={6}>
            <InputLabel id="demo-simple-select-filled-label">
                Order By
            </InputLabel>
            <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={select}
                onChange={(e) => setSelect(e.target.value)}
            >
                <MenuItem value=""></MenuItem>
                {drop.dropdown.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                        {item.label}
                    </MenuItem>
                ))}
            </Select>
        </Grid>
        <Grid item xs={6}>
            <Button className={classes.root}
                    onClick={e => props.setItem(select)}
                    variant="contained"
                    color="secondary"
            >Generate Report</Button>
        </Grid>
        </Grid>

    </FormControl>
  );
};

export default Dropdown;
