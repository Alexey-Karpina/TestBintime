import React from 'react';
import {Header} from "../../organisms/Header/index.jsx";
import {Footer} from "../../organisms/Footer/index.jsx";
import './index.scss';

export const PrimaryTemplate = ({children}) => {
    return (
        <div className="Primary__container">
            <Header/>
            <main className="Primary__content">
                {children}
            </main>
            <Footer/>
        </div>
    )
}