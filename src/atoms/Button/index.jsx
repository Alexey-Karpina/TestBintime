import React from 'react';
import {default as MuiButton} from '@mui/material/Button';

export const Button = ({children, ...props}) => {
    return (
        <MuiButton {...props}>
            {children}
        </MuiButton>
    )
}