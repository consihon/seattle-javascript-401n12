import React from 'react';

import NoteForm from '../NoteForm/NoteForm'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        /*
            this array will hold all of our note items which will each contain
            -id
            -title
            -note
        */
        this.state.notes = [];
    }

        renderNotes = () => {
            return (
                <ul>
                    {
                        this.state.notes.map(currentNote => {
                            return <li key={currentNote.id}>
                                {currentNote.title}:{currentNote.note}
                            </li>
                        })
                    }
                </ul>
            );
        }

        handleAddNote = note => {
            note.id = Math.random();
            note.createdOn = new Date();

            this.setState((previousState) => {
                return {
                    notes: [...previousState.notes, note],
                }
            });
        };

    render(){
        return(
            <div>
                <h2>Notes Dashboard</h2>
                <NoteForm handleAddNote={this.handleAddNote}/>
                {this.renderNotes()}
            </div>
        );
    }

}