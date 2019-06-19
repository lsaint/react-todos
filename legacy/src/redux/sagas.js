import {put, takeEvery, all, delay} from 'redux-saga/effects';
import {addTodo} from './actions';
import {ADD_TODO_ASYNC} from './actionTypes';

// redux-saga相当于一个action与reducer之间的中间层
// 是为了不让触发一个action时立即执行reducer
// 而是先执行一个Effect, 比如异步获取数据

export function* helloSaga() {
  yield console.log('Hello Ethan-Sagas');
}

// data: return from actions.addTodoAsync which invoked by submit button
// let's say it return by remote
export function* addTodoSaga(data) {
  console.log('data', data);
  yield delay(1000);
  yield put(addTodo(data));
}

export function* watchAddTodo() {
  console.log('watchAddTodoAsync');
  yield takeEvery(ADD_TODO_ASYNC, addTodoSaga);
}

export default function* rootSata() {
  yield all([helloSaga(), watchAddTodo()]);
}
