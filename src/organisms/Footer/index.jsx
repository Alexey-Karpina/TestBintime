import React from 'react';
import {Typography} from "../../atoms/Typography/index.jsx";
import {Mail} from "../../molecules/Mail/index.jsx";
import './index.scss';

export const Footer = () => {
    return (
        <footer className="Footer__container">
            <div className="Footer__info">
                <Typography className="Footer__title">Formula</Typography>
                <Typography className="Footer__subtitle">Formula 2023. All rights reserved</Typography>
            </div>
            <div className="Footer__actions">
                <Mail/>
            </div>
        </footer>
    )
}