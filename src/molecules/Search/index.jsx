import React from 'react';
import {OutlinedInput} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
    return (
        <div>
            <OutlinedInput
                placeholder="Please enter text"
                startAdornment={<SearchIcon/>}
            />
        </div>
    )
}