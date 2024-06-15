import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import { useState } from 'react';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark")
      document.body.style.backgroundColor = "#545b63";
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path='/about' element={<About/>} />
          <Route path='/' element={<TextBox/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
