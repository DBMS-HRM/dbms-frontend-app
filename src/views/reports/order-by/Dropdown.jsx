import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({}));

const drop = {
    dropdown: [
        {label: "Department", value: "departmentName"},
        {label: "Pay Grade", value: "payGrade"},
        {label: "Job Title", value: "jobTitle"}
    ]
}

const Dropdown = (props) => {
  const classes = useStyles
    // const [state, setState] = useState('');

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
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
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
