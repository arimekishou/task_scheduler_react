import React from "react";
import Navbar from "./components/navbar/Navbar";
import {makeStyles} from "@material-ui/core";
import Header from "./components/header/Header";

const useStyles = makeStyles((theme) => ({
    body: {
        webkitTextSizeAdjust: "100%",
        boxSizing: "inherit",
        margin: " 0",
        fontSize: "15px",
        fontFamily: "sans-serif",
        height: " 100%",
        lineHeight: "1.8",

    }
}))

function App() {
    const classes = useStyles();

    return (
        <body className={classes.body}>
        <Navbar/>
        <Header/>
        </body>

    );
}

export default App;
