import React from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export const TableHeader = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Authors</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Publication date</TableCell>
                <TableCell>URL</TableCell>
            </TableRow>
        </TableHead>
    )
}