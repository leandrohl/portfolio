import React from 'react';
import './styles/global.css'
import Header from './components/header';
import Banner from './components/banner';
import AboutMe from './components/about-me';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <AboutMe />
    </div>
  );
}

export default App;
