import React from 'react';

export default function TodoItem(props) {
  return (
    <li>
      <div>
        <input className="floated memo" type="checkbox" />
        {props.memo}
        <button className="floated button" type="button" onClick={() => props.delTodo(props.id)}>
          X
        </button>
      </div>
    </li>
  );
}
