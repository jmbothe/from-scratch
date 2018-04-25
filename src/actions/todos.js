import { ADD_TODO, EDIT_TODO, DELETE_TODO, TOGGLE_TODO_COMPLETE } from './constants';

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo
})

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: id
})

export const editTodo = (id, todo) => ({
  type: EDIT_TODO,
  payload: { id, todo }
})

export const toggleTodoComplete = id => ({
  type: TOGGLE_TODO_COMPLETE,
  payload: id
})