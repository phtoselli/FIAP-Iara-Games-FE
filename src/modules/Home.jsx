// import { message } from "antd";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import { Flex } from "antd";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Contact from "./Contact";

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

      <Flex vertical="vertical" align="center" justify="center" gap={32} style={{width: '800px', maxWidth: '800px'}}>
        <Routes>
          <Route path="/home/contact" element={<Contact />} />
        </Routes>
      </Flex>

      <Footer />
    </Flex>
  )
}
