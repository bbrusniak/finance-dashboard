import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "finance dashboard"
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.text}</h1>
        </header>
        <AmplifySignOut />
      </div>
    );
  }
}

export default withAuthenticator(App);
