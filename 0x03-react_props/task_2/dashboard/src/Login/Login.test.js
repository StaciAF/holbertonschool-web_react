import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('<Login /> renders without crash', () => {
    it('Successfully renders <Login /> component', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).toHaveLength(1);
    });
    it('Successfully renders <input>, <label> elements in <Login /> component', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input')).toHaveLength(2);
        expect(wrapper.find('label')).toHaveLength(2);
    });
});
