const INITIAL_STATE = [
  { id: 1, text: 'item 1' },
  { id: 2, text: 'item 2' },
  { id: 3, text: 'item 3' },
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text }];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}
