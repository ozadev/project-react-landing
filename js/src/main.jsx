import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { default as thunk } from 'redux-thunk';
import { Link as ScrollLink } from 'react-scroll';

//------------------------------------------------------
import SliderApp from './containers/sliderApp.jsx';
import NavHead from './components/navHeader.jsx';

//------------------------------------------------------
import sliderReducer from './reducers/sliderReducer';
// import usersReducer from './reducers/usersReducer';


const reducers = combineReducers({
    slider: sliderReducer
    // users: usersReducer
});

const middleware = applyMiddleware(thunk);
const store = createStore(reducers, middleware);

//------------------------------------------------------

ReactDOM.render(
    <Provider store={store}>
        <SliderApp />
    </Provider>,
    document.getElementById('slider-home')
);






//------------------------------------------------------
// Add scroll links (header navigation and buttons)

var scrollOptions = {
    duration: 1000,
    offset: -100,
    smooth: true,
    spy: true
};

ReactDOM.render(<NavHead activeClass="nav-active" {...scrollOptions}/>, document.getElementById('nav-main'));
// ReactDOM.render(<ScrollLink className="btn home-btn" to="work" {...scrollOptions}>Explore now</ScrollLink>, document.getElementById('btn-home-explore'));
// ReactDOM.render(
//     <ScrollLink className="btn home-btn" to="contact" {...scrollOptions}>Purchase now</ScrollLink>,
//     document.getElementById('btn-home-purchase')
// );
ReactDOM.render(
    <ScrollLink className="footer-btn" to="home" {...scrollOptions}><i className="fa fa-angle-up"></i></ScrollLink>,
    document.getElementById("btn-footer-top")
);

//------------------------------------------------------
// Test section

// var curr = 1;
// var slider = document.querySelector(".slider");
// var width = slider.querySelector('.slider-item').clientWidth;
// slider.style.transitionDuration = '0s';
// slider.style.transform = 'translate3d(-' + width * curr + 'px, 0px, 0px)';
//
// function switchSlide(dir) {
//     var slider = document.querySelector(".slider");
//     var width = slider.querySelector('.slider-item').clientWidth;
//
//     if(dir) {
//         curr++;
//     }
//     else {
//         curr--
//     }
//
//     slider.style.transitionDuration = '1s';
//     slider.style.transform = 'translate3d(-' + width * curr + 'px, 0px, 0px)';
//
//     if(curr == 0) {
//         setTimeout(() => {
//             curr = 3;
//             slider.style.transitionDuration = '0s';
//             slider.style.transform = 'translate3d(-' + width * curr + 'px, 0px, 0px)';
//         }, 1000);
//
//     }
//
//     if(curr == 4) {
//         setTimeout(() => {
//             curr = 1;
//             slider.style.transitionDuration = '0s';
//             slider.style.transform = 'translate3d(-' + width * curr + 'px, 0px, 0px)';
//         }, 1000);
//     }
//
//
// }
//
// document.querySelector('.slider-nav-right').addEventListener('click', () => {switchSlide(1)});
// document.querySelector('.slider-nav-left').addEventListener('click', () => {switchSlide(0)});



