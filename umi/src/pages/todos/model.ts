// https://dvajs.com/guide/introduce-class.html#%E6%A0%B8%E5%BF%83%E6%A6%82%E5%BF%B5
//
// dva的数据流向(addRemoteTodos)：
// View层dispatch操作action –>
// 触发models层effect中相应方法 –>
// 触发call发起services层请求，获取接口数据 –>
// 触发put发起reducer处理相应的action更新数据 –>
// 更新model层中state –>
// 触发view层的render方法进行重新渲染 –>
// 页面更新
import { Effect, ImmerReducer } from 'umi';
import { getRemoteItems, getUser } from '@/services/remoteItems';
import { delay } from '@/utils';

export interface TodosState {
  id: number;
  items: { [key: number]: string };
  // In javascript the keys of object can only be strings
  // If you pass a number it gets converted into a string
  // Typescript lets you define a map like so with number as keys
  // compiler will check that when assigning values you always pass a number as a key
  // but in runtime the keys in the object will be strings.
}

interface TodosModelType {
  namespace: 'todos';
  state: TodosState;
  reducers: {
    addTodo: ImmerReducer<TodosState>;
    delTodo: ImmerReducer<TodosState>;
  };
  effects: {
    addTodoAsync: Effect;
    addRemoteTodos: Effect;
    getMockData: Effect;
  };
}

const TodosModel: TodosModelType = {
  namespace: 'todos',

  // state = { items: {id1: memo1, id2: memo2  ...} }
  // 初始state
  state: {
    id: 10,
    items: {},
  },

  // type Reducer<S, A> = (state: S, action: A) => S
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

  // call 调用异步方法
  // put 触发Action
  effects: {
    *addTodoAsync({ payload }, { put }) {
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

export default TodosModel;
