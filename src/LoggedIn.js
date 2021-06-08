import React from 'react';
import './LoginDetails.css';
import {loggedInLabel} from './LoginProperties';


function LoggedIn (props) {

    
    const logoutHandler = () => {
        props.setLoginStatus(false);
    }

    if(props.isLoggedIn) {
        return (
        <div className="main-body">
            <h1>{loggedInLabel}</h1>
            <button onClick={logoutHandler}>Log Out</button>
        </div>);
    }
    return '';
    
    
}

export default LoggedIn;