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

function CadastroCategoria() {
  const history = useHistory();
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

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
        Cadastro de Categoria:
        {values.titulo}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();

        setCategorias([
          ...categorias,
          values,
        ]);
        clearForm();

        categoriasRepository.create({
          titulo: values.titulo,
          cor: values.cor,
        }).then(() => {
          console.log('Categoria Cadastrada com sucesso');
          history.push('/');
        });
      }}
      >

        <FormField
          label="Nome da Categoria"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          value={values.descricao}
          onChange={handleChange}
          type="textarea"
          name="descricao"
        />
        <br />
        <FormField
          label="Cor"
          value={values.cor}
          onChange={handleChange}
          type="color"
          name="cor"
        />
        <Button as="button" type="submit">
          Cadastrar
        </Button>
      </form>
      <br />
      <h3>Categorias Cadastradas</h3>
      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categorias}${indice}`}>
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

export default CadastroCategoria;
