import React from 'react';
import { render } from 'react-dom';
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
