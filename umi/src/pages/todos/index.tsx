import { Row, Col, Button } from 'antd';
import { useDispatch, useSelector } from 'dva';
import styles from './index.css';
import SummaryBar from './components/SummaryBar';
import TodoList from './components/TodoList';
import { InsertBar } from './components/InsertBar';

const TodosPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);
  console.log('state:', state);

  const { loading: loadingObj, todos } = state;

  // 只在addTodoAsync这个接口阻塞时显示loading
  // getRemoteItems的时候不显示loading
  const loading = loadingObj.effects['todos/addTodoAsync'];

  return (
    <div className={styles.page}>
      <Row>
        <Col span={8}>
          <h1>Todos</h1>
          <SummaryBar count={Object.keys(todos.items).length} />
          <TodoList
            loading={loading}
            delTodo={(id: number) =>
              dispatch({
                type: 'todos/delTodo',
                payload: { id },
              })
            }
            todos={todos.items}
          />
          <InsertBar
            addTodoAsync={(memo: string) =>
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
            onClick={(_) =>
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
            onClick={(_) =>
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
};
export default TodosPage;
