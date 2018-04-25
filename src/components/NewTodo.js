import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import NewTodoField from './NewTodoField';

export class NewTodo extends Component {
  render() { 
    return (
    <section>
      <form>
        <Field name="new-todo-input" component={NewTodoField} />
      </form>
    </section>
    )
  }
}

export default NewTodo;