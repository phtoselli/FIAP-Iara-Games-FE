import { Button, Flex, Result } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";

export default function NotFound() {

  return (
    <Flex align="center" justify="center" style={{width: '100vw', height: '100vh', backgroundColor: '#000B1C'}}>
      <Result
        status="404"
        title={<Title style={{color: '#ffffff'}}>Página não encontrada</Title>}
        subTitle={<Paragraph style={{color: '#ffffffbb'}}>Tente novamente mais tarde.</Paragraph>}
        extra={
          <Link to="/home">
            <Button type="primary">
              Voltar para página principal
            </Button>
          </Link>
        }
      />
    </Flex>
  )
}
