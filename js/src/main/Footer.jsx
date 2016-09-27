import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let scrollOptions = {
            duration: 1000,
            offset: -100,
            smooth: true,
            spy: true
        };
        return (
            <footer>
                <div className="dark-bg-tone">
                    <div className="container footer-container">
                        <p className="footer-text">Copyright 2016 <a className="text-highlight" href="javascript:void(0)">theHam</a> | All Rights Reserved</p>
                        <ScrollLink className="footer-btn" to="home" {...scrollOptions}><i className="fa fa-angle-up" /></ScrollLink>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;