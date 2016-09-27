import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NewsItem from './../components/newsItem.jsx';

import * as actions from '../actions/newsActions.js';


class NewsApp extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (this.props.data.length == 0) {
            this.props.fetchUsers('data/data.json');
        }
    }

    render() {

        let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        let showCount = this.props.showBlockVal * 8;

        let items = this.props.data.slice(0, showCount).map((item) => {
            let date = new Date(item.date);
            let dateStr = `${date.getDate()} ${monthNames[date.getMonth()]}`;
            let props = {
                key: item.id,
                id: item.id,
                title: `Amazing Post #${item.id}`,
                date: dateStr,
                src: 'img/news-img1.jpeg'
            };

            return <NewsItem {...props} />
        });


        return (
            <div>
                <div className="row">
                    {items}
                </div>
                <div className="news-btn-container">
                    <span className="btn news-load-btn" onClick={() => this.props.showMore()}><i className="fa fa-plus fa-1x" />Load more</span>
                </div>
            </div>
        );
    }
} 

function mapStateToProps(state) {
    return {
        data: state.news.data,
        showBlockVal: state.news.showBlockVal
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchUsers: actions.fetchUsers,
        showMore: actions.showMore
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(NewsApp);