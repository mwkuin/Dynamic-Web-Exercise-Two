import React from 'react';

//Styles
import './App.css';

//Components
import Header from './components/header';
import Home from './containers/home';

function App() {
  return (
    <div className="SiteWrapper">
      <Header />
      <Home />

    </div>
  );
}

export default App;
