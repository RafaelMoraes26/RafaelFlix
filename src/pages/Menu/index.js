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
          <Button className="nv" to="/cadastro/video"> Novo Vídeo</Button>
          <Button className="nc" to="/cadastro/categoria"> Nova Categoria</Button>
          <Button className="dv" to="/deletar/video"> Deletar Vídeo</Button>
          <Button className="dc" to="/deletar/categoria"> Deletar Categoria</Button>
        </div>
      </div>
    </PageDefault>
  );
}

export default Menu;
