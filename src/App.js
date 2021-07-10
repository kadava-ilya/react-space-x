import './style.css';
import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
// import { render } from '@testing-library/react';
// import Calendar from './components/Calendar/Calendar';
// import Details from './components/Details/Details';

class App extends React.Component{



  render(){
    return (
      <>
        <Header />
        <Main/>
        <Features />
        {/* <Calendar /> */}
        {/* <Details/> */}
        <Footer />
      </>
    );
  }
}

export default App;
