import React from 'react';
import { Link as ScrollLink, scrollSpy } from 'react-scroll';

// 'react-scroll' have bugs with active class, todo: fix

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        scrollSpy.update();
    }
    render() {
        let options = {
            duration: 1000,
            offset: -100,
            smooth: true,
            spy: true,
            activeClass: 'nav-active'
        };
        return (
            <div>
                <header id="header">
                    <div className="container">
                        <div className="logo-container">
                            <ScrollLink style={{cursor: 'pointer'}} to="home" {...options} activeClass="">
                                <span className="logo-img" />
                                <span className="logo-text logo-text-part1">the</span>
                                <span className="logo-text logo-text-part2">Ham</span>
                            </ScrollLink>
                        </div>
                        <nav className="nav-main">
                            <ul>
                                <li><ScrollLink to="home" {...options}>Home</ScrollLink></li>
                                <li><ScrollLink to="service" {...options}>Service</ScrollLink></li>
                                <li><ScrollLink to="about" {...options}>About</ScrollLink></li>
                                <li><ScrollLink to="work" {...options}>Work</ScrollLink></li>
                                <li><ScrollLink to="team" {...options}>Team</ScrollLink></li>
                                <li><ScrollLink to="news" {...options}>News</ScrollLink></li>
                                <li><ScrollLink to="feedback" {...options}>Feedback</ScrollLink></li>
                                <li><ScrollLink to="contact" {...options}>Contact</ScrollLink></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        )
    }
}


export default Header;