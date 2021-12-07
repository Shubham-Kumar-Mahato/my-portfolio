import React from 'react';
import './App.css';
import Header from './Navbar';
import Firstpage from './Home'
import Education from './Education';
import Projectlist from './Project';
import Hobby from './Hobby';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
  <>
    <Router>
 
 <Header/>
  <Routes>
    <Route path="/" element={<Firstpage/>}></Route>
<Route path="/Education" element={<Education/>}></Route>
<Route path="/Project" element={<Projectlist/>}></Route>
<Route path="/Hobby" element={<Hobby/>}></Route>
  </Routes>
  </Router>
</>
  );
}

export default App;
