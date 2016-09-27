import React from 'react';
import { Link } from 'react-router';

class NewsItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-xs-12 col-sm-6 col-md-3 news-container">
                <Link to={`/${this.props.id}`}>
                    <div className="news-photo-container">
                        <img src={this.props.src} />
                        <span className="news-date">{this.props.date}</span>
                    </div>
                    <h2 className="news-title">{this.props.title}</h2>
                </Link>
            </div>
        );
    }
}

export default NewsItem;