import styles from '../index.css';

export default (props: any) => {
  return (
    <li className={styles.todoItem}>
      <input className={styles.todoCheck} type="checkbox" />
      {props.memo}
      <button className={styles.todoClose} type="button" onClick={() => props.delTodo(props.id)}>
        X
      </button>
    </li>
  );
};
