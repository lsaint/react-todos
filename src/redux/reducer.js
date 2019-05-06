import {ADD_TODO, DEL_TODO} from './actionTypes';

const initState = {
  items: {}, // items: {id1: memo1 ...}
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const {id, memo} = action.payload;
      return {
        items: {
          ...state.items,
          [id]: memo,
        },
      };
    }

    case DEL_TODO: {
      const {id} = action.payload;
      const items = {...state.items};
      delete items[id];
      return {items};
    }

    default:
      return state;
  }
};
