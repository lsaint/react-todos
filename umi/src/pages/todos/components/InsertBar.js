import React from 'react';
import styles from '../index.css';

export default props => {
  return (
    <form
      className={styles.todoInsert}
      onSubmit={e => {
        e.preventDefault();
        props.addTodoAsync(e.target[0].value);
        e.target.reset();
      }}
    >
      <input type="text" placeholder="New Todo" />
    </form>
  );
};
