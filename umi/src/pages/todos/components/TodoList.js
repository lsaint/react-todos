import React from 'react';
import { List, Checkbox, Button } from 'antd';
import styles from '../index.css';

export default props => {
  //let ret = Object.keys(props.todos).map((k, index) => (
  //<TodoItem key={k} id={k} memo={props.todos[k]} delTodo={props.delTodo} />
  //));
  //console.log('todos.', props.todos);

  //return (
  //<div>
  //<ul className={styles.todoList}>{ret}</ul>
  //</div>
  //);

  let data = Object.keys(props.todos).map((k, index) => [k, props.todos[k]]);
  return (
    <div>
      <List
        dataSource={data}
        split={false}
        size="small"
        //http://opentutorial.info/dva/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/dva-loading-plugin/
        //loading={props.loading.effects['todos/addTodoAsync']}    此为只在addTodoAsync这个接口阻塞时显示loadding
        loading={props.loading.models['todos']} // 在整个todos model里的接口阻塞时显示loadding
        locale={{
          emptyText: <span>来搞点事情吧</span>,
        }}
        renderItem={item => {
          return (
            <List.Item
              actions={[
                <Button
                  icon="close"
                  size="small"
                  shape="circle"
                  className={styles.todoClose}
                  onClick={e => props.delTodo(item[0])}
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
