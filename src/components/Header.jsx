import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

    bgimg: {
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url("http://localhost:3000/mac.png")`,
        minHeight: "100%",
        height: "100vh"
    }

}))

const Header = () => {
    const classes = useStyles();

    return (
        <header className={classes.bgimg} id="home">
            <div className="w3-display-left w3-text-white" style={{padding: "48px"}}>
                <span className="w3-jumbo w3-hide-small">Get things in order with Task Scheduler</span><br/>
                <span className="w3-large">Stop wasting valuable time thinking about your tasks, just write them down.</span>
                <p>
                    <a
                        href="#registration"
                        className="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">
                        Get started
                    </a>
                </p>
            </div>
            <div className="w3-display-bottomleft w3-text-grey w3-large" style={{padding: "24px 48px"}}>
                <a href="https://www.instagram.com/arimekishou"><i className="fa fa-instagram w3-hover-opacity"/></a>
                <a href="https://twitter.com/arimekishou"><i className="fa fa-twitter w3-hover-opacity"/></a>
            </div>
        </header>
    );
};

export default Header;