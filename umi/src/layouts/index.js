import { Menu, Icon, Layout } from 'antd';
import Link from 'umi/link';
import withRouter from 'umi/withRouter';
import styles from './index.css';

const { Header, Footer, Content } = Layout;

function layout({ children, location }) {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.logo} />

        <Menu
          className={styles.menu}
          selectedKeys={[location.pathname]}
          mode="horizontal"
          theme="dark"
        >
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

          <Menu.Item>
            <Icon type="setting" />
            about
          </Menu.Item>
        </Menu>
      </Header>

      <Content>{children}</Content>

      <Footer className={styles.footer}>Created by Ethan ©2019</Footer>
    </Layout>
  );
}

export default withRouter(layout);
