import { ADD_TODO, EDIT_TODO, DELETE_TODO } from './constants';
import { addTodo, editTodo, deleteTodo } from './todos';

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
    const todo = 'change todo';
    const expectedAction = { type: EDIT_TODO, payload: { id, todo } }

    expect(editTodo(id, todo)).toEqual(expectedAction);
  })
})