import React from 'react';
import {OutlinedInput} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const Search = ({...props}) => {
    return (
        <div>
            <OutlinedInput
                {...props}
                placeholder="Please enter text"
                startAdornment={<SearchIcon/>}
            />
        </div>
    )
}