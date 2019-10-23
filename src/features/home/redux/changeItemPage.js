// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import { HOME_CHANGE_ITEM_PAGE } from './constants';

export function changeItemPage(curItemPerPage) {
  return {
    type: HOME_CHANGE_ITEM_PAGE,
    curItemPerPage,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_CHANGE_ITEM_PAGE:
    console.log(action.curItemPerPage)
      return {
        ...state,
        curItemPerPage: action.curItemPerPage,
      };

    default:
      return state;
  }
}
