import React, { Component } from 'react';

import './Toolbar.css';

const toolbar = props =>(
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div></div>
            <div classname="toolbar_logo"><a href="/">THE LOGO</a></div>
            <div classname="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Users</a></li>
                </ul>
            </div>
        </nav>
    </header>
);
export default toolbar;
