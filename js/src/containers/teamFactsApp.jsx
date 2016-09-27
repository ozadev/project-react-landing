import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TeamFactsItem from '../components/teamFactsItem.jsx';

import * as actions from '../actions/teamFactsActions.js';

let data = [
    {title: 'Works', number: 4609, favicon: <i className="fa fa-briefcase fa-2x" />},
    {title: 'Customers', number: 3470, favicon: <i className="fa fa-user fa-2x" />},
    {title: 'Purchase', number: 2908, favicon: <i className="fa fa-shopping-cart fa-2x" />},
    {title: 'Office', number: 1908, favicon: <i className="fa fa-map-marker fa-2x" />}
];

class TeamFactsApp extends React.Component {
    constructor(props) {
        super(props);

        this.scrollHandler = this.scrollHandler.bind(this);
    }

    componentWillMount() {
        this.props.initOptions(
            data.map((item) => {
                return item.number;
            })
        );
    }

    componentDidMount() {
        document.addEventListener('scroll', this.scrollHandler);
    }

    scrollHandler(e) {
        if (!document.querySelector('.team-facts')) {
            return;
        }
        let top = document.querySelector('.team-facts').getBoundingClientRect().top;
        let bottom = document.querySelector('.team-facts').getBoundingClientRect().bottom;
        let headerOffset = 100;

        if (top <= document.documentElement.clientHeight && bottom >= headerOffset) {
            document.removeEventListener('scroll', this.scrollHandler);
            this.props.startCount(100);
        }
    }

    render() {

        if (this.props.finished) {
            this.props.stopCount();
        }

        let items = data.map((item, index) => {
            return <TeamFactsItem key={index} title={item.title} number={this.props.currNumber[index]} favicon={item.favicon} />;
        });


        return (
            <ul className="team-facts clearfix">
                {items}
            </ul>
        );
    }
} 

function mapStateToProps(state) {
    return {
        currNumber: state.teamFacts.currNumber,
        finished: state.teamFacts.finished
    }
}  

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        initOptions: actions.initOptions,
        startCount: actions.startCount,
        stopCount: actions.stopCount
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(TeamFactsApp);