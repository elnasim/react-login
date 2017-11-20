import React, {Component} from 'react';
import './App.css';

import Form from './components/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mounted: true
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({mounted: false});
  };

  render() {
    var visible = this.state.mounted;
    return (
        <div className="App">
          <Form onSubmit={this.handleSubmit} className={'signup-form ' + (visible ? '' : 'none')}/>
        </div>
    );
  }
}

export default App;
