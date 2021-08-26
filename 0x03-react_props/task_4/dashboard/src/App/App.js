import React from 'react'
import './App.css';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Notifications from '../Notifications/Notifications'
import CourseList from '../CourseList/CourseList'
import PropTypes from 'prop-types'


const App = ({ isLoggedIn }) => {
  return (
    <div className="App">
      <Notifications />
      <Header />
      <div />
      <hr className="hr_element" />
      { isLoggedIn ?
        <CourseList /> :
        <Login />}
      <Footer />
    </div>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};
App.defaultProps = {
  isLoggedIn: false
};

export default App;
