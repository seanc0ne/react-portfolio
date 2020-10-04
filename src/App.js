import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Project';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  const [navItems] = useState([
    {
      name: 'About Me',
      short: 'about',
    },
    {
      name: 'Portfolio',
      short: 'portfolio',
    },
    {
      name: 'Contact',
      short: 'contact',
    },
    {
      name: 'Resume',
      short: 'resume',
    },
  ]);
  const [currentNavItem, setCurrentNavItem] = useState('home');
  function displayComponent(navName) {
    switch (navName) {
      case 'Portfolio':
        return <Portfolio></Portfolio>;
      case 'Contact':
        return <ContactForm></ContactForm>;
      case 'Resume':
        return <Resume></Resume>;
      default: 
        return <About></About>;
    }
  }
  return (
    <div className="App">
      <Header
        navItems={navItems}
        setCurrentNavItem={setCurrentNavItem}
        currentNavItem={currentNavItem}
      ></Header>
      <main>{displayComponent(currentNavItem.name)}</main>
      <Footer></Footer>
    </div>
  );
}

export default App;
