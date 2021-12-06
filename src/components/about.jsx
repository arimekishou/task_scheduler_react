import React from 'react';

const About = () => {
    return (
        <div className="w3-container" style={{padding:"128px 16px"}} id="about">
            <h3 className="w3-center">ABOUT THE TASK SCHEDULER</h3>
            <p className="w3-center w3-large">Key features of our site</p>
            <div className="w3-row-padding w3-center" style={{marginTop:"64px"}}>
                <div className="w3-quarter">
                    <i className="fa fa-desktop w3-margin-bottom w3-jumbo w3-center"/>
                    <p className="w3-large">Responsive</p>
                    <p>The task is very easy to set! Just remember to do it.</p>
                </div>
                <div className="w3-quarter">
                    <i className="fa fa-thumb-tack w3-margin-bottom w3-jumbo"/>
                    <p className="w3-large">Passion</p>
                    <p>After the first use, you won't need any other planners.</p>
                </div>
                <div className="w3-quarter">
                    <i className="fa fa-diamond w3-margin-bottom w3-jumbo"/>
                    <p className="w3-large">Design</p>
                    <p>User-friendly interface and communication.</p>
                </div>
                <div className="w3-quarter">
                    <i className="fa fa-cog w3-margin-bottom w3-jumbo"/>
                    <p className="w3-large">Support</p>
                    <p>If you have any problems, our support team will handle everything and help you.</p>
                </div>
            </div>
        </div>
    );
};

export default About;