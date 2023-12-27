import './App.css';
import Nav from './Nav-bar-compenent/navbar';
import Home from './Pages/Home_page';
import Detail from './Detail-country/detail';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader &&
        <div className='App'>
          <span class="loader"></span><br />
          <h2>World-4U</h2>
        </div>}

      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Detail/:name' element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
