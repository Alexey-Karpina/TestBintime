import React from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {Typography} from "../../atoms/Typography/index.jsx";
import {Link} from "../../atoms/Link/index.jsx";

export const Mail = ({...props}) => {
    return (
        <Link
            rel="noopener noreferrer"
            href={`mailto:info@formula.com`}
            {...props}
        >
            <EmailOutlinedIcon/>
            <Typography variant="button">
                Send Documents
            </Typography>
        </Link>
    )
}