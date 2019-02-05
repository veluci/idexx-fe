import {
  UPDATE_ITEMS_LIST,
  SEARCH_FORM_INPUT
} from "../actions/actions";

const initialState = {
  searchKey: "",
  itemList: {
    albumList: [],
    bookList: []
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case SEARCH_FORM_INPUT:
      return {
        ...state,
        searchKey: action.searchKey
      };
    case UPDATE_ITEMS_LIST:
      return {
        ...state,
        itemList: {...action.payload}
      };

    default:
      return state;
  }
};

export default rootReducer;
