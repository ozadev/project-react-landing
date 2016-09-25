import React from 'react';

class HistoryBlock extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="about-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis mauris interdum, blandit nulla at, bibendum velit. Donec tristique, tortor cursus posuere aliquam</p>
                <ul className="about-content-list">
                    <li className="about-content-list-item"><span className="about-content-done-text">Vestibulum quis mauris</span></li>
                    <li className="about-content-list-item"><span className="about-content-done-text">Vestibulum quis mauris</span></li>
                    <li className="about-content-list-item"><span className="about-content-done-text">Vestibulum quis mauris</span></li>
                    <li className="about-content-list-item"><span className="about-content-done-text">Vestibulum quis mauris</span></li>
                    <li className="about-content-list-item"><span className="about-content-done-text">Vestibulum quis mauris</span></li>
                    <li className="about-content-list-item"><span className="about-content-done-text">Vestibulum quis mauris</span></li>
                    <li className="about-content-list-item"><span className="about-content-done-text">Vestibulum quis mauris</span></li>
                    <li className="about-content-list-item"><span className="about-content-done-text">Vestibulum quis mauris</span></li>
                </ul>
            </div>
        );
    }
}


export default HistoryBlock;