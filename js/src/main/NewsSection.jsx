import React from 'react';

import NewsApp from './../containers/newsApp.jsx';

class NewsSection extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <section id="news">
                <div className="light-bg section-offset-bottom">
                    <div className="container">
                        <div className="title-content">
                            <h1>Breaking News</h1>
                            <hr /><hr />
                        </div>
                        <NewsApp />
                    </div>
                </div>
            </section>
        )
    }
}

export default NewsSection;