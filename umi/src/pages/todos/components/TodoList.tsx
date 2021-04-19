import { List, Checkbox } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

import styles from '../index.css';

export default (props: { loading: any; todos: { [key: number]: string }; delTodo: Function }) => {
  //let ret = Object.keys(props.todos).map((k, index) => (
  //<TodoItem key={k} id={k} memo={props.todos[k]} delTodo={props.delTodo} />
  //));
  //console.log('todos.', props.todos);

  //return (
  //<div>
  //<ul className={styles.todoList}>{ret}</ul>
  //</div>
  //);

  let data = Object.keys(props.todos).map((k, _) => [k, props.todos[Number(k)]]);
  return (
    <div>
      <List
        dataSource={data}
        split={false}
        size="small"
        loading={props.loading}
        locale={{
          emptyText: <span>nothing to do</span>,
        }}
        renderItem={(item) => {
          return (
            <List.Item
              actions={[
                <CloseCircleOutlined
                  className={styles.todoClose}
                  onClick={(_) => props.delTodo(item[0])}
                />,
              ]}
            >
              <Checkbox className={styles.todoCheck} />
              {item[1]}
            </List.Item>
          );
        }}
      />
    </div>
  );
};
