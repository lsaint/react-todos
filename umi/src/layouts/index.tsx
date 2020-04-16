import React from 'react';
import { Menu, Layout } from 'antd';
import { HomeOutlined, BarsOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'umi';
import { withRouter } from 'umi';
import styles from './index.css';

const { Header, Footer, Content } = Layout;

function layout({ children, location }: any) {
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
              <HomeOutlined />
              Home
            </Link>
          </Menu.Item>

          <Menu.Item key="/todos">
            <Link to="/todos">
              <BarsOutlined />
              Todos
            </Link>
          </Menu.Item>

          <Menu.Item>
            <SettingOutlined />
            about
          </Menu.Item>
        </Menu>
      </Header>

      <Content className={styles.content}>{children}</Content>

      <Footer className={styles.footer}>Created by Ethan ©2019</Footer>
    </Layout>
  );
}

export default withRouter(layout);
