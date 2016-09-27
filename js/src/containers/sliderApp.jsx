import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SliderItem1 from '../components/slider/sliderItem1.jsx';
import SliderItem2 from '../components/slider/sliderItem2.jsx';
import SliderItem3 from '../components/slider/sliderItem3.jsx';

import * as actions from '../actions/sliderActions.js';

class SliderApp extends React.Component {
    constructor(props) {
        super(props);

        this.switchNextSlide = this.switchNextSlide.bind(this);
        this.switchPrevSlide = this.switchPrevSlide.bind(this);
    }

    componentDidMount() {
        this.props.switchAuto();
    }

    componentWillUnMount() {
        // This action will clear timers
        this.props.switchToSlide();
    }

    switchNextSlide() {
        if (this.props.hiddenChange)
            return;

        this.props.switchToSlide('next');
        this.props.switchAutoEnable();
    }

    switchPrevSlide() {
        if (this.props.hiddenChange)
            return;

        this.props.switchToSlide('prev');
        this.props.switchAutoEnable();
    }

    render() {

        if (this.props.hiddenChange) {
            this.props.switchTimeoutHidden(this.props.transitionDuration);
        }

        let sliderOffset = this.props.currSlide * this.props.sliderWidth;
        let sliderOptions = {
            transform: `translate3d(${-sliderOffset}px, 0px, 0px)`,
            transitionDuration: `${this.props.transitionDuration}ms`
        };



        return (
            <div className="slider-container">
                <div className="container">
                    <div className="slider-nav-container">
                        <span className="slider-nav-left" onClick={this.switchPrevSlide}>
                            <i className="fa fa-angle-left" style={{fontSize:'40px'}} />
                        </span>
                        <span className="slider-nav-right" onClick={this.switchNextSlide}>
                            <i className="fa fa-angle-right" style={{fontSize:'40px'}} />
                        </span>
                    </div>
                </div>
                <ul style={sliderOptions} className="slider">
                    <SliderItem3 />
                    <SliderItem1 />
                    <SliderItem2 />
                    <SliderItem3 />
                    <SliderItem1 />
                </ul>
            </div>
        );
    }
} 

function mapStateToProps(state) {
    return {
        currSlide: state.slider.currSlide,
        transitionDuration: state.slider.transitionDuration,
        sliderWidth: state.slider.sliderWidth,
        hiddenChange: state.slider.hiddenChange
    }
}  

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        switchToSlide: actions.switchToSlide,
        switchTimeoutHidden: actions.switchTimeoutHidden,
        switchAuto: actions.switchAuto,
        switchAutoEnable: actions.switchAutoEnable
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SliderApp);