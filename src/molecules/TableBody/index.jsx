import React, {useContext} from 'react';
import {default as MuiTableBody} from '@mui/material/TableBody';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import LinkIcon from '@mui/icons-material/Link';
import {HeadlinesContext} from "../../pages/MainPage/context/index.js";
import './index.scss';
import {Typography} from "../../atoms/Typography/index.jsx";
import {Link} from "react-router-dom";

export const TableBody = () => {
    const {data: {articles}} = useContext(HeadlinesContext);
    return (
        <MuiTableBody className="Table">
            {articles.map((item) => (
                <TableRow className="Table__row">
                    <TableCell className="Table__cell">
                        {item.urlToImage ? (
                            <img src={item.urlToImage} alt={item.title} className="Table__image"/>
                        ) : "No image"}
                    </TableCell>
                    <TableCell>
                        {item.title ? (
                            <Link state={{data: item}} to={`/formula/${item.title}`}>
                                {item.title}
                            </Link>
                        ) : '-'}
                    </TableCell>
                    <TableCell>
                        {item.author ? (
                            <Typography variant="p">
                                {item.author}
                            </Typography>
                        ) : "-"}
                    </TableCell>
                    <TableCell>
                        {item.description ? (
                            <Typography variant="p">
                                {item.description}
                            </Typography>
                        ) : '-'}
                    </TableCell>
                    <TableCell>{item.publishedAt.split("T")[0]}</TableCell>
                    <TableCell><LinkIcon/></TableCell>
                </TableRow>
            ))}
        </MuiTableBody>
    )
}