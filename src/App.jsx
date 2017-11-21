import React, {Component} from 'react';
import CSSTransitionGroup from 'react-transition-group/Transition';
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
    return (
        <div className="App">
          <CSSTransitionGroup
              transitionName="fade"
              appear={true}
              timeout={{
                enter: 300,
                exit: 500
              }}>
            {this.state.mounted && <Form onSubmit={this.handleSubmit}/>}
          </CSSTransitionGroup>
        </div>
    );
  }
}

export default App;
