
import React from 'react';
import './App.css';
import Header from './component/Header';
import MainBody from './pages/MainBody';

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Header />
      <MainBody/>
    </div>
  );
}

export default App;


