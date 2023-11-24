import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainPage} from "./pages/MainPage/index.jsx";
import {FormulaPage} from "./pages/FormulaPage/index.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: '/formula/:formulaId',
        element: <FormulaPage/>
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
