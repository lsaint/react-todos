import { Input, Form } from 'antd';
import styles from '../index.css';

//class InsertBar extends React.Component<any, any> {
//formRef = React.createRef<any>();

//onFinish = ({ memo }: { memo: string }) => {
//this.props.addTodoAsync(memo);
////this.props.form.resetFields();
//this.formRef.current.resetFields();
//};

//render() {
//return (
//<Form ref={this.formRef} className={styles.todoInsert} onFinish={this.onFinish}>
//<Form.Item name="memo">
//<Input placeholder="New Todo" />
//</Form.Item>
//</Form>
//);
//}
//}

//export default InsertBar;

export const InsertBar = (props: any) => {
  const [form] = Form.useForm();

  const onFinish = ({ memo }: { memo: string }) => {
    props.addTodoAsync(memo);
    form.resetFields();
  };

  return (
    <Form className={styles.todoInsert} form={form} onFinish={onFinish}>
      <Form.Item name="memo">
        <Input placeholder="New Todo, Press Enter." />
      </Form.Item>
    </Form>
  );
};
