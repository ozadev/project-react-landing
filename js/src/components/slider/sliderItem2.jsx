import React from 'react';

class SliderItem2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        let sliderItemBg = {
            background: 'linear-gradient(to bottom, rgba(30, 30, 30, .5) 0%, rgba(30, 30, 30, .5) 100%), url("./img/home-bg2.jpg") no-repeat center',
            backgroundSize: 'cover'
        };

        return (
            <li className="slider-item" style={sliderItemBg}>
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