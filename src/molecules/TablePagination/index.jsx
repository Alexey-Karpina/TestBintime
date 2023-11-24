import React, {useContext} from 'react'
import TableFooter from '@mui/material/TableFooter';
import TableRow from "@mui/material/TableRow";
import {default as MuiTablePagination} from '@mui/material/TablePagination';
import {HeadlinesContext} from "../../pages/MainPage/context/index.js";

export const TablePagination = () => {
    const {data, tablePagination} = useContext(HeadlinesContext);
    const {pagination, handleChangeRowsPerPage, handleChangePage} = tablePagination;
    return (
        <TableFooter>
            <TableRow>
                <MuiTablePagination
                    rowsPerPageOptions={pagination.rowsPerPageOptions}
                    count={data.totalResults}
                    rowsPerPage={pagination.rowsPerPage}
                    page={pagination.page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableRow>
        </TableFooter>
    )
}