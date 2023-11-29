import { useState, useEffect, useContext } from "react";
import { Row, Col, Typography, Divider } from "antd";
import { CloseCircleOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import useHideMenu from "../hooks/useHideMenu";
import { getUsuarioStorage } from "../helpers/getUsuarioStorage";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../context/SocketContext";

const { Title, Text } = Typography;

const Escritorio = () => {
  useHideMenu(false);

  const navigate = useNavigate();
  const [usuario] = useState(getUsuarioStorage());
  const { socket } = useContext(SocketContext);
  const [ticket, setticket] = useState(null);

  const salir = () => {
    localStorage.clear();
    navigate("/ingresar");
  };

  const atender = () => {
    socket.emit("atender-ticket", usuario, (ticket) => {
      setticket(ticket);
    });
  };

  useEffect(() => {
    if (!usuario.agente || !usuario.escritorio) {
      navigate("/ingresar");
    }
  }, [usuario, navigate]);

  return (
    <>
      <Row>
        <Col span={20} offset={2} align="center">
          <Title level={2}>{usuario.agente}</Title>
          <Text>Usted esta trabajando desde el escritorio: </Text>
          <Text type="success">{usuario.escritorio}</Text>
        </Col>

        <Col span={4} align="right">
          <Button shape="round" type="danger" onClick={salir}>
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />
      {ticket && (
        <Row>
          <Col>
            <Text>Esta atendiendo el ticket numero: </Text>
            <Text style={{ fontSize: 30 }} type="danger">
              {ticket.number}
            </Text>
          </Col>
        </Row>
      )}
      <Row>
        <Col offset={18} span={6} align="right">
          <Button shape="round" type="primary" onClick={atender}>
            <ArrowRightOutlined />
            Atender
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Escritorio;
