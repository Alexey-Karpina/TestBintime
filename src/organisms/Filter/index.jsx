import React from "react";
import {Typography} from "../../atoms/Typography/index.jsx";
import {Search} from "../../molecules/Search/index.jsx";
import {Button} from "../../atoms/Button/index.jsx";
import {Select} from "../../molecules/Select/index.jsx";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Accordion from '@mui/material/Accordion';
import {AccordionDetails, AccordionSummary} from "@mui/material";
import './index.scss'

export const Filter = () => {
    return (
        <section className="Filter__container">
            <Accordion>
                <AccordionSummary
                    disableGutters={true}
                    expandIcon={<Button
                        startIcon={<FilterAltOutlinedIcon/>}
                    >
                        Filters
                    </Button>}
                >
                    <Typography variant="h5">Formula Top Headlines</Typography>
                    <Search/>
                </AccordionSummary>
                <AccordionDetails>
                    <Select label="Category"/>
                    <Select label="Country"/>
                </AccordionDetails>
            </Accordion>
        </section>
    )
}