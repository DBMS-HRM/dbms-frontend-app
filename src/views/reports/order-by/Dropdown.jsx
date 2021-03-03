import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import api from "../../../api";
import {toast} from "react-toastify";

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
      <InputLabel id="demo-simple-select-filled-label">
        Order By
      </InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={props.item}
        onChange={e => props.setItem(e.target.value)}
      >
        <MenuItem value=""></MenuItem>
        {drop.dropdown.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
            ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
