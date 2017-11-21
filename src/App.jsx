import React, {Component} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransition';
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
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnter={false}
              transitionLeaveTimeout={300}>
            {this.state.mounted && <Form onSubmit={this.handleSubmit}/>}
          </CSSTransitionGroup>
        </div>
    );
  }
}

export default App;
