import React from 'react';
const classNames = require('classnames');

export const SingleWord = (props) => {
  const classes = classNames({
    'current-word': ( props.current ),
    'random-word': true
  });

  return (
    <div className={classes}>
      {props.word}
    </div>
  );
};
SingleWord.propTypes = {
  word: React.PropTypes.string.isRequired,
  current: React.PropTypes.bool.isRequired
}