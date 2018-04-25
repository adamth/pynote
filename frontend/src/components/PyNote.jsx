import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { notes } from '../actions';

class PyNote extends Component {
	state = {
		text: '',
		updateNoteId: null
	};

	submitNote = e => {
		e.preventDefault();
		if (this.state.updateNoteId === null) {
			this.props.addNote(this.state.text);
		} else {
			this.props.updateNote(this.state.updateNoteId, this.state.text);
		}
		this.resetForm();
	};

	resetForm = () => {
		this.setState({ text: '', updateNoteId: null });
	};

	selectForEdit = id => {
		const note = this.props.notes[id];
		this.setState({ text: note.text, updateNoteId: id });
	};

	render() {
		return (
			<div>
				<h2>Welcome to PyNote!</h2>
				<hr />
				<h3>Notes</h3>
				<table>
					<tbody>
						{this.props.notes.map((note, id) => (
							<tr key={`note_${id}`}>
								<td>{note.text}</td>
								<td>
									<button onClick={() => this.selectForEdit(id)}>edit</button>
								</td>
								<td>
									<button onClick={() => this.props.deleteNote(id)}>delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<h3>Add new note</h3>
				<form onSubmit={this.submitNote}>
					<input type="text" value={this.state.text} placeholder="Enter note here..." onChange={e => this.setState({ text: e.target.value })} required />
					<input type="submit" value="Save note" />
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		notes: state.notes
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			addNote: notes.addNote,
			updateNote: notes.updateNote,
			deleteNote: notes.deleteNote
		},
		dispatch
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(PyNote);
