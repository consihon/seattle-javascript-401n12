import React from "react";

export default class Search extends React.Component {
    constructor(props){
        super(props);
        this.state={};
    };

    handleChangeNum = event => {
        this.setState({num:event.target.value})
    }

    handleChangeSub = event => {
        this.setState({sub:event.target.value})
    }

    handleSubmit=event=>{
        event.preventDefault();
        this.props.submit(this.state);
    }

    render(){
        return (
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Subreddit:
                        <input
                        name='subName'
                        type='text'
                        value={this.state.subName}
                        onChange={this.handleChangeSub}
                        />
                    </label>
                    <label>
                        show(0-100):
                        <input
                            type='number'
                            name='resultNum'
                            value={this.state.number}
                            onChange={this.handleChangeNum}
                        />
                    </label>
                    <input type={'submit'} value="Submit"/>
                </form>
            </div>
    )}
    }

