import React from 'react';

import { RandomWords } from './RandomWords.jsx';
import { Typing } from './Typing.jsx';
import { Statistics } from './Statistics.jsx';

export const App = React.createClass({

  getInitialState: function() {
    return {inputContent: ''};
  },

  handleInputChange: function(e) {
    this.setState({inputContent: e.target.value});
  },

  render: function() {
    return (
      <div className="speedtyping-app">
        <RandomWords />
        <Typing 
          inputValue={this.state.inputContent}
          handleInputChange={this.handleInputChange}
        />
        <Statistics />
      </div>
    );
  }
});