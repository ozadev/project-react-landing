import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cookie from 'react-cookie';

import FeedbackItem from '../components/feedbackItem.jsx';
import * as actions from '../actions/feedbackActions.js';

class FeedbackApp extends React.Component {
    constructor(props) {
        super(props);

        this.addCommentHandler = this.addCommentHandler.bind(this);
        this.removeCommentHandler = this.removeCommentHandler.bind(this);
    }

    addCommentHandler() {
        let title = document.getElementsByName('feedback-title')[0].value;
        let message = document.getElementsByName('feedback-message')[0].value;
        if (title === '' || message === '') {
            alert('Comment not added, require more data')
            return;
        }

        this.props.addComment({title, message});

        document.getElementsByName('feedback-title')[0].value = '';
        document.getElementsByName('feedback-message')[0].value = '';
    }

    removeCommentHandler(e) {
        this.props.removeComment(e.target.dataset.id);
    }

    componentWillMount() {
        let data = cookie.load('messages');
        if (data === undefined) {
            data = [];
        }

        this.props.initComments(data);
    }

    componentDidUpdate() {
        cookie.save('messages', this.props.messages, {path: '/'});
    }

    render() {

        let items = this.props.messages.map((item, index) => {
            return (
                <FeedbackItem
                    key={index}
                    id={item.id}
                    title={item.title}
                    message={item.text}
                    remove={this.removeCommentHandler}/>
            )
        });

        return (
            <div>
                <div className="feedback-container">
                    {items}
                </div>
                <form className="row feedback-add-form">
                    <div className="col-xs-12 col-sm-8 col-md-offset-1 col-md-6">
                        <input type="text" name="feedback-title" placeholder="Title" />
                        <textarea name="feedback-message" placeholder="Message" />
                    </div>
                    <div className="col-xs-12 col-sm-4 feedback-btn-container">
                        <h1>Leave us a message</h1>
                        <span className="btn feedback-add-btn" onClick={this.addCommentHandler}>
                            <i className="fa fa-plus fa-1x" />Add comment
                        </span>
                    </div>
                </form>
            </div>
        );
    }
} 

function mapStateToProps(state) {
    return {
        messages: state.feedback.messages
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addComment: actions.addComment,
        removeComment: actions.removeComment,
        initComments: actions.initComments
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(FeedbackApp);