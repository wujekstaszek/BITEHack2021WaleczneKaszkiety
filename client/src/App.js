import Navbar from './components/Navbar';
import React from 'react';
import Topbar from './components/Topbar';
import './App.scss';

const App = ({ routes }) => {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
    </div>
  );
};



export default App;
