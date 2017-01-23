import * as React from 'react';
import * as ReactDOM from 'react-dom';

{
  const Statistics = React.createClass({
    render: function() {
      return (
        <div>
          <WordsPerMinute />
          <Accuracy />
        </div>
      );
    }
  });

  const WordsPerMinute = React.createClass({
    render: function() {
      return (
        <div>
          Words per minute: NaN
        </div>
      );
    }
  });

  const Accuracy = React.createClass({
    render: function() {
      return (
        <div>
          Accuracy: NaN
        </div>
      );
    }
  });

  ReactDOM.render(
    <Statistics />,
    document.querySelector('#statistics')
  );
}