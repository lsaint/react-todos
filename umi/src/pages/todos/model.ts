// https://dvajs.com/guide/introduce-class.html#%E6%A0%B8%E5%BF%83%E6%A6%82%E5%BF%B5
import { getRemoteItems, getUser } from '@/services/remoteItems';

const delay = (ms: number) =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

interface State {
  id: number;
  items: { [key: number]: string };
  // In javascript the keys of object can only be strings
  // If you pass a number it gets converted into a string
  // Typescript lets you define a map like so with number as keys
  // compiler will check that when assigning values you always pass a number as a key
  // but in runtime the keys in the object will be strings.
}

export default {
  namespace: 'todos',

  // state = { items: {id1: memo1, id2: memo2  ...} }
  // 初始state
  state: {
    id: 10,
    items: {},
  },

  // type Reducer<S, A> = (state: S, action: A) => S
  reducers: {
    addTodo(state: State, action: { type: string; payload: { memo: string } }) {
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

    delTodo(state: State, action: { type: string; payload: { id: number } }) {
      const { id } = action.payload;
      const items = { ...state.items };
      delete items[id];
      return { id: state.id, items };
    },
  }, // end reducers

  effects: {
    *addTodoAsync({ payload }: { type: string; payload: { id: number } }, { put }: any) {
      yield delay(1000);
      yield put({
        type: 'addTodo',
        payload,
      });
    },

    *addRemoteTodos(_: any, { call, put }: any) {
      const { status, data } = yield call(getRemoteItems);
      console.log('resp', status, data);
      if (status === 200) {
        let { name } = data[Math.floor(Math.random() * data.length)];
        yield put({
          type: 'addTodo',
          payload: { memo: name },
        });
      }
    },

    *getMockData(_: any, { call }: any) {
      const { status, data } = yield call(getUser);
      console.log(status, data);
    },
  },
};
