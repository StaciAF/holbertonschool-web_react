import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';


describe('App /> renders multiple components', () => {
  it('Successfully renders <App /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  });
  it('Successfully renders <App /> with <Notifications /> component within', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });
  it('Successfully renders <App /> with <Header /> component within', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });
  it('Successfully renders <App /> with <Login /> component within', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).toHaveLength(1);
  });
  it('Successfully renders <App /> with <Footer /> component within', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
  it('Successfully renders <App /> without <CourseList /> component within', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(Login)).toHaveLength(0);
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });
});
