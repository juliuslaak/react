import React from 'react';
import { Letter } from './Letter.jsx';
const classNames = require('classnames');

export const SingleWord = React.createClass({
  propTypes: {
    word: React.PropTypes.string.isRequired,
    isCurrent: React.PropTypes.bool.isRequired,
    wasLast: React.PropTypes.bool.isRequired,
    wasCorrect: React.PropTypes.bool.isRequired,
    currentInput: React.PropTypes.string.isRequired
  },

  loadClasses: function() {
    const classes = classNames({
      'current-word': ( this.props.isCurrent ),
      'random-word': true,
      'match': (this.props.wasLast && this.props.wasCorrect),
      'mismatch': (this.props.wasLast  && !this.props.wasCorrect)
    })
    return classes;
  },

  colorWord: function(word) {
    if (this.props.isCurrent) {
      let letters = [];

      for(let i = 0; i < word.length; i++) {
        let currentLetter = word[i];
        let matchClass = "";

        if (i < this.props.currentInput.length) {
          matchClass = (this.props.currentInput[i] == currentLetter ? "match" : "mismatch")
        }

        letters.push(<Letter letter={currentLetter} matchClass={matchClass} key={i} />);
      };
      
      return letters;
    };

    return word;
  },

  render: function() {
    return (
      <div className={this.loadClasses()}>
        {this.colorWord(this.props.word)}
      </div>
    )
  }
});