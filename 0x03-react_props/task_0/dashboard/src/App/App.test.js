import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App /> renders without crash', () => {
  it('Successfully renders <App /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  });
});
