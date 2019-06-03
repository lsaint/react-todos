import { Menu, Icon, Layout } from 'antd';
import Link from 'umi/link';
import withRouter from 'umi/withRouter';

const { Header, Footer, Content } = Layout;

function layout({ children, location }) {
  return (
    <div>
      <Layout>
        <Header>Header</Header>

        <Content>
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
        </Content>

        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default withRouter(layout);
