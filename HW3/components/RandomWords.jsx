import React from 'react';
import { SingleWord } from "./SingleWord.jsx";

export const RandomWords = (props) => {
  var words = props.wordList.map((w, i) => {
    return <SingleWord word={w.value} isCurrent={w.isCurrent} wasLast={w.wasLast} wasCorrect={w.wasCorrect} currentInput={props.currentInput} key={i} />;
  })
  return (
    <div className="words">
      {words}
    </div>
  );
};
RandomWords.propTypes = {
  wordList: React.PropTypes.array.isRequired,
  currentInput: React.PropTypes.string.isRequired
}