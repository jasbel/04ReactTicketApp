import React from "react";

import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { 
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
 } from "react-router-dom";
import Ingresar from "./Ingresar";
import Cola from "./Cola";
import Escritorio from "./Escritorio";
import CrearTicket from "./CrearTicket";

const {  Sider, Content } = Layout;


const RouterPage = () => {
  return (
   <Router>
      <Layout style={{ height: '100vh'}} >
        <Sider collapsedWidth="0"
          breakpoint="md" >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/ingresar">
                Ingresar
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="/cola">
                Cola
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to="/crear-ticket">
                Crear Ticket
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route path="/ingresar" component={ Ingresar } />
              <Route path="/cola" component={ Cola } />
              <Route path="/crear-ticket" component={ CrearTicket } />
              <Route path="/escritorio" component={ Escritorio } />
              {/* TODO: direccion no existe redireciona a ingresar */}
              <Redirect to="/ingresar" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
   </Router>
  );
};

export default RouterPage;
