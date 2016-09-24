import React from 'react';
import { Link, scrollSpy } from 'react-scroll';

var NavHeader = React.createClass({

    componentDidMount: function() {
        scrollSpy.update();
    },
    render: function() {

        var options = {
            duration: this.props.duration,
            smooth: this.props.smooth,
            spy: this.props.spy,
            offset: this.props.offset,
            activeClass: this.props.activeClass
        };

        return (
            <ul>
                <li><Link to="home" {...options}>Home</Link></li>
                <li><Link to="service" {...options}>Service</Link></li>
                <li><Link to="about" {...options}>About</Link></li>
                <li><Link to="work" {...options}>Work</Link></li>
                <li><Link to="team" {...options}>Team</Link></li>
                <li><Link to="news" {...options}>News</Link></li>
                <li><Link to="contact" {...options}>Contact</Link></li>
            </ul>

        )
    }
});


export default NavHeader;