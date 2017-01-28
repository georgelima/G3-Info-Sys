import notes from '../src/reducers/notes';

import { addNote, deleteNote, changeNote } from '../src/actions/NoteActions';

const note = {
  _id: 10,
  totalValue: 0,
  items: []
};

describe("Notes reducer", () => {

  test("empty state", () => {
    const state = [];

    const newState = notes(state, { type: '@@INIT' });

    expect(newState).toEqual([]);
  });

  test("add note", () => {
    const state = [];

    const newState = notes(state, addNote(note));

    expect(newState).toEqual([note]);
  });

  test("delete note", () => {
    const state = [note];

    const newState = notes(state, deleteNote(note));

    expect(newState).toEqual([]);
  });

  test("change note", () => {
    const state = [note];

    const newNote = {
      _id: 10,
      totalValue: 1000,
      items: [{ item: "Folder", qtd: 100, price: 0.30 }]
    }

    const newState = notes(state, changeNote(newNote));

    expect(newState).toEqual([newNote]);
  });

});