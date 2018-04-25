import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from '../actions/actionTypes';

const initState = [{ text: 'Write code!' }];

export default function notes(state = initState, action) {
	let noteList = state.slice();

	switch (action.type) {
		case ADD_NOTE:
			console.log('Got here');
			return [...state, { text: action.text }];

		case UPDATE_NOTE:
			let noteToUpdate = noteList[action.id];
			noteToUpdate.text = action.text;
			noteList.splice(action.id, 1, noteToUpdate);
			return noteList;

		case DELETE_NOTE:
			noteList.splice(action.id, 1);
			return noteList;

		default:
			return state;
	}
}
