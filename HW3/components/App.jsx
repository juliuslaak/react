import React from 'react';

import { RandomWords } from './RandomWords.jsx';
import { Typing } from './Typing.jsx';
import { Statistics } from './Statistics.jsx';

export const App = React.createClass({

  getInitialState: function() {
    return {
      inputContent: '',
      wordList: []
    };
  },

  handleInputChange: function(e) {
    this.setState({inputContent: e.target.value});
    this.handleCharacterMatch(e);
  },

  handleCharacterMatch: function(e) {
    const currentElem = this.state.wordList.find(this.checkIfIsCurrentWord);
    
    if (e.target.value[e.target.value.length - 1] == " ") {
      this.setState({inputContent: ''});

      const newWordList = this.state.wordList;
      let pastWord = NaN;

      for (let i = 0; i < newWordList.length; i++) {
        if (pastWord != NaN && pastWord == i - 1) {
          newWordList[i].isCurrent = true;
        } else if (newWordList[i].isCurrent) {
          pastWord = i;
          newWordList[i].isCurrent = false;
        }
      }
    }
  },

  checkIfIsCurrentWord: function(e) {
    return e.isCurrent;
  },

  loadWords: function() {
    const newWordList = this.state.wordList;
    newWordList.push({"value": "rebane", "isCurrent": true});
    newWordList.push({"value": "kana", "isCurrent": false});
    newWordList.push({"value": "eagronom", "isCurrent": false});
    this.setState({wordList: newWordList});
  },

  componentDidMount: function() {
    this.loadWords();
  },

  render: function() {
    return (
      <div className="speedtyping-app">
        <RandomWords
          wordList={this.state.wordList}
          currentInput={this.state.inputContent}
        />
        <Typing 
          inputValue={this.state.inputContent}
          handleInputChange={this.handleInputChange}
        />
        <Statistics />
      </div>
    );
  }
});