import React from 'react';
import './App.css';
import GenJoke from './components/genJoke'
import Button from 'react-bootstrap/Button';
import Header from './components/layout/header';
import Row from 'react-bootstrap/Button';

class App extends React.Component {
  render() {
    return (
      <div className="background">

      <Header/>
      <GenJoke/>

      </div>
    );
  }
}

export default App;
