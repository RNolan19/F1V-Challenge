import React, { Component } from 'react';
import { Button } from './components';
import './App.scss';
import ListCard from './components/list-card/ListCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Components</h1>
        </header>
        <div className="component-list">
          <ListCard color="primary" header= "Header" items={['-Item 1', '-Item 2', '-Item 3']} newItems='storybook' />
          <Button href="#" theme='go'> Button </Button>
        </div>
      </div>
    );
  }
}

export default App;
