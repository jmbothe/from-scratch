import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

export class NewTodo extends Component {
  render() { 
    return (
    <section>
      <form>
        <Field />
      </form>
    </section>
    )
  }
}

export default NewTodo;