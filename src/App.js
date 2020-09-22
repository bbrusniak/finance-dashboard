import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "finance dashboard",
      username: "",
    }
  }

  async componentDidMount() {
    this.getUsername();
  }

  getUsername = async () => {
    const tokens = await Auth.currentSession();
    const userName = tokens.getIdToken().payload['cognito:username'];
    this.setState({
      username: userName,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.text}</h1>
          <p>Hello {this.state.username}</p>
        </header>
        <AmplifySignOut />
      </div>
    );
  }
}

export default withAuthenticator(App);
