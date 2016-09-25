import React from 'react';

class FeedbackItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="feedback-item">
                <h2 className="feedback-item-title">{this.props.title}</h2>
                <p className="feedback-item-text">{this.props.message}</p>
                <span className="feedback-item-remove">
                    <i className="fa fa-remove fa-1x" data-id={this.props.id} onClick={this.props.remove}/>
                </span>
            </div>
        );
    }
}

export default FeedbackItem;