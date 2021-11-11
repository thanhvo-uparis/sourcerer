import React from 'react';
import { render } from 'react-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
  
  const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: { authorization: "bearer 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"},
    cache: new InMemoryCache()
  });

const GET_LOGIN = gql`
    query { 
        viewer { 
            login
            avatarUrl
            followers(first: 1){
              totalCount
            }
            location
            company
            repositories(first: 1){
              totalCount
            }
            following(first: 1){
              totalCount
            }
          }
    }
`;