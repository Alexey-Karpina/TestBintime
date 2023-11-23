import React from 'react';
import {default as MuiTableBody} from '@mui/material/TableBody';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import LinkIcon from '@mui/icons-material/Link';

export const TableBody = () => {
    return (
        <MuiTableBody>
            <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</TableCell>
                <TableCell>tortor vitae purus faucibus ornare</TableCell>
                <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. In hac
                    habitasse platea dictumst quisque.</TableCell>
                <TableCell>2023-11-07</TableCell>
                <TableCell><LinkIcon/></TableCell>
            </TableRow>
        </MuiTableBody>
    )
}