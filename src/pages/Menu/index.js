import React from 'react';
import PageDefault from '../../components/PageDefault';
import Button from '../../components/Button';
import './Menu.css';

function Menu() {
  return (
    <PageDefault>
      <div className="MenuWrapper">
        <h1>O que deseja fazer?</h1>
        <br />
        <br />
        <div className="Wrapper">
          <Button to="/cadastro/video"> Novo Vídeo</Button>
          <Button to="/cadastro/categoria"> Nova Categoria</Button>
          <Button to="/deletar/video"> Deletar Vídeo</Button>
          <Button to="/deletar/categoria"> Deletar Categoria</Button>
        </div>
      </div>
    </PageDefault>
  );
}

export default Menu;
