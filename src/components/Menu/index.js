import React from 'react';
import Logo from '../../assets/img/purple-logo.png';
import './Menu.css';
import Button from '../Button';
import { Link } from 'react-router-dom';
function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="RafaoFlix Logo" />
      </Link>
      <Button to="/cadastro/video" className="ButtonLink">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
