import React from 'react';

class SliderItem2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className="slider-item">
                <div className="slider-content">
                    <div className="container slider-content-container">
                        <h1 className="slider-text1">#2 The ham is <span className="text-highlight">a psd template</span></h1>
                        <h2 className="slider-text2">We are fast</h2>
                        <p className="slider-text3">Lorem ipsum dolor sit amet, his ea.</p>
                        <div className="slider-btn-container">
                            <span name="btn-home-explore"></span>
                            <span name="btn-home-purchase"></span>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}


export default SliderItem2;