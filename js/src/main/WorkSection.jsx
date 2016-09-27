import React from 'react';

import PortfolioApp from './../containers/portfolioApp.jsx';

class WorkSection extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section id="work">
                <div className="light-bg-tone section-offset-bottom">
                    <div className="container">
                        <div className="title-content">
                            <h1>Our Amazing Work</h1>
                            <hr /><hr />
                        </div>
                        <PortfolioApp />
                    </div>
                </div>
            </section>
        )
    }
}

export default WorkSection;