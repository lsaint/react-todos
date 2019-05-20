import {ADD_TODO, DEL_TODO} from './actionTypes';

// 状态抽离至此成为store， 页面逻辑则化身为reducer
// state = { items: {id1: memo1, id2: memo2  ...} }
const initState = {
  items: {},
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      console.log('action', action);
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
