import { Button, Divider, Flex, Form, Input, message } from "antd";
import { useForm } from "antd/es/form/Form";
import Paragraph from "antd/es/typography/Paragraph";
import Text from "antd/es/typography/Text";
import Title from "antd/es/typography/Title";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Base from "../components/Base";

export default function Login() {
  const [form] = useForm();
  const navigate = useNavigate();

  const formFinish = (values) => {
    if (!values.email || !values.password) {
      message.warning('Preencha todos os campos para realizar login.', 4);
    }

    if (values.email && values.password) {
      message.loading('Fazendo login...', 0);
      axios.post(`${import.meta.env.VITE_API_URL}/login`, {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        message.destroy();
        message.success('Seja bem vindo(a)!', 4);

        const userData = {
          name: response.data.user.name,
          email: response.data.user.email,
          token: response.data.token,
        };

        localStorage.setItem('user', JSON.stringify(userData));

        if (response?.data?.user?.isadmin) {
          navigate("/dashboard");
        } else {
          navigate("/home");
        }
      })
      .catch((error) => {
        message.destroy();
        message.error(error.message || 'Erro ao tentar realizar login. Tente novamente.', 4);
      })
      .finally(() => {
        form.resetFields();
      });
    }
  }

  return (
    <Base>
      <Flex vertical="vertical" justify="center" style={{width: '100%'}}>
        <Title style={{color: '#FFFFFF'}}>Login</Title>
        <Paragraph style={{color: '#FFFFFFBB'}}>
          Bem-vindo(a) de Volta! Para começar, insira suas informações de acesso.
        </Paragraph>
        <Form form={form} onFinish={formFinish} style={{width: '100%'}} layout="vertical">
          <Form.Item name="email" label={<Text style={{color: '#FFFFFF50'}}>E-mail</Text>}>
            <Input placeholder="Digite seu email aqui" />
          </Form.Item>
          <Form.Item name="password" label={<Text style={{color: '#FFFFFF50'}}>Senha</Text>}>
            <Input.Password placeholder="Digite sua senha aqui" />
          </Form.Item>
          <Button type="primary" style={{width: '100%', textTransform: 'uppercase'}} onClick={() => form.submit()}>
            Entrar
          </Button>
        </Form>
        <Divider style={{color: '#FFFFFF50', borderColor: '#FFFFFF50'}}>ou</Divider>
        <Paragraph style={{color: '#FFFFFFBB', alignSelf: 'center'}}>Ainda não tem conta? <Link to="/register">Registre-se</Link></Paragraph>
      </Flex>
    </Base>
  )
}
