import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SkillsBlock from '../components/aboutSection/skillsBlock.jsx';
import BiographyBlock from '../components/aboutSection/biographyBlock.jsx';
import HistoryBlock from '../components/aboutSection/historyBlock.jsx';

import * as actions from '../actions/aboutActions.js';


class AboutApp extends React.Component {
    constructor(props) {
        super(props);

        this.scrollHandler = this.scrollHandler.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', this.scrollHandler);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.scrollHandler);
    }

    scrollHandler(e) {
        let top = document.querySelector('#about-block').getBoundingClientRect().top;
        let bottom = document.querySelector('#about-block').getBoundingClientRect().bottom;
        let headerOffset = 100;

        if (top <= document.documentElement.clientHeight && bottom >= headerOffset) {
            document.removeEventListener('scroll', this.scrollHandler);
            this.props.showSkillsEnable();
        }
    }

    render() {

        let viewBlock = <SkillsBlock />;

        switch (this.props.currView) {
            case 0:
                viewBlock = <HistoryBlock />;
                break;
            case 1:
                viewBlock = <BiographyBlock />;
                break;
            case 2:
                viewBlock = <SkillsBlock show={this.props.skillsShow}/>;
                break;
        }

        let links = ['Out history', 'Our biography', 'Our skills'].map((item, index) => {
            let classes = `about-nav-item ${this.props.currView === index ? 'active' : ''}`;

            return (
                <li key={index}
                    className={classes}
                    onClick={() => this.props.showView(index)}>
                    {item}
                </li>
            );
        });

        return (
            <div id="about-block">
                <ul className="about-nav">
                    {links}
                </ul>
                {viewBlock}
            </div>
        );
    }
} 

function mapStateToProps(state) {
    return {
        currView: state.about.currView,
        skillsShow: state.about.skillsShow
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        showView: actions.showView,
        showSkillsEnable: actions.showSkillsEnable
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(AboutApp);