import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('<App />', () => {
  const app = shallow(<App />)
  
  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  })

  it('renders a <Header />', () => {
    expect(app.find('Header').exists()).toBe(true)
  })

  it('contains a redux-connected <NewTodo />', () => {
    expect(app.find('Connect(NewTodo)').exists()).toBe(true)
  })

  it('renders a redux-connected <Todos />', () => {
    expect(app.find('Connect(Todos)').exists()).toBe(true)
  })

  it('renders a redux-connected <ViewFilters />', () => {
    expect(app.find('Connect(ViewFilters)').exists()).toBe(true)
  })
})