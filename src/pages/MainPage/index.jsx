import React from 'react';
import {PrimaryTemplate} from "../../templates/PrimaryTemplate/index.jsx";
import {Filter} from "../../organisms/Filter/index.jsx";
import {Table} from "../../organisms/Table/index.jsx";

export const MainPage = () => {
    return (
        <PrimaryTemplate>
            <Filter/>
            <Table/>
        </PrimaryTemplate>
    )
}