const CAHNGE_OPENED = 'util/modal/CAHNGE_OPENED';
export const changeOpened: reduxAction<{ opened: boolean }> = {
  name: CAHNGE_OPENED,
  action: (opened: boolean) => ({ type: SET_OPENED, payload: { opened } })
};
export type changeOpenedType = ReturnType<typeof changeOpened.action>;

// for calling reducers
const SET_OPENED = 'util/modal/SET_OPENED';
export const setOpened: reduxAction<{ opened: boolean }> = {
  name: SET_OPENED,
  action: (opened: boolean) => ({ type: SET_OPENED, payload: { opened } })
};
export type setOpenedType = ReturnType<typeof setOpened.action>;