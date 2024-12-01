import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import PriceResults from './components/PriceResults';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <FilterBar />
      <PriceResults />
    </div>
  );
}

export default App;
