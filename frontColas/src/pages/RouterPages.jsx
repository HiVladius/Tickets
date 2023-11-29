import { useContext } from "react";

import {
  HomeOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Layout, Menu, Button, theme } from "antd";
import Cola from "./Cola";
import CrearTicket from "./CrearTicket";
import Escritorio from "./Escritorio";
import Ingresar from "./Ingresar";
import { UiContext } from "../context/UIContext";

const { Sider, Content } = Layout;

const RouterPages = () => {
  const {ocultarMenu} = useContext(UiContext);

  return (
    <Router>
      <Layout style={{ height: "100vh" }}>
        <Sider collapsedWidth="0" breakpoint="md" hidden={ocultarMenu}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <HomeOutlined />,
                label: <Link to="/">Home</Link>,
              },
              {
                key: "2",
                icon: <UserOutlined />,
                label: <Link to="/ingresar">Ingresar</Link>,
              },
              {
                key: "3",
                icon: <VideoCameraOutlined />,
                label: <Link to="/cola">Cola</Link>,
              },
              {
                key: "4",
                icon: <UploadOutlined />,
                label: <Link to="/crear-ticket">Crear Ticket</Link>,
              },
            ]}
          />
        </Sider>
        <Layout>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              backgroundColor: "#fff",
            }}
          >
            <Routes>
              <Route path="/" element={<h1>Home</h1>} />
              <Route path="/ingresar" element={<Ingresar />} />
              <Route path="/cola" element={<Cola />} />
              <Route path="/crear-ticket" element={<CrearTicket />} />
              <Route path="*" element={<h1>Not Found</h1>} />
              <Route path="/escritorio" element={<Escritorio />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default RouterPages;
