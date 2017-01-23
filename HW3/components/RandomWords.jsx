import React from 'react';
import { SingleWord } from "./SingleWord.jsx";

export const RandomWords = (props) => {
  var words = props.wordList.map((w, i) => {
    return <SingleWord word={w.value} current={w.isCurrent} key={i} />;
  })
  return (
    <div className="words">
      {words}
    </div>
  );
};
RandomWords.propTypes = {
  wordList: React.PropTypes.array.isRequired
}