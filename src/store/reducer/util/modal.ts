import { handleActions } from 'redux-actions';

import { setOpened } from '@appAction/util/modal';

interface State {
  opened: boolean
}
const initialState: State = { opened: false };

const functions = {
  setOpened: (state: State, payload: { opened: boolean }): State => ({
    ...state,
    opened: payload.opened
  })
};

export default handleActions({ [setOpened.name]: (state: State, action) => functions.setOpened(state, action.payload) }, initialState);