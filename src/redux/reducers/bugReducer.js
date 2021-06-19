import {
  ADD_BUG,
  GET_BUGS,
  BUGS_ERROR,
  UPDATE_BUG,
  DELETE_BUG,
  SET_CURRENT,
  SEARCH_BUGS,
  SET_LOADING,
  CLEAR_CURRENT,
} from "../actions/types";

const initialState = {
  bugs: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BUGS:
      return {
        ...state,
        bugs: action.payload,
        loading: false,
      };
    case ADD_BUG:
      return {
        ...state,
        bugs: [...state.bugs, action.payload],
        loading: false,
      };
    case UPDATE_BUG:
      return {
        ...state,
        bugs: state.bugs.map((bug) =>
          bug.id === action.payload.id ? action.payload : bug
        ),
      };
    case DELETE_BUG:
      return {
        ...state,
        bugs: state.bugs.filter((bug) => bug.id !== action.payload),
        loading: false,
      };
    case SEARCH_BUGS:
      return {
        ...state,
        bugs: action.payload,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case BUGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
