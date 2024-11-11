import { message } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <p>Home</p>
    </div>
  )
}
