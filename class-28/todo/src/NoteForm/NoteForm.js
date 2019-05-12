import React from 'react';

export default class NoteForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            title : '',
            note : '',
        };
    }

    handleChange = event => {
        const {name,value} = event.target;

        this.setState({
            [name]: value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleAddNote(this.state)
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type = 'text'
                    name = 'title'
                    value = {this.state.title}
                    onChange = {this.handleChange}
                    placeHolder = 'title'
                />
                <input
                    type='text'
                    name='note'
                    value={this.state.note}
                    onChange={this.handleChange}
                    placeholder='note'
                />
                <button type='submit'>Create Note</button>
            </form>
        );
    }
}