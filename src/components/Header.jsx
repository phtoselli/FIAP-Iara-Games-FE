import { Button, Flex, Image } from "antd";
import { Link } from "react-router-dom";

import logo from '../assets/logo.png';

export default function Header() {
  return (
    <Flex align="center" justify="space-between" style={{width: '100%', padding: '8px 24px', backgroundColor: '#000000'}}>
      <div>
        <Image preview="false" src={logo} width={50} />
      </div>

      <Flex gap={24}>
        <Link to="/home" style={{color: '#ffffffBB'}}>Início</Link>
        <Link to="/store" style={{color: '#ffffffBB'}}>Loja de jogos</Link>
        <Link to="/support" style={{color: '#ffffffBB'}}>Suporte</Link>
        <Link to="/contact" style={{color: '#ffffffBB'}}>Contato</Link>
      </Flex>

      <Flex gap={8}>
          <Link to="/register">
            <Button type="primary">Registre-se</Button>
          </Link>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
      </Flex>
    </Flex>
  )
}
