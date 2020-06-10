import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './app/container/Routes/Routes';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      initialized: true
    }
  }
  componentDidMount() {
    // initializerService
    // .init()
    // .then(() => {
    //     this.setState({ initialized: true });
    // });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.initialized &&
          <Routes/>
        }
      </React.Fragment>
    )
  }

}

export default App;
