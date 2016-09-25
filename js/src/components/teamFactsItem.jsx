import React from 'react';

class TeamFactsItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className="team-facts-item">
                <div className="fact-circle">
                    {this.props.favicon}
                </div>
                <p className="fact-number">{this.props.number}</p>
                <h2 className="fact-title">{this.props.title}</h2>
            </li>
        )
    }
}

export default TeamFactsItem;