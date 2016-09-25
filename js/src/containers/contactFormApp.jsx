import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions/contactFormActions.js';

class ContactFromApp extends React.Component {
    constructor(props) {
        super(props);

        this.changeFieldHandler = this.changeFieldHandler.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
    }

    changeFieldHandler(e) {
        this.props.changeFieldValue({text: e.target.value, type: e.target.name});
    }

    handlerSubmit(e) {
        if (this.props.nameField.valid && this.props.nameField.text &&
            this.props.emailField.valid &&  this.props.emailField.text &&
            this.props.messageField.valid && this.props.messageField.text) {
            alert('Success, data sent to the server!');
        }
        else {
            alert('Fail, data not valid or field is empty!');
            e.preventDefault();
        }
    }

    render() {
        return (
            <form className="contact-form" onChange={this.changeFieldHandler} onSubmit={this.handlerSubmit}>
                <span className="error" style={{display: this.props.nameField.valid ? 'none': ''}}>Invalid characters at name field</span>
                <input type="text" name="name" value={this.props.nameField.text} placeholder="Name" />
                <span className="error" style={{display: this.props.emailField.valid ? 'none': ''}}>Invalid characters at email field</span>
                <input type="text" name="email" value={this.props.emailField.text} placeholder="Email" />
                <span className="error" style={{display: this.props.messageField.valid ? 'none': ''}}>Too short message (at least 20 characters)</span>
                <textarea className="message" name="message" value={this.props.messageField.text} placeholder="Message" />
                <button type="submit" className="btn contact-form-btn">Send request</button>
            </form>
        );
    }
} 

function mapStateToProps(state) {
    return {
        nameField: state.contactForm.nameField,
        emailField: state.contactForm.emailField,
        messageField: state.contactForm.messageField
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        changeFieldValue: actions.changeFieldValue
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ContactFromApp);