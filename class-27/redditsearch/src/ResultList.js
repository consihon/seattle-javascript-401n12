import React from "react";
import ResultObject from "./ResultObject.js"
export default class ResultList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <ul>
                {this.props.apiSearch.map(links =>
                    <ResultObject link={links}/>
                )}
            </ul>
        )
    }
}
