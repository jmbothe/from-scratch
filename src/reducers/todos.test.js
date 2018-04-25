import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO_COMPLETE } from '../actions/constants';
import todosReducer from './todos';
import todosReducer2 from './todos';

describe('todo list reducer', () => {
  const state0 = {};
  const state1 = {'1': { id: 1, content: 'do something', completed: false } };
  const state2 = {...state1, '2': { id: 2, content: 'do something else', completed: false} };
  const state3 = { '1': { id: 1, content: 'do new thing', completed: false } }
  const State4 = { '1': { id: 1, content: 'do new thing', completed: true } }

  describe('when user visits app for the first time', () => {
    it('initializes the todos state', () => {
      expect(todosReducer(undefined, {})).toEqual(state);
    })
  })

  it('adds todos to the list', () => {
    expect(todosReducer(undefined, { type: ADD_TODO, payload: 'do something' }))
      .toEqual(state)
  })

  it('increments todo ids', () => {
    expect(todosReducer(state1, { type: ADD_TODO, payload: 'do something else' }))
      .toEqual(state2)
  })

  it('deletes todos from the list', () => {
    expect(todosReducer(state2, { type: DELETE_TODO, payload: 2 }))
      .toEqual(state1);
  })

  it('edits existing todos', () => {
    expect(todosReducer(state1, { type: EDIT_TODO, payload: { id: 1, todo: 'do new thing' } }))
      .toEqual(state3);
  })

  it('toggles todos complete', () => {
    expect(todosReducer(state3, { type: TOGGLE_TODO_COMPLETE, payload: 1 }))
      .toEqual(state4)
  })

  describe('on subsequent user visits', () => {
    it('sets todos state from localStorage', () => {
      expect(todosReducer2(undefined, {})).toEqual(state4);
    })
  })
})