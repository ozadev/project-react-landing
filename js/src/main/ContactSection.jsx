import React from 'react';

import ContactFormApp from './../containers/contactFormApp.jsx';

class ContactSection extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section id="contact">
                <div className="light-bg">
                    <div className="container-fluid">
                        <div className="row contact-container">
                            <div className="col-sm-6 map-container">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5081.197414391828!2d30.455183632927934!3d50.44857494917805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce82b9bc8a47%3A0x47514e5d91216bf3!2z0J3QotCj0KMgwqvQmtCfScK7!5e0!3m2!1suk!2sua!4v1474625293149" width="100%" height="550" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="title-content">
                                            <h1>Keep in Touch</h1>
                                            <hr /><hr />
                                        </div>
                                        <ContactFormApp />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactSection;