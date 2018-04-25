import React, { Fragment } from 'react';

const NewTodoField = ({ meta: { error } }) => 
  <Fragment>
    <input
      id="new-todo-input"
      type="text"
      placeholder="Add a new todo..."
    />
    <p>{ error }</p>
  </Fragment>
 
export default NewTodoField;