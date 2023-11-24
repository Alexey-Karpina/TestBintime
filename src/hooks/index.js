import {useCallback, useEffect, useState} from "react";
import {getTopHeadlines} from "../api/index.js";

export const useFetchHeadlines = () => {
    const [data, setData] = useState({
        status: '',
        totalResults: 0,
        articles: [],
    })

    const handleFetchData = useCallback(({...props}) => {
        getTopHeadlines({...props}).then(({data: headlinesData}) => setData((prevState => ({
            ...prevState,
            ...headlinesData,
        }))))
    }, []);

    useEffect(() => {
        handleFetchData({page: 1, pageSize: 10});
    }, []);

    return {
        data,
        handleFetchData
    }
}

export const useHandlePagination = (fetchData) => {
    const [pagination, setPagination] = useState({
        page: 0,
        rowsPerPage: 10,
        rowsPerPageOptions: [5, 10, 25, 50]
    });

    const handleChangePage = (event, newPage) => {
        setPagination((prevState) => ({
            ...prevState,
            page: newPage,
        }));
        fetchData({page: newPage + 1, pageSize: pagination.rowsPerPage});
    };

    const handleChangeRowsPerPage = (event) => {
        const pageSize = parseInt(event.target.value, 10);
        setPagination((prevState) => ({
            ...prevState,
            rowsPerPage: pageSize,
            page: 0,
        }));
        fetchData({page: pagination.page + 1, pageSize});
    };

    return {
        pagination,
        handleChangePage,
        handleChangeRowsPerPage
    }
}

export const useFilter = (fetchData) => {
    const [filter, setFilter] = useState({
        country: 'us',
        category: '',
        q: '',
    })
    console.log(filter);
    const handleFilterChange = (event) => {
        const {name, value} = event.target;
        setFilter((prevState) => ({
            ...prevState,
            [name]: value
        }));

        console.log({...filter});
        fetchData({...filter, [name]: value, page: 1, pageSize: 10});
    }

    return {
        handleFilterChange
    }
}