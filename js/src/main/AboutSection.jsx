import React from 'react';

import AboutApp from './../containers/aboutApp.jsx';

class AboutSection extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section id="about">
                <div className="dark-bg about-container">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12 col-md-6 about-poster-container">
                                <div className="about-poster">
                                    <img src="img/about-img.jpeg" />
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <div className="title-content">
                                            <h1>About Our Company</h1>
                                            <hr /><hr />
                                        </div>
                                        <AboutApp />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutSection;