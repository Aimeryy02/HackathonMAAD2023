import React from 'react';
import Header from "./components/Header/index.js";
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
        <Header/>
        <Outlet/>
        </>
    );
}

export default Layout;
