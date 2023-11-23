import React from 'react';
import {Header} from "../../organisms/Header/index.jsx";
import {Footer} from "../../organisms/Footer/index.jsx";
import './index.scss';

export const PrimaryTemplate = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}