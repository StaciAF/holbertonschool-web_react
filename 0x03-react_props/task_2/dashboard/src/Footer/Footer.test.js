import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer /> renders without crash', () => {
    it('Successfully renders <Footer /> component', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toHaveLength(1);
    });
    it('Successfully renders Copyright text in <Footer /> component', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('footer.App-footer p').text()).toContain('Copyright');
    });
});
