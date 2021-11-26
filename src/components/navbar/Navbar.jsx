import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

    navBar: {
        position: "fixed",
        width: "100%",
        zIndex: "1",
        top: "0"
    },

    navBarId: {
        overflow: "hidden",
        color: "#000",
        backgroundColor: "#fff"
    },

    home: {
        webkitTextSizeAdjust: "100%",
        fontSize: "15px",
        fontFamily: "Raleway, sans-serif",
        lineHeight: "1.8",
        boxSizing: "inherit",
        letterSpacing: "4px",
        verticalAlign: "middle",
        overflow: "hidden",
        textDecoration: "none",
        color: "inherit",
        backgroundColor: "inherit",
        textAlign: "center",
        cursor: "pointer",
        userSelect: "none",
        float: "left",
        width: "auto",
        border: "none",
        display: "block",
        outline: "0",
        whiteSpace: "normal",
        padding: " 16px"
    },

    rightHome: {
        color: "#000",
        boxSizing: "inherit",
        float: "right",
    },

    login: {
        boxSizing: "inherit",
        verticalAlign: "middle",
        overflow: "hidden",
        textDecoration: "none",
        color: "inherit",
        backgroundColor: "inherit",
        textAlign: "center",
        cursor: "pointer",
        userSelect: "none",
        float: "left",
        width: "auto",
        border: "none",
        display: "block",
        outline: "0",
        whiteSpace: "normal",
        padding: "16px"
    }

}))

const Navbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.navBar}>
            <div className={classes.navBarId} id="myNavbar">
                <a href="#home" className={classes.home}>Task Scheduler</a>
                <div className={classes.rightHome}>
                    <a href="/login" className={classes.login}><i className="fas fa-user"/>LOGIN</a>
                    <a href="#about" className={classes.login}>ABOUT</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;