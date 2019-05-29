import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import SummaryBar from './components/SummaryBar.js';
import TodoList from './components/TodoList.js';
import InsertBar from './components/InsertBar.js';

function TodosPage(props) {
  return (
    <div className={styles.page}>
      <h1>Todos</h1>
      <SummaryBar count={Object.keys(props.items).length} />
      <TodoList
        delTodo={id =>
          props.dispatch({
            type: 'todos/delTodo',
            payload: { id },
          })
        }
        todos={props.items}
      />
      <InsertBar
        addTodoAsync={memo =>
          props.dispatch({
            type: 'todos/addTodoAsync',
            payload: { memo },
          })
        }
      />
    </div>
  );
}

function mapStateToProps(state) {
  // 此处的state是全局所有数据
  // todos是以'todos'这个namespace为名的model里的state
  return state.todos;
}

export default connect(mapStateToProps)(TodosPage);
