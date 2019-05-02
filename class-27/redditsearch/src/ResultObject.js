import React from "react";

export default class ResultObject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    render(){
        return (
                <li>
                    <img src={`${this.props.link.data.thumbnail}`} alt={"text"}></img>
                    <a href={`${this.props.link.data.permalink}`}>{this.props.link.data.title}</a>
                </li>
        )}
}

