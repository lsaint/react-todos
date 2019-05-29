import { delay } from 'dva/saga';

export default {
  namespace: 'todos',

  // state = { items: {id1: memo1, id2: memo2  ...} }
  state: {
    id: 0,
    items: {},
  },

  reducers: {
    addTodo(state, action) {
      let { id } = state;
      id++;
      const { memo } = action.payload;
      return {
        id,
        items: {
          ...state.items,
          [id]: memo,
        },
      };
    },

    delTodo(state, action) {
      const { id } = action.payload;
      const items = { ...state.items };
      delete items[id];
      return { id: state.id, items };
    },
  }, // end reducers

  effects: {
    *addTodoAsync({ payload }, { call, put }) {
      yield delay(1000);
      yield put({
        type: 'addTodo',
        payload,
      });
    },
  },
};