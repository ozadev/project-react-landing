import React from 'react';

class PortfolioItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className="work-images-item">
                <img src={this.props.src} />
                <div className="image-mask">
                    <span className="image-mask-content">
                        <span>
                            <a href="javascript:void(0)"><i className="fa fa-link" /></a>
                            <a href="javascript:void(0)"><i className="fa fa-search" /></a>
                        </span>
                        <h1 className="image-mask-title">{this.props.title}</h1>
                        <p className="image-mask-category">{this.props.category}</p>
                    </span>
                </div>
            </li>
        );
    }
}

export default PortfolioItem;