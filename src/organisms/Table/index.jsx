import React from 'react';
import {default as MuiTable} from '@mui/material/Table';
import {TableHeader} from "../../molecules/TableHeader/index.jsx";
import {TableBody} from "../../molecules/TableBody/index.jsx";
import {TablePagination} from "../../molecules/TablePagination/index.jsx";

export const Table = () => {
    return (
        <MuiTable>
            <TableHeader/>
            <TableBody/>
            <TablePagination/>
        </MuiTable>
    )
}