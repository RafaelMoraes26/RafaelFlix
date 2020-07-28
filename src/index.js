import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

const Pagina404 = () => <div>Página 404</div>;
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
