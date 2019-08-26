import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import Users from './../Users/Users.js';

const header = () => {
    return(  
    <BrowserRouter>
        <div className="header">
            <a href="/">
                <img src="original.gif" alt="Error 404" width="150px"></img>
            </a>
            <span className ="header-text">Welcome to my First React App</span>
            <center>
                <div className="header-links">
                    <NavLink className="linkTag" to="/Users" exact activeStyle={{display:'none'}}>Users</NavLink>
                    <br></br>
                    <br></br>
                </div>
            </center>
        </div>
        <Route path="/Users" exact component={Users} />
    </BrowserRouter>
    )
}

export default header;