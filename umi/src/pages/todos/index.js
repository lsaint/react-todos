import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import SummaryBar from './components/SummaryBar.js';
import TodoList from './components/TodoList.js';
import InsertBar from './components/InsertBar.js';

function TodosPage(props) {
  return (
    <div className={styles.app}>
      <h1>Todos</h1>
      <SummaryBar />
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
  return state.todos;
}

export default connect(mapStateToProps)(TodosPage);
