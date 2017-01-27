/*
 * action types
 */

export const UPDATE_INPUT_CONTENT = 'UPDATE_INPUT_CONTENT'
export const ADD_WORD = 'ADD_WORD'
export const UPDATE_CURRENT = 'UPDATE_CURRENT'
export const UPDATE_WAS_LAST = 'UPDATE_WAS_LAST'
export const UPDATE_WAS_CORRECT = 'UPDATE_WAS_CORRECT'
export const INCREMENT_MATCHED_WORDS = 'INCREMENT_MATCHED_WORDS'

/*
 * other constants
 */


/*
 * action creators
 */

export function updateInputContent(text) {
  return { type: UPDATE_INPUT_CONTENT, text }
}

export function addNewWord() {
  return { type: ADD_WORD }
}

export function updateCurrentWord(index) {
  return { type: UPDATE_CURRENT, index }
}

export function updateLastWord(index) {
  return { type: UPDATE_WAS_LAST, index }
}

export function updateLastWordCorrect(index) {
  return { type: UPDATE_WAS_CORRECT, index }
}

export function incrementMatchedWords() {
  return { type: INCREMENT_MATCHED_WORDS }
}