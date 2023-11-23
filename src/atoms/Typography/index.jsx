import React from 'react';
import {default as MuiTypography} from '@mui/material/Typography';

export const Typography = ({children, ...props}) => {
    return (
        <MuiTypography {...props}>
            {children}
        </MuiTypography>
    )
}