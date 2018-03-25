import { AUTH_TOKEN } from '../configs/constants';
import { split } from 'apollo-client-preset';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { AsyncStorage } from 'react-native';
import { setContext } from 'apollo-link-context';

const httpLink = new HttpLink({ uri: `http://localhost:4000` });

const getToken = async () => {
  return AsyncStorage.getItem(AUTH_TOKEN);
};

const authMiddleware = setContext(async (req, { headers }) => {
  const token = await getToken();
  console.log('token ===', token);
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${token}` || null,
    },
  };
});

const httpLinkWithAuthToken = authMiddleware.concat(httpLink);

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000`,
  options: {
    reconnect: true,
    connectionParams: {
      authToken: getToken(), //FIXME: need comfirm that work with subscription
    },
  },
});

console.log('wsLink ===', wsLink);
const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLinkWithAuthToken
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
