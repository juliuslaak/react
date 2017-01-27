import { combineReducers } from 'redux'
import update from 'immutability-helper'
import { UPDATE_INPUT_CONTENT, UPDATE_CURRENT, UPDATE_WAS_LAST, UPDATE_WAS_CORRECT, INCREMENT_MATCHED_WORDS } from '../actions/actions.js'

function updateWordList(state = [], action) {
  switch (action.type) {
    case 'ADD_WORD':
      return update(state, {
        $push: [action.value, action.isCurrent, action.wasLast, action.wasCorrect]
      });
    case 'UPDATE_CURRENT':
      return update(state, { 
        [action.id]: {
          isCurrent: {$set: action.isCurrent}
        }
      });
    case 'UPDATE_WAS_LAST':
      return update(state, { 
        [action.id]: {
          isCurrent: {$set: action.wasLast}
        }
      });
    case 'UPDATE_WAS_CORRECT':
      return update(state, { 
        [action.id]: {
          isCurrent: {$set: action.wasCorrect}
        }
      });
    default:
      return state
  }
}

function inputContent(state = '', action) {
  return update(state, {
    inputContent: {$set: action.text}
  });
}

const speedTypingAppReducer = combineReducers({
  updateWordList,
  inputContent
})

export default speedTypingAppReducer