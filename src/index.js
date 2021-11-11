import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: { authorization: "bearer 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"},
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>,
  </React.StrictMode>,
  document.getElementById('root'),
);
