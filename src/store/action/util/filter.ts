const CHANGE_WORD = 'util/filter/CHANGE_WORD';
export const changeWord: reduxAction<{ word: string }> = {
	name: CHANGE_WORD,
	action: (word: string) => ({ type: SET_WORD, payload: { word } })
};
export type changeWordType = ReturnType<typeof changeWord.action>;

// for calling reducers
const SET_WORD = 'util/filter/SET_WORD';
export const setWord: reduxAction<{ word: string }> = {
	name: SET_WORD,
	action: (word: string) => ({ type: SET_WORD, payload: { word } })
};
export type setWordType = ReturnType<typeof setWord.action>;