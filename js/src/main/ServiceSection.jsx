import React from 'react';

import { Link } from 'react-router';

class ServiceSection extends React.Component {
    constructor(props) {
        super(props);

        this.linkClick = this.linkClick.bind(this);
    }

    linkClick(num) {
        let activeLink = document.querySelector('.service-nav-item.active');
        if (activeLink) {
            activeLink.classList.remove('active');
        }

        document.querySelectorAll('.service-nav-item')[num].classList.add('active');
    }

    render() {
        return (
            <section id="service">
                <div className="light-bg section-offset-bottom">
                    <div className="container">
                        <div className="title-content">
                            <h1>Our Services</h1>
                            <hr /><hr />
                        </div>
                        <div className="service-nav-container">
                            <ul className="service-nav">
                                <li className="service-nav-item active" onClick={() => this.linkClick(0)}>
                                    <Link to="/service/web"><span>Web Design</span></Link>
                                </li>
                                <li className="service-nav-item" onClick={() => this.linkClick(1)}>
                                    <Link to="/service/graphic"><span>Graphic Design</span></Link>
                                </li>
                                <li className="service-nav-item" onClick={() => this.linkClick(2)}>
                                    <Link to="/service/support"><span>Online Support</span></Link>
                                </li>
                                <li className="service-nav-item" onClick={() => this.linkClick(3)}>
                                    <Link to="/service/app"><span>App Design</span></Link>
                                </li>
                                <li className="service-nav-item" onClick={() => this.linkClick(4)}>
                                    <Link to="/service/marketing"><span>Online Marketing</span></Link>
                                </li>
                                <li className="service-nav-item" onClick={() => this.linkClick(5)}>
                                    <Link to="/service/seo"><span>Seo Service</span></Link>
                                </li>
                            </ul>
                        </div>
                        {this.props.children}
                    </div>
                </div>
            </section>
        )
    }
}

export default ServiceSection;