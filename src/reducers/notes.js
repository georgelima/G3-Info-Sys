import { 
  ADD_NOTE, 
  DELETE_NOTE, 
  CHANGE_NOTE 
} from '../constants/ActionTypes';

function addNote(state, note) {
  return state.concat(note);
}

function deleteNote(state, note) {
  return state.filter(currentNote => currentNote._id !== note._id);
}

function changeNote(state, note) {
  return state.map((current, i) => 
    current._id === note._id ? note : current
  );
}

export default function notes(state = [], action) {
  switch(action.type) {
    case ADD_NOTE:
      return addNote(action.note);
    case DELETE_NOTE:
      return deleteNote(action.note);
    case CHANGE_NOTE: 
      return changeNote(action.note);
    default:
      return state;
  }
}

