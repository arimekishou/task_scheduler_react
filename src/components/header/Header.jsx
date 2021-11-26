import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    backDiv: {
        backgroundImage: `url("http://localhost:3000/mac.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "48px",
        height: "100vh",
        display: "left",
        color: "white",
        fontFamily: "sans-serif",

    },
    header: {
        color: "#fff!important",
        boxSizing: "inherit",
        fontSize: " 64px!important",
        position: "absolute",
        top: "50%",
        left: "0%",
        transform: "translate(0%,-50%)",
        padding: "48px"

    },
    text1: {
        boxSizing: "inherit",
        fontSize: "64px!important"
    },

    text2: {
        boxSizing: "inherit",
        webkitTextSizeAdjust: "100%",
        fontSize: "18px!important"
    }
}))

const Header = () => {
    const classes = useStyles();

    return (
        <header className={classes.backDiv}>
            <div className={classes.header} style={{padding: "48px"}}>
            <span className={classes.text1}>
                Get things in order with Task Scheduler
            </span>
                <br/>
                <span className={classes.text2}>Stop wasting valuable time thinking about your tasks, just write them down.</span>
                <br/>
                <p>
                    <a
                        href="#registration"
                        className="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">
                        Get started
                    </a>
                </p>
                <div className="w3-display-bottomleft w3-text-grey w3-large">
                    <a href="https://www.instagram.com/arimekishou">
                        <i className="fa fa-instagram w3-hover-opacity"/>
                    </a>
                    <a href="https://twitter.com/arimekishou">
                        <i className="fa fa-twitter w3-hover-opacity"/>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
//
// import React from 'react';
// import {makeStyles} from "@material-ui/core/styles";
// import {Button, Container, Grid, Paper, Typography} from "@material-ui/core";
//
// const useStyles = makeStyles((theme) => ({
//     mainFeaturePost: {
//         //position: "relative",
//         //color: theme.palette.common.white,
//        // marginBottom: theme.spacing(16),
//         //backgroundSize: "cover",
//         //backgroundRepeat: "no-repeat",
//         //backgroundPosition: "center"
//     },
//     mainFeaturePostContent: {
//         padding: theme.spacing(20),
//         marginTop: theme.spacing(10),
//     },
//     overlay: {
//         position: "absolute",
//         top: 0,
//         bottom: 0,
//         right: 0,
//         left: 0,
//         // eslint-disable-next-line
//         backgroundOverlay: "rgba(0,0,0,.3)"
//     },
// }))
//
// const Header = () => {
//     const classes = useStyles();
//     return (<Paper className = {classes.mainFeaturePost}
//                    style={{backgroundImage:`url(https://source.unsplash.com/random)`}}>
//         <Container fixed>
//             <div className={classes.overlay}/>
//             <Grid>
//                 <Grid item md={17}>
//                     <div className = {classes.mainFeaturePostContent}>
//                         <Typography component="h1"
//                                     variant="h3"
//                                     color = "inherit"
//                                     gutterBottom>
//                             Car shop
//                         </Typography>
//                         <Typography
//                             variant="h5"
//                             color="inherit"
//                             paragraph>
//                             A small web aplication
//                             Writing on Java Spring Boot and React
//                         </Typography>
//                         <Button variant="contained" color="secondary">Learn more</Button>
//                     </div>
//                 </Grid>
//             </Grid>
//         </Container>
//     </Paper>);};
// export default Header;