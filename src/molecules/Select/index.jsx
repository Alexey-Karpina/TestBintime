import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import {default as MuiSelect} from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import {InputLabel} from "@mui/material";

export const Select = ({options = [], label}) => {
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: {value},
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <FormControl sx={{m: 1, width: 300}}>
            <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
            <MuiSelect
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label={label}/>}
                renderValue={(selected) => selected.join(', ')}
            >
                {options.map((name) => (
                    <MenuItem key={name} value={name}>
                        <Checkbox checked={personName.indexOf(name) > -1}/>
                        <ListItemText primary={name}/>
                    </MenuItem>
                ))}
            </MuiSelect>
        </FormControl>
    );
}