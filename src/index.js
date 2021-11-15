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
