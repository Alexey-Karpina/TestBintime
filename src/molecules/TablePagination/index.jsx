import React from 'react'
import TableFooter from '@mui/material/TableFooter';
import TableRow from "@mui/material/TableRow";
import {default as MuiTablePagination} from '@mui/material/TablePagination';

export const TablePagination = () => {
    return (
        <TableFooter>
            <TableRow>
                <MuiTablePagination
                    rowsPerPageOptions={[5, 10, 25, {label: 'All', value: -1}]}
                    count={100}
                    rowsPerPage={10}
                    page={1}
                    onPageChange={(value) => console.log(value)}
                    onRowsPerPageChange={(value) => console.log(value)}
                />
            </TableRow>
        </TableFooter>
    )
}