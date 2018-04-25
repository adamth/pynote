import { combineReducers } from 'redux';
import notes from './notes';

const pyNoteApp = combineReducers({
	notes
});

export default pyNoteApp;
