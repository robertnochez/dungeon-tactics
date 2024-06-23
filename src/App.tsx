import './App.css';
import React from 'react';
import Battlemap from './components/Battlemap/Battlemap';
/*
import Page from './components/Titlescreen/Titlescreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterCustomizer from './components/Character-Customizer/Character-Customizer';



function App() {
  return (
  <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/Character-Customizer" element={<CharacterCustomizer />} />
      </Routes>
    </Router>
  );
}
*/

function App() {
  return (
    <div id = "app">
      <Battlemap/>
    </div>
  );
}

export default App;
