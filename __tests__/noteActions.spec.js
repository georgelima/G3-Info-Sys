import {
  ADD_NOTE,
  DELETE_NOTE,
  CHANGE_NOTE
} from '../src/constants/ActionTypes';

import { addNote, deleteNote, changeNote  } from '../src/actions/NoteActions';

const note = {
  _id: 10,
  totalValue: 500,
  items: []
};

describe("notes actions", () => {

  test("add note", () => {

    const action = addNote(note);

    expect(action).toEqual({ type: ADD_NOTE, note });

  });

  test("delete note", () => {

    const action = deleteNote(note);

    expect(action).toEqual({ type: DELETE_NOTE, note });

  });
  
  test("change note", () => {

    const action = changeNote(note);

    expect(action).toEqual({ type: CHANGE_NOTE, note });

  });

});