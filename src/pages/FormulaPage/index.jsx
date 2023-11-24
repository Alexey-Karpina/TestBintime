import React from 'react';
import {PrimaryTemplate} from "../../templates/PrimaryTemplate/index.jsx";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import WestIcon from '@mui/icons-material/West';

export const FormulaPage = () => {
    const {formulaId} = useParams();
    const {state: {data}} = useLocation();
    const navigate = useNavigate();

    return (
        <PrimaryTemplate>
            <div>
                <WestIcon onClick={() => navigate(-1)}/>
                {data.title}
            </div>
            <div>
                Source: {data.source.name}
                Publication date: {data.publishedAt.split("T")[0]}
            </div>
            <div>
                Description
                {data.description}
            </div>
            <img src={data.urlToImage} alt={data.title}/>
            <div>
                Content
                {data.content}
            </div>
            <div>Underline</div>
            <div>Authors: {data.author}</div>
        </PrimaryTemplate>
    )
}