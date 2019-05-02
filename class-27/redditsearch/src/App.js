import React from 'react';
import './App.css';
import Search from './Search.js'
import ResultList from './ResultList'
import superagent from 'superagent'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.results = [];
    }

    submit = (obj) => {
        const REDDIT_API = `https://www.reddit.com/r/${obj.sub}.json?limit=${obj.num}`;
        return superagent.get(REDDIT_API)
            .then(response => {
                this.setState({
                    results: response.body.data.children
                });
            }).catch(console.error);
    };

    render() {
        return (
            <main>
            <Search
                submit={this.submit}
            />
            <ResultList
                apiSearch={this.state.results}
            />
            </main>
        );
    }
}

