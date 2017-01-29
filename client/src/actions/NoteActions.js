import {
  ADD_NOTE, 
  DELETE_NOTE, 
  CHANGE_NOTE 
} from '../constants/ActionTypes';

export function addNote(note) {
  return {
    type: ADD_NOTE,
    note
  }
}

export function deleteNote(note) {
  return {
    type: DELETE_NOTE,
    note
  }
}

export function changeNote(note) {
  return {
    type: CHANGE_NOTE,
    note
  }
}