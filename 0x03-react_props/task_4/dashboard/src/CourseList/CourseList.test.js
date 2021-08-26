import React from 'react';
import { shallow } from 'enzyme';

import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('<CourseList />', () => {
    it('Successfully renders <CourseList /> component', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper).toHaveLength(1);
        expect(wrapper.exists()).toBe(true);
    });

    it('Successfully renders <CourseList /> component with given row layout', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find(CourseListRow)).toHaveLength(5);
    });
})
