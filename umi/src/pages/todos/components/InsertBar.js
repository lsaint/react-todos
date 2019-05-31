import React from 'react';
import { Form, Input } from 'antd';
import styles from '../index.css';

class InsertBar extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodoAsync(this.props.form.getFieldValue('memo'));
    this.props.form.resetFields();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className={styles.todoInsert} onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator('memo', {
            initialValue: '',
          })(<Input placeholder="New Todo" />)}
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(InsertBar);
