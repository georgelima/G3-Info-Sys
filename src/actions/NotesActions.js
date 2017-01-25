export function addNote(state, note) {
  return state.concat(note);
}

export function deleteNote(state, note) {
  return state.filter(currentNote => currentNote._id !== note._id);
}