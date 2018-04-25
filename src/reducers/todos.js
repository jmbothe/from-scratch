import { ADD_TODO, DELETE_TODO, TOGGLE_TODO_COMPLETE, EDIT_TODO } from '../actions/constants';

const generateId = (state) => {
  const ids = Object.keys(state); 
  if (!ids.length) return 1;

  return +ids.sort()[ids.length - 1] + 1;
}

export default (state = {}, action) => {
  let newState;

  switch (action.type) {
    case ADD_TODO:
      const id = generateId(state);
      newState = {...state, [id]: { id, content: action.payload, completed: false } };
      break;
      
    case DELETE_TODO:
      /*
      let { [action.payload]: value, ...rest } = state;
      return rest;

      https://github.com/babel/babel/issues/4074
      */

      newState = Object.keys(state).reduce((acc, item) => {
        if (item != action.payload) {
          acc[item] = state[item];
        }
        return acc
      }, {})
      break;

    case EDIT_TODO:
      newState =
        {...state, [action.payload.id]: {...state[action.payload.id], content: action.payload.content } };
      break;

    case TOGGLE_TODO_COMPLETE:
      newState =
        { ...state, [action.payload]: {...state[action.payload], completed: !state[action.payload].completed } };
      break;

    default:
      return state;
      // return JSON.parse(localStorage.getItem('state')) || state;
  }
  // localStorage.setItem('state', JSON.stringify(newState));
  return newState;
}