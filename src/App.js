import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import MyWork from './components/MyWork';
import Skills from './components/Skills';
import Blog from './components/Blog';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <MyWork />
      <Skills />
      <Blog />
    </div>
  );
}

export default App;
