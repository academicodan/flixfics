import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client";
import { ClientList } from './pages/ClientList';

const link = from([
  new HttpLink({uri: "http://localhost:3001/graphql" })
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
})

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ApolloProvider client={client}>
          <Route path='/' exact component={Home} />
          <Route path='/clientes' component={ClientList} />
        </ApolloProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
