import React from 'react';
import {PrimaryTemplate} from "../../templates/PrimaryTemplate/index.jsx";
import {Filter} from "../../organisms/Filter/index.jsx";
import {Table} from "../../organisms/Table/index.jsx";
import {useFetchHeadlines, useFilter, useHandlePagination} from "../../hooks/index.js";
import {HeadlinesContext} from "./context/index.js";

export const MainPage = () => {
    const {data, handleFetchData} = useFetchHeadlines();
    const {pagination, handleChangeRowsPerPage, handleChangePage} = useHandlePagination(handleFetchData);
    const {handleFilterChange} = useFilter(handleFetchData);
    return (
        <HeadlinesContext.Provider
            value={{
                data,
                tablePagination: {pagination, handleChangeRowsPerPage, handleChangePage},
                tableFilter: {handleFilterChange}
            }}>
            <PrimaryTemplate>
                <Filter/>
                <Table/>
            </PrimaryTemplate>
        </HeadlinesContext.Provider>
    )
}