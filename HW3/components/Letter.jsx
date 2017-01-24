import React from 'react';
const classNames = require('classnames');

export const Letter = (props) => {
  const classes = classNames('letter', props.matchClass);

  return(
    <span className={classes}>{props.letter}</span>
  );
};
Letter.propTypes = {
  matchClass: React.PropTypes.string.isRequired
};