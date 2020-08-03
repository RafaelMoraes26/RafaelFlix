import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/purple-logo.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="RafaoFlix Logo" />
      </Link>
      <Button to="/menu" className="ButtonLink">
        Menu
      </Button>
    </nav>
  );
}

export default Menu;
