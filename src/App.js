
import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Main from './Component/Main';

function App() {
  const [darkMode, setDarkMode] = React.useState(true)
    
  function toggleDarkMode() {
      setDarkMode(prevMode => !prevMode)
  }
  return (
    <div className='container'>
      <Navbar darkMode={darkMode} 
                toggleDarkMode={toggleDarkMode} />
      <Main  darkMode={darkMode} />

    </div>
  );
}

export default App;
