import { 
  ADD_NOTE, 
  DELETE_NOTE, 
  FETCH_NOTES, 
  FETCH_NOTES_SUCCESS, 
  FETCH_NOTES_ERROR 
} from '../constants/ActionTypes';

const initialState = [];

export function addNote() {

}

export function deleteNote() {
  
}

export default function customers(state = initialState, action) {
  switch(action.type) {
    case ADD_NOTE:
      return addNote();
    case DELETE_NOTE:
      return deleteNote();
    default:
      return state;
  }
}

