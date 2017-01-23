import React from 'react';

export const RandomWords = React.createClass({
  render: function() {
    return (
      <div className="words">
        {['banaan', ' ', 'mihkel', ' ', 'tormised']}
      </div>
    );
  }
});