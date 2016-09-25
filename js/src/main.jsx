import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { default as thunk } from 'redux-thunk';
import { Link as ScrollLink } from 'react-scroll';

//------------------------------------------------------
import SliderApp from './containers/sliderApp.jsx';
import NavHead from './components/navHeader.jsx';
import TeamFactsApp from './containers/teamFactsApp.jsx';
import AboutApp from './containers/aboutApp.jsx';
import PortfolioApp from './containers/portfolioApp.jsx';
import ContactFormApp from './containers/contactFormApp.jsx';
import FeedbackApp from './containers/feedbackApp.jsx';

//------------------------------------------------------
import sliderReducer from './reducers/sliderReducer';
import teamFactsReducer from './reducers/teamFactsReducer';
import aboutReducer from './reducers/aboutReducer';
import portfolioReducer from './reducers/portfolioReducer';
import contactFormReducer from './reducers/contactFormReducer';
import feedbackReducer from './reducers/feedbackReducer';

const reducers = combineReducers({
    slider: sliderReducer,
    teamFacts: teamFactsReducer,
    about: aboutReducer,
    portfolio: portfolioReducer,
    contactForm: contactFormReducer,
    feedback: feedbackReducer
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

ReactDOM.render(
    <Provider store={store}>
        <TeamFactsApp/>
    </Provider>,
    document.getElementById('team-facts')
);

ReactDOM.render(
    <Provider store={store}>
        <AboutApp />
    </Provider>,
    document.getElementById('about-app')
);

ReactDOM.render(
    <Provider store={store}>
        <PortfolioApp />
    </Provider>,
    document.getElementById('portfolio')
);

ReactDOM.render(
    <Provider store={store}>
        <ContactFormApp />
    </Provider>,
    document.getElementById('contact-form')
);

ReactDOM.render(
    <Provider store={store}>
        <FeedbackApp />
    </Provider>,
    document.getElementById('feedback-app')
);




//------------------------------------------------------
// Add scroll links (header navigation and buttons)

let scrollOptions = {
    duration: 1000,
    offset: -100,
    smooth: true,
    spy: true
};

ReactDOM.render(<NavHead activeClass="nav-active" {...scrollOptions}/>, document.getElementById('nav-main'));
ReactDOM.render(
    <ScrollLink className="footer-btn" to="home" {...scrollOptions}><i className="fa fa-angle-up" /></ScrollLink>,
    document.getElementById("btn-footer-top")
);

ReactDOM.render(
    <ScrollLink style={{cursor: 'pointer'}} to="home" {...scrollOptions}>
        <span className="logo-img" />
        <span className="logo-text logo-text-part1">the</span>
        <span className="logo-text logo-text-part2">Ham</span>
    </ScrollLink>,
    document.querySelector(".logo-container")
);
