import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from '../actions/newsActions.js';

class NewsView extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        if (this.props.data.length == 0) {
            this.props.fetchUsers('data/data.json');
        }
    }
    render() {
        let id = this.props.params.id;

        let data = this.props.data.filter((item) => {
            return item.id == id;
        })[0];

        if (!data)
            data = {};

        return (
            <section>
                <div className="light-bg" style={{paddingTop: '100px', height: '100vh'}}>
                    <div className="container">
                        <div className="title-content">
                            <h1>{`Amazing Post #${id}`}</h1>
                            <hr /><hr />
                        </div>
                        <h3>Date: {data.date}</h3>
                        <p>{data.text}</p>
                        <div className="news-btn-container">
                            <Link to="/">
                                <span className="btn news-load-btn">Back</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.news.data
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchUsers: actions.fetchUsers,
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(NewsView);