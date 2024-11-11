import { message } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Col, Flex, Image, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { Link } from "react-router-dom";

import hero from '../assets/i.svg';

import a1 from '../assets/a1.svg';
import a2 from '../assets/a2.svg';
import a3 from '../assets/a3.svg';

import g1 from '../assets/g1.png';
import g2 from '../assets/g2.png';
import g3 from '../assets/g3.png';
import g4 from '../assets/g4.png';
import g5 from '../assets/g5.png';
import g6 from '../assets/g6.png';

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');

    message.destroy();
    if (!user?.token) {
      message.warning('Você precisa fazer login para visualizar esta página.');
      navigate('/login');
    }
  }, [navigate]);

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
        <Flex vertical="vertical" align="center" justify="center" gap={32} style={{width: '800px', maxWidth: '800px', padding: '80px 0px'}}>
          <Flex align="center" vertical="vertical" style={{width: '100%'}}>
            <Title level={2}>Porque Iara Games?</Title>
            <Paragraph>Somos parceiros de todos os consoles</Paragraph>
          </Flex>
          <Row style={{width: '80%'}}>
            <Col span={8} style={{padding: '24px'}}>
            <Flex vertical="vertical" align="center" justify="center" style={{textAlign: 'center'}} gap={8}>
              <Image preview={false} src={a1} width={60}/>
              <Paragraph>+ de 13000 jogos disponíveis</Paragraph>
            </Flex>
            </Col>
            <Col span={8} style={{padding: '24px'}}>
            <Flex vertical="vertical" align="center" justify="center" style={{textAlign: 'center'}} gap={8}>
              <Image preview={false} src={a2} width={60}/>
              <Paragraph>Confiável e avaliado por todos os nossos clientes</Paragraph>
            </Flex>
            </Col>
            <Col span={8} style={{padding: '24px'}}>
            <Flex vertical="vertical" align="center" justify="center" style={{textAlign: 'center'}} gap={8}>
              <Image preview={false} src={a3} width={60}/>
              <Paragraph>Disponível para todos os consoles</Paragraph>
            </Flex>
            </Col>
          </Row>
        </Flex>
      </Flex>


      {/* --------------- GENDER --------------- */}
      <Flex vertical="vertical" align="center" justify="center" style={{width: '100%'}}>
        <Flex vertical="vertical" align="center" justify="center" style={{width: '800px', maxWidth: '800px', padding: '80px 0px'}}>
          <Flex justify="space-between" style={{width: '100%'}}>
            <Title level={2}>Gêneros</Title>
            <Link to="/genders">Ver todos</Link>
          </Flex>

          <Row style={{width: '100%'}}>
            <Col span={4} style={{padding: '8px', height: '120px'}}>
              <Flex align="center" justify="center" style={{borderRadius: '4px', backgroundColor: '#444', width: '100%', height: '100%', backgroundImage: `url(${g1})`,  backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'}}>
                <Paragraph style={{color: '#ffffff'}}>Estratégia</Paragraph>
              </Flex>
            </Col>
            <Col span={4} style={{padding: '8px', height: '120px'}}>
              <Flex align="center" justify="center" style={{borderRadius: '4px', backgroundColor: '#444', width: '100%', height: '100%', backgroundImage: `url(${g2})`,  backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'}}>
                <Paragraph style={{color: '#ffffff'}}>FPS</Paragraph>
              </Flex>
            </Col>
            <Col span={4} style={{padding: '8px', height: '120px'}}>
              <Flex align="center" justify="center" style={{borderRadius: '4px', backgroundColor: '#444', width: '100%', height: '100%', backgroundImage: `url(${g3})`,  backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'}}>
                <Paragraph style={{color: '#ffffff'}}>RPG</Paragraph>
              </Flex>
            </Col>
            <Col span={4} style={{padding: '8px', height: '120px'}}>
              <Flex align="center" justify="center" style={{borderRadius: '4px', backgroundColor: '#444', width: '100%', height: '100%', backgroundImage: `url(${g4})`,  backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'}}>
                <Paragraph style={{color: '#ffffff'}}>Puzzle</Paragraph>
              </Flex>
            </Col>
            <Col span={4} style={{padding: '8px', height: '120px'}}>
              <Flex align="center" justify="center" style={{borderRadius: '4px', backgroundColor: '#444', width: '100%', height: '100%', backgroundImage: `url(${g5})`,  backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'}}>
                <Paragraph style={{color: '#ffffff'}}>Role Playing</Paragraph>
              </Flex>
            </Col>
            <Col span={4} style={{padding: '8px', height: '120px'}}>
              <Flex align="center" justify="center" style={{borderRadius: '4px', backgroundColor: '#444', width: '100%', height: '100%', backgroundImage: `url(${g6})`,  backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'}}>
                <Paragraph style={{color: '#ffffff'}}>Esportes</Paragraph>
              </Flex>
            </Col>
          </Row>
        </Flex>
      </Flex>


      {/* --------------- LAUNCH --------------- */}
      <Flex vertical="vertical" align="center" justify="center" style={{width: '100%'}}>
        <Flex vertical="vertical" align="center" justify="center" gap={32} style={{width: '800px', maxWidth: '800px', padding: '80px 0px'}}>
        <Flex justify="space-between" style={{width: '100%'}}>
            <Title level={2}>Lançamentos</Title>
            <Link to="/launch">Ver todos</Link>
          </Flex>
        </Flex>
      </Flex>


      {/* --------------- POPULAR --------------- */}
      <Flex vertical="vertical" align="center" justify="center" style={{width: '100%'}}>
        <Flex vertical="vertical" align="center" justify="center" gap={32} style={{width: '800px', maxWidth: '800px', padding: '80px 0px'}}>
        <Flex justify="space-between" style={{width: '100%'}}>
            <Title level={2}>Jogos Populares</Title>
            <Link to="/popular">Ver todos</Link>
          </Flex>
        </Flex>
      </Flex>


      {/* --------------- COMING SOON --------------- */}
      <Flex vertical="vertical" align="center" justify="center" style={{width: '100%'}}>
        <Flex vertical="vertical" align="center" justify="center" gap={32} style={{width: '800px', maxWidth: '800px', padding: '80px 0px'}}>
          <p>Em breve</p>
        </Flex>
      </Flex>



      {/* --------------- RATE --------------- */}
      <Flex vertical="vertical" align="center" justify="center" style={{width: '100%'}}>
        <Flex vertical="vertical" align="center" justify="center" gap={32} style={{width: '800px', maxWidth: '800px', padding: '80px 0px'}}>
          <p>avaliacoes</p>
        </Flex>
      </Flex>


      <Footer />
    </Flex>
  )
}
