import React from 'react';

export const Statistics = (props) => {
  return (
    <div>
      <div>
        Words per minute: {props.wordsPerMinute}
      </div>
      <div>
        Accuracy: {props.accuracy}%
      </div>
    </div>
  );
};