import {ADD_TODO, DEL_TODO, ADD_TODO_ASYNC} from './actionTypes';

let nextTodoId = 0;

export const addTodo = data => ({
  type: ADD_TODO,
  payload: data.payload,
});

export const addTodoAsync = memo => {
  console.log('addTodoAsync');
  return {
    type: ADD_TODO_ASYNC,
    payload: {
      id: ++nextTodoId,
      memo,
    },
  };
};

export const delTodo = idx => ({
  type: DEL_TODO,
  payload: {
    id: idx,
  },
});
