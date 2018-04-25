import React from 'react';
import { shallow } from 'enzyme';

import NewTodoField from './NewTodoField';

describe('<NewTodoField />', () => {
  let props = { meta: { error: null } }
  let newTodoField = shallow(<NewTodoField { ...props } />);

  it('renders correctly', () => {
    expect(newTodoField).toMatchSnapshot();
  })

  it('renders a text input element', () => {
    expect(newTodoField.find('input').props().type).toEqual('text');
  })

  describe('when input field is empty', () => {
    it('displays a placeholder', () => {
      expect(newTodoField.find('input').props().placeholder.text()).toEqual('Add a new todo...');
    })
  })

  describe('when not in error state', () => {
    it('does not display an error message', () => {
      expect(newTodoField.children()[1].text()).toEqual('');
    })
  })

  describe('when in error state', () => {
    let props = { meta: { error: 'Please enter a todo before submitting' } }
    let newTodoField = shallow(<NewTodoField { ...props } />);
    it('displays an error message', () => {
      expect(newTodoField.children()[1].text()).toEqual('Please enter a todo before submitting');
    })
  })

})