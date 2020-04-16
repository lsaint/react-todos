import React from 'react';
import { Row, Col, Button } from 'antd';
import { connect } from 'dva';
import styles from './index.css';
import SummaryBar from './components/SummaryBar';
import TodoList from './components/TodoList';
import InsertBar from './components/InsertBar';

function TodosPage({ dispatch, todos, loading }) {
  return (
    <div className={styles.page}>
      <Row>
        <Col span={8}>
          <h1>Todos</h1>
          <SummaryBar count={Object.keys(todos.items).length} />
          <TodoList
            loading={loading}
            delTodo={id =>
              dispatch({
                type: 'todos/delTodo',
                payload: { id },
              })
            }
            todos={todos.items}
          />
          <InsertBar
            addTodoAsync={memo =>
              dispatch({
                type: 'todos/addTodoAsync',
                payload: { memo },
              })
            }
          />
        </Col>
      </Row>
      <Row>
        <Col span={4}>
          <Button
            type="primary"
            onClick={e =>
              dispatch({
                type: 'todos/addRemoteTodos',
              })
            }
          >
            Get Remote Items
          </Button>
        </Col>

        <Col span={4}>
          <Button
            type="dashed"
            onClick={e =>
              dispatch({
                type: 'todos/getMockData',
              })
            }
          >
            Print Mock Data
          </Button>
        </Col>
      </Row>
    </div>
  );
}

function mapStateToProps({ todos, loading }) {
  // 此处的state是全局所有数据
  // todos是以'todos'这个namespace为名的model里的state
  //return state.todos;
  return { todos, loading };
}

export default connect(mapStateToProps)(TodosPage);
