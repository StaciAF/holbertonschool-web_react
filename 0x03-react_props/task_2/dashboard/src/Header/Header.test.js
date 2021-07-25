import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header /> renders without crash', () => {
    it('Successfully renders <Header /> component', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toHaveLength(1);
    });
    it('Successfully renders <h1>, <img> elements in <Header /> component', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('div.App-header h1')).toHaveLength(1);
        expect(wrapper.find('div.App-header img')).toHaveLength(1);
    });
});
