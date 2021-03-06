import { ADD_TODO, EDIT_TODO, DELETE_TODO, TOGGLE_TODO_COMPLETE } from './constants';

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo
})

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: id
})

export const editTodo = (id, content) => ({
  type: EDIT_TODO,
  payload: { id, content }
})

export const toggleTodoComplete = id => ({
  type: TOGGLE_TODO_COMPLETE,
  payload: id
})