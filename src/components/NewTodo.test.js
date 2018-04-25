import React from 'react';
import { shallow } from 'enzyme';

import { NewTodo } from './NewTodo';

describe('<NewTodo />', () => {
  const newTodo = shallow(<NewTodo />)

  it('renders correctly', () => {
    expect(newTodo).toMatchSnapshot();
  })

  it('renders a form element', () => {
    expect(newTodo.find('form').exists()).toBe(true);
  })

  it('renders a redux-form <Field />', () => {
    expect(newTodo.find('Field').exists()).toBe(true);
  })
})