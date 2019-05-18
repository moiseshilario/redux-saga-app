const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE_REQUEST':
      return { ...state, loading: true, error: null };
    case 'ADD_FAVORITE_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data],
      };
    case 'ADD_FAVORITE_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case 'REMOVE_FAVORITE':
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}
