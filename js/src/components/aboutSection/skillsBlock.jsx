import React from 'react';

let data = [
    {text: 'User interface', width: '75%', backgroundColor: '#9c5da5'},
    {text: 'Web design', width: '85%', backgroundColor: '#11b0de'},
    {text: 'Wordpress', width: '70%', backgroundColor: '#d67f7f'},
    {text: 'HTML & CSS', width: '90%', backgroundColor: '#20bc9d'},
    {text: 'App design', width: '85%', backgroundColor: '#bb8a36'}
];

class SkillsBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let items = data.map((item, index) => {
            return (
                <div key={index} className="skills-diagram-container">
                    <div className="skills-diagram" style={{
                        width: this.props.show ? item.width: 0,
                        backgroundColor: item.backgroundColor }}>
                        {item.text}
                    </div>
                </div>
            );
        });

        return (
            <div className="about-content">
                {items}
            </div>
        );
    }
}

export default SkillsBlock;