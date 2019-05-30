import styles from './index.css';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Another day, Another dollor.</h1>
      <ul className={styles.nav}>
        <li>
          <a href="/"> index</a>
        </li>
        <li>
          <a href="/todos"> Todos</a>
        </li>
      </ul>
      {props.children}
    </div>
  );
}

export default BasicLayout;
