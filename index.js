import React, { Component } from 'react';
import { render } from 'react-dom';
import Hero from './Hero';
import './style.css';
import ErrorBoundary from './ErrorBoudary';

class App extends Component {
  

  render() {
    return (
      <div>
      <ErrorBoundary><Hero heroname="Batman" /></ErrorBoundary>
       <ErrorBoundary> <Hero heroname="Superman"/></ErrorBoundary>
        <ErrorBoundary><Hero heroname="Joker"/></ErrorBoundary>
        
        
       
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
