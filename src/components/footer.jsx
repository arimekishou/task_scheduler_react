import React from 'react';

const Footer = () => {
    return (
        <footer className="w3-center w3-black w3-padding-64">
            <a href="#home" className="w3-button w3-light-grey"><i className="fa fa-arrow-up w3-margin-right"/>To the
                top</a>
            <div className="w3-xlarge w3-section">
                <a href="https://www.instagram.com/arimekishou"><i className="fa fa-instagram w3-hover-opacity"/></a>
                <a href="https://twitter.com/arimekishou"><i className="fa fa-twitter w3-hover-opacity"/></a>
            </div>
            <p>Powered by <a href="https://github.com/arimekishou" title="github" rel="noreferrer" target="_blank"
                             className="w3-hover-text-green">Boris Drozdov</a></p>
        </footer>
    );
};

export default Footer;