/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../components/Hooks';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';

function DeletarVideo() {
  const history = useHistory();
  const [videos, setVideos] = useState([]);
  const videosId = videos.map(({ id }) => id);
  const { handleChange, values } = useForm({
    id: '',
  });

  async function deletar() {
    await videosRepository.deleter(values.id).then(() => {
      console.log('Video Deletado com sucesso!');
      history.push('/');
    }).catch(() => { console.log('Não foi'); console.log(values.id); });
  }

  useEffect(() => {
    videosRepository.getAll().then((videosFromServer) => {
      setVideos(videosFromServer);
    });
  }, []);
  return (
    <PageDefault>
      <h1>
        Digite o Id do vídeo que você deseja excluir:
        {values.id}
      </h1>

      <form onSubmit={(e) => {
        e.preventDefault();
        deletar();
      }}
      >
        <FormField
          label="Id do Vídeo"
          name="id"
          type="text"
          value={values.id}
          onChange={handleChange}
          suggestions={videosId}
        />
        <h3>Videos Cadastrados</h3>
        <ul>
          {videos.map((video, indice, categoria) => (
            <li key={`${videos}${indice}${categoria}`}>
              {indice + 1}
              --
              {video.titulo}
            </li>
          ))}
        </ul>
        <br />
        <Button as="button" type="submit">
          Deletar
        </Button>
      </form>
      <br />
      <br />
      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}

export default DeletarVideo;
