import React from 'react';
import {default as MuiLink} from '@mui/material/Link';

export const Link = ({children, ...props}) => {
    return <MuiLink {...props}>{children}</MuiLink>
}