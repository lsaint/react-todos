import { Menu, Icon } from 'antd';
import Link from 'umi/link';
import withRouter from 'umi/withRouter';

function layout({ children, location }) {
  return (
    <div>
      <Menu selectedKeys={[location.pathname]} mode="horizontal" theme="dark">
        <Menu.Item key="/">
          <Link to="/">
            <Icon type="home" />
            Home
          </Link>
        </Menu.Item>

        <Menu.Item key="/todos">
          <Link to="/todos">
            <Icon type="bars" />
            Todos
          </Link>
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
}

export default withRouter(layout);
