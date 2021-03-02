import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({}));

const [state, setState] = useState();

const Dropdown = (props) => {
  const classes = useStyles();

  return (
    <FormControl variant="filled" className={classes.formControl}>
      <InputLabel id="demo-simple-select-filled-label">
        {props.labelName}
      </InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={age}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {props.dropdown.map((item) => {
          <MenuItem value={item}>
            {item}
          </MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
