import { handleActions } from 'redux-actions';

import { setWord } from '@appAction/util/filter';

interface State {
  word: string
}
const initialState: State = { word: '' };

const functions = {
	setWord: (state: State, payload: { word: string }): State => ({
		...state,
		word: payload.word
	})
};

export default handleActions({ [setWord.name]: (state: State, action) => functions.setWord(state, action.payload) }, initialState);