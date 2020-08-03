import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageDefault from '../../components/PageDefault';

const Wrapper = styled.div`
    padding-top: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`;

function NotFound() {
  return (
    <PageDefault>
      <Wrapper>
        <h1>Página não Encontrada!</h1>
        <Link to="/">Retornar para a Home</Link>
      </Wrapper>
    </PageDefault>
  );
}

export default NotFound;
