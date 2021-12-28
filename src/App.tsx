import React, { FC } from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import Test from './components/Test';

const App: FC = () => {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
