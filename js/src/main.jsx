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

//------------------------------------------------------
import sliderReducer from './reducers/sliderReducer';
import teamFactsReducer from './reducers/teamFactsReducer';


const reducers = combineReducers({
    slider: sliderReducer,
    teamFacts: teamFactsReducer
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
    <ScrollLink className="footer-btn" to="home" {...scrollOptions}><i className="fa fa-angle-up"></i></ScrollLink>,
    document.getElementById("btn-footer-top")
);
