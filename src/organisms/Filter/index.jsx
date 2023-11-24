import React, {useContext, useState} from "react";
import {Typography} from "../../atoms/Typography/index.jsx";
import {Search} from "../../molecules/Search/index.jsx";
import {Button} from "../../atoms/Button/index.jsx";
import {Select} from "../../molecules/Select/index.jsx";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Accordion from '@mui/material/Accordion';
import {AccordionDetails, AccordionSummary} from "@mui/material";
import './index.scss'
import {categoryList, countryList} from "../../__mock__/index.js";
import {HeadlinesContext} from "../../pages/MainPage/context/index.js";
import {debounce} from "lodash";

export const Filter = () => {
    const {tableFilter: {handleFilterChange}} = useContext(HeadlinesContext);

    const [expanded, setExpanded] = useState(false);
    const handleChange = (event, isExpanded) => {
        setExpanded(!expanded);
    };

    const debouncedSearch = debounce(handleFilterChange, 400);

    return (
        <section className="Filter__container">
            <Accordion expanded={expanded}>
                <AccordionSummary
                    expandIcon={<Button
                        onClick={handleChange}
                        startIcon={<FilterAltOutlinedIcon/>}
                    >
                        Filters
                    </Button>}
                >
                    <Typography variant="h5">Formula Top Headlines</Typography>
                    <Search name='q' onChange={debouncedSearch}/>
                </AccordionSummary>
                <AccordionDetails>
                    <Select label="Category" name="category" defaultValue="us" options={categoryList}
                            onChange={handleFilterChange}/>
                    <Select label="Country" name="country" defaultValue="" options={countryList}
                            onChange={handleFilterChange}/>
                </AccordionDetails>
            </Accordion>
        </section>
    )
}