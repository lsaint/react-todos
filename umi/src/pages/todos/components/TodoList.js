import React from 'react';
import TodoItem from './TodoItem.js';

export default function TodoList(props) {
  var ret = Object.keys(props.todos).map((k, index) => (
    <TodoItem key={k} id={k} memo={props.todos[k]} delTodo={props.delTodo} />
  ));
  console.log('todos.', props.todos);

  return (
    <div>
      <ul>{ret}</ul>
    </div>
  );
}
