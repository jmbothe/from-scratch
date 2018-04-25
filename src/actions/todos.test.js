import { ADD_TODO, EDIT_TODO, DELETE_TODO, TOGGLE_TODO_COMPLETE } from './constants';
import { addTodo, editTodo, deleteTodo, toggleTodoComplete } from './todos';

describe('todo action creators', () => {
  it('creates an action to add a new todo', () => {
    const todo = 'do something';
    const expectedAction = { type: ADD_TODO, payload: todo };

    expect(addTodo(todo)).toEqual(expectedAction);
  })

  it('creates an action to delete a todo', () => {
    const id = 1;
    const expectedAction = { type: DELETE_TODO, payload: id };

    expect(deleteTodo(id)).toEqual(expectedAction);
  })

  it('creates an action to edit a todo', () => {
    const id = 1;
    const content = 'change todo';
    const expectedAction = { type: EDIT_TODO, payload: { id, content } }

    expect(editTodo(id, content)).toEqual(expectedAction);
  })

  it('creates an action to toggle todo complete', () => {
    const id = 1
    const expectedAction = { type: TOGGLE_TODO_COMPLETE, payload: id }

    expect(toggleTodoComplete(id)).toEqual(expectedAction);
  })
})