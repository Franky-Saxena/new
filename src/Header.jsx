//PROJECT NO.4:- GOOGLE KEEP APP CLONE WITH REACTJS
import React from 'react';
import logo from './Images/logo.png';

const Header = () => {
    return(
    <>
        <div className= "header">
            <img src={logo} style={{filter: "invert(100%)"}} alt="logo" width="70" height="50" />
            <h1> Franky Keep </h1>
        </div>
    </>
    );
};

export default Header;
