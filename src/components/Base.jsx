import { Col, Flex, Image, Row } from "antd";
import gamesCover from '../assets/games.png';
import iaraLogo from '../assets/iara.png';

export default function Base({children}) {
  return (
    <Flex className="dark-theme" vertical="vertical" align="center" justify="center" style={{
      height: '100vh',
      minHeight: '100vh',
      backgroundColor: '#000B1C',
      backgroundImage: `url(${gamesCover})`,
      backgroundSize: '80vh 100vh',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center right'
    }}>
      <div style={{width: '800px', maxWidth: '800px'}}>
        <Row style={{width: '100%'}}>
          <Col span={12} style={{padding: '24px'}}>
            <Flex align="center" justify="center" style={{width: '100%', height: '100%'}}>
              {children}
            </Flex>
          </Col>
          <Col span={12}>
            <Flex align="center" justify="center" style={{width: '100%', height: '100%'}}>
              <Image preview={false} src={iaraLogo} />
            </Flex>
          </Col>
        </Row>
      </div>
    </Flex>
  )
}
