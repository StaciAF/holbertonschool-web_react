import React from 'react'
import './App.css';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Notifications from '../Notifications/Notifications'


const App = () => {
  return (
    <>
      <Notifications />
      <Header />
      <Login />
      <Footer />
    </>
  );
}

export default App;
