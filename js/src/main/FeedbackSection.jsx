import React from 'react';

import FeedbackApp from './../containers/feedbackApp.jsx';

class FeedbackSection extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section id="feedback">
                <div className="light-bg-tone">
                    <div className="container">
                        <div className="title-content">
                            <h1>Feedback</h1>
                            <hr /><hr />
                        </div>
                        <FeedbackApp />
                    </div>
                </div>
            </section>
        )
    }
}

export default FeedbackSection;