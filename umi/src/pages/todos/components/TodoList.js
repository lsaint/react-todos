import React from 'react';
import TodoItem from './TodoItem.js';
import styles from '../index.css';

export default props => {
  var ret = Object.keys(props.todos).map((k, index) => (
    <TodoItem key={k} id={k} memo={props.todos[k]} delTodo={props.delTodo} />
  ));
  console.log('todos.', props.todos);

  return (
    <div>
      <ul className={styles.todoList}>{ret}</ul>
    </div>
  );
};
