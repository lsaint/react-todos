import {ADD_TODO, DEL_TODO} from './actionTypes';

let nextTodoId = 0;

export const addTodo = memo => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    memo,
  },
});

export const delTodo = idx => ({
  type: DEL_TODO,
  payload: {
    id: idx,
  },
});
