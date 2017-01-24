import React from 'react';
import { Letter } from './Letter.jsx';
const classNames = require('classnames');

export const SingleWord = React.createClass({
  propTypes: {
    word: React.PropTypes.string.isRequired,
    isCurrent: React.PropTypes.bool.isRequired,
    currentInput: React.PropTypes.string.isRequired
  },

  loadClasses: function() {
    const classes = classNames({
      'current-word': ( this.props.isCurrent ),
      'random-word': true
    })
    return classes;
  },

  colorWord: function(word) {
    let letters = [];
    let letterClass = "";

    for(let i = 0; i < word.length; i++) {
      let currentLetter = word[i];
      let matchClass = "";

      if (i < this.props.currentInput.length) {
        matchClass = (this.props.currentInput[i] == currentLetter ? "match" : "mismatch")
      }

      letters.push(<Letter letter={currentLetter} matchClass={matchClass} key={i} />);
    };
    return letters;
  },

  render: function() {
    return (
      <div className={this.loadClasses()}>
        {this.colorWord(this.props.word)}
      </div>
    )
  }
});