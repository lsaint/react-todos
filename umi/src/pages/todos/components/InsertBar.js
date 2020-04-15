import React from 'react';
import { Input, Form } from 'antd';
import styles from '../index.css';

class InsertBar extends React.Component {
  formRef = React.createRef();

  onFinish = ({ memo }) => {
    this.props.addTodoAsync(memo);
    //this.props.form.resetFields();
    this.formRef.current.resetFields();
  };

  render() {
    return (
      <Form ref={this.formRef} className={styles.todoInsert} onFinish={this.onFinish}>
        <Form.Item name="memo">
          <Input placeholder="New Todo" />
        </Form.Item>
      </Form>
    );
  }
}

export default InsertBar;
