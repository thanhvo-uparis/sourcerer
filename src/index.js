import React from 'react';
import UserInfos from './components/UserInfos/UserInfos';
import Query from './query/Query';
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

function ExchangeRates() {

  const { loading, error, data } = useQuery(GET_LOGIN);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

    return(
      <div>
        <img src={data.viewer.avatarUrl} />
        <p>{data.viewer.login}</p>
          <p> {data.viewer.following.totalCount} </p>
          <div>
            <p> Following: {data.viewer.following.totalCount} </p>
          </div>

      </div>
    )
}


function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <ExchangeRates/>
    </div>
    
  );
}

render(

  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
