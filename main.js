import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './statistics';
import './randomWords';
'strict';

const TypeWords = React.createClass({
  getInitialState: function() {
    return {word: ''};
  },
  handleInputChange: function(elem) {
    this.setState({word: elem.target.value});
  },

  render: function() {
    return (
      <div className="speedtyping-app--input">
        <input type="text" onChange={this.handleInputChange} />
      </div>
    );
  }
});

const SpeedTypingModule = React.createClass({
  render: function() {
    return (
      <div className="speedtyping-app">
        <TypeWords />
      </div>
    );
  }
});

ReactDOM.render(
  <SpeedTypingModule />,
  document.querySelector('#reactApp')
);