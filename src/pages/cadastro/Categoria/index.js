import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(e) {
    setValue(e.target.getAttribute('name'), e.target.value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form
        style={{ background: values.cor }}
        onSubmit={(e) => {
          e.preventDefault();
          setCategorias([...categorias, values]);
          setValues(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria"
          value={values.nome}
          onChange={handleChange}
          type="text"
          name="nome"
        />
        <br />
        <FormField
          label="Descrição"
          value={values.descricao}
          onChange={handleChange}
          type="text"
          name="descricao"
        />
        <br />
        <FormField
          label="Cor da Categoria"
          value={values.cor}
          onChange={handleChange}
          type="color"
          name="cor"
        />
        <br />
        <button>Cadastrar</button>
      </form>
      <ul>
        {categorias.map((categorias, index) => {
          return <li key={categorias + index}>{categorias.nome}</li>;
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
