import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import {InputLabel} from "@mui/material";
import {default as MuiSelect} from '@mui/material/Select';

export const Select = ({options = [], label, ...props}) => {
    return (
        <div>
            <InputLabel id={label}>{label}</InputLabel>
            <MuiSelect labelId={label} id="select" {...props}>
                {options.map((item) => (
                    <MenuItem value={item} key={item}>{item}</MenuItem>
                ))}
            </MuiSelect>
        </div>
    );
}