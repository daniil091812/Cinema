import React from 'react';
import Header from "../Header/Header";
import {Outlet} from "react-router";


const Layout = () => {
    return (
        <div>
            <Header/>
            <main className="main">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
