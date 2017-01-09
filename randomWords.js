import * as React from 'react';
import * as ReactDOM from 'react-dom';

{
  const RandomWords = React.createClass({
    render: function() {
      return (
        <div className="words">
          banaan mihkel tormised
        </div>
      );
    }
  });

  ReactDOM.render(
    <RandomWords />,
    document.querySelector('#randomWords')
  );
}