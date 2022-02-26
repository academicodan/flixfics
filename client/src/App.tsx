import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useTranslation } from 'react-i18next';

const lazyHome = React.lazy(() => import('./pages/Home'));
const lazyListaUsuarios = React.lazy(() => import('./pages/ListaUsuarios'));

function App() {
  const { t } = useTranslation();

  const loading = t('fallback');

  return (
    <BrowserRouter>
      <Switch>
        <React.Suspense fallback={loading} >
          <Route path='/' exact component={lazyHome} />
          {/* TODO: change the following route as necessary */}
          <Route path='/listagemUsuarios' exact component={lazyListaUsuarios} />
        </React.Suspense>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
