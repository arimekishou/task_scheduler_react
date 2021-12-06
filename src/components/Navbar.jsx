import React from 'react';

const Navbar = () => {

    return (
        <div className="w3-top">
            <div className="w3-bar w3-white w3-card" id="myNavbar">
                <a href="#home" className="w3-bar-item w3-button w3-wide"  style={{padding: "16px"}}>Task Scheduler</a>

                <div className="w3-right w3-hide-small">
                    <a href="/login" className="w3-bar-item w3-button"  style={{padding: "16px"}}><i
                        className="fas fa-user"/>LOGIN</a>
                    <a href="#about" className="w3-bar-item w3-button" style={{padding: "16px"}}>ABOUT</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;