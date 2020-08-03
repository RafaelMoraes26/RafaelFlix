/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../components/Hooks/index';
import categoriasRepository from '../../../repositories/categorias';

function DeletarCategoria() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ id }) => id);

  const { handleChange, values, clearForm } = useForm({ id: '' });

  async function deletar() {
    await categoriasRepository.deleter(values.id).then(() => {
      console.log('Categoria Deletada com sucesso!');
      history.push('/');
    }).catch(() => { console.log('Não foi'); console.log(values.id); });
  }

  useEffect(() => {
    const URL_BASE = window.location.href.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://rafaelflix.herokuapp.com/categorias';
    fetch(URL_BASE)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Digite o Id da categoria que deseja excluir:
        {' '}
        {values.id}
      </h1>
      <h2>Atenção: Esta ação deletará todos os vídeos que estão na categoria.</h2>

      <form onSubmit={async function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        clearForm();
        deletar();
      }}
      >

        <FormField
          label="Id da Categoria"
          name="id"
          type="text"
          value={values.id}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button as="button" type="submit">
          Deletar
        </Button>
      </form>
      <br />
      <h3>Categorias Cadastradas</h3>
      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categorias}${indice}`}>
            {indice + 1}
            --
            {categoria.titulo}
          </li>
        ))}
      </ul>
      <br />
      <Link to="/">
        Ir para home
      </Link>
      <br />
      <br />
    </PageDefault>
  );
}

export default DeletarCategoria;
