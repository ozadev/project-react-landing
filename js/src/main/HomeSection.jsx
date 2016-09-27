import React from 'react';

import SliderApp from './../containers/sliderApp.jsx';

class HomeSection extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section id="home">
                <SliderApp />
                <ul className="home-options clearfix">
                    <li className="home-options-item">
                        <div className="option-item"></div>
                        <p className="option-text">Personalized options</p>
                    </li>
                    <li className="home-options-item">
                        <div className="option-item"></div>
                        <h2 className="option-text">Fully customizable</h2>
                    </li>
                    <li className="home-options-item">
                        <div className="option-item"></div>
                        <h2 className="option-text">Unlimited support</h2>
                    </li>
                    <li className="home-options-item">
                        <div className="option-item"></div>
                        <h2 className="option-text">Responsive all device</h2>
                    </li>
                </ul>
            </section>
        )
    }
}

export default HomeSection;