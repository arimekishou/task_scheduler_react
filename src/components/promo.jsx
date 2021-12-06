import React from 'react';

const Promo = () => {


    return (
        <div className="w3-container w3-light-grey" style={{padding: "128px 16px"}}>
            <div className="w3-row-padding">
                <div className="w3-col m6">
                    <h3 style={{fontFamily: "Raleway, sans-serif"}}>We know our responsibilities.</h3>
                    <p>It's important to appreciate the time in your life.
                        That's why we made this service for you and your time.<br/>
                        We will help you prioritize your tasks, teach you how to save time and not waste it on
                        useless
                        things.</p>
                    <p><a href={"#work"} className="w3-button w3-black"><i className="fa fa-th"> </i> Create first
                        task.</a></p>
                </div>
                <div className="w3-col m6">
                    <img className="w3-image w3-round-large" src="http://localhost:3000/phone_buildings.jpg" width="700"
                         height="394" alt={"phone"}/>
                </div>
            </div>
        </div>
    );
};

export default Promo;