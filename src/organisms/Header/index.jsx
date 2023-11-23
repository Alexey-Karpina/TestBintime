import React from 'react';
import {Typography} from "../../atoms/Typography/index.jsx";
import './index.scss';

export const Header = () => {
    return (
        <header className="Header__container">
            <Typography variant="h3" className="Header__title">Formula</Typography>
        </header>
    )
}