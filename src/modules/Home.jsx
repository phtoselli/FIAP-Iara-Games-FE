// import { message } from "antd";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import { Button, Col, Flex, Image, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { Link } from "react-router-dom";
import hero from '../assets/i.svg';

export default function Home() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const user = localStorage.getItem('user');

  //   message.destroy();
  //   if (!user?.token) {
  //     message.warning('Você precisa fazer login para visualizar esta página.');
  //     navigate('/login');
  //   }
  // }, [navigate]);

  return (
    <Flex vertical="vertical" align="center" justify="center" style={{width: '100vw'}}>
      <Header />

      {/* --------------- HERO --------------- */}
      <Flex vertical="vertical" align="center" justify="center" style={{width: '100%', backgroundColor: '#010813', height: '80vh'}}>
        <Flex vertical="vertical" align="center" justify="center" gap={32} style={{width: '800px', maxWidth: '800px'}}>
          <Row>
            <Col span={12}>
              <Flex vertical="vertical" align="flex-start" justify="center" gap={8} style={{width: '100%', height: '100%'}}>
                <Title style={{color: '#ffffff'}}>A Casa dos Games Brasileiros</Title>
                <Paragraph style={{color: '#ffffffaa'}}>Maior plataforma de games do Brasil.</Paragraph>
                <Button type="primary">Explorar jogos</Button>
              </Flex>
            </Col>
            <Col span={12} style={{padding: '16px'}}>
              <Flex vertical="vertical" align="center" justify="center" style={{width: '100%', height: '100%'}}>
                <Image preview={false} src={hero} />
              </Flex>
            </Col>
          </Row>
        </Flex>
      </Flex>

      {/* --------------- ABOUT --------------- */}
      <Flex vertical="vertical" align="center" justify="center" style={{width: '100%'}}>
        <Flex vertical="vertical" align="center" justify="center" gap={32} style={{width: '800px', maxWidth: '800px'}}>
          <Flex justify="space-between" style={{width: '100%'}}>
            <Title level={2}>Gêneros</Title>
            <Link to="/genders">Ver todos</Link>
          </Flex>
        </Flex>
      </Flex>


      {/* --------------- GENDER --------------- */}
      <Flex vertical="vertical" align="center" justify="center" style={{width: '100%'}}>
        <Flex vertical="vertical" align="center" justify="center" gap={32} style={{width: '800px', maxWidth: '800px'}}>
          <p>generos</p>
        </Flex>
      </Flex>


      {/* --------------- LAUNCH --------------- */}
      <Flex vertical="vertical" align="center" justify="center" style={{width: '100%'}}>
        <Flex vertical="vertical" align="center" justify="center" gap={32} style={{width: '800px', maxWidth: '800px'}}>
          <p>lancamento</p>
        </Flex>
      </Flex>


      {/* --------------- POPULAR --------------- */}
      <Flex vertical="vertical" align="center" justify="center" style={{width: '100%'}}>
        <Flex vertical="vertical" align="center" justify="center" gap={32} style={{width: '800px', maxWidth: '800px'}}>
          <p>populkares</p>
        </Flex>
      </Flex>


      {/* --------------- COMING SOON --------------- */}
      <Flex vertical="vertical" align="center" justify="center" style={{width: '100%'}}>
        <Flex vertical="vertical" align="center" justify="center" gap={32} style={{width: '800px', maxWidth: '800px'}}>
          <p>Em breve</p>
        </Flex>
      </Flex>



      {/* --------------- RATE --------------- */}
      <Flex vertical="vertical" align="center" justify="center" style={{width: '100%'}}>
        <Flex vertical="vertical" align="center" justify="center" gap={32} style={{width: '800px', maxWidth: '800px'}}>
          <p>avaliacoes</p>
        </Flex>
      </Flex>


      <Footer />
    </Flex>
  )
}
