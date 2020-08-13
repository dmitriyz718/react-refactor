import React from 'react';
import './App.css';
import './components/Landing/Header/Header.css'
/* import './components/Blog/Blog.css' */
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import Blog from './components/Blog/Blog'
import Header from './components/Landing/Header/Header';
import Articles from './components/Landing/Articles/Articles';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div>
      Welcome to React Monument
      <Nav />
      <Landing />
      <Blog />
      {<Header />}
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
