import { ApolloClient, createHttpLink, InMemoryCache, makeVar } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import { LOCALSTORAGE_TOKEN } from './constant';

const token = localStorage.getItem(LOCALSTORAGE_TOKEN);

export const isLoggedInVar = makeVar(Boolean(token));
export const authTokenVar = makeVar(token);

const httpLink = createHttpLink({
  uri: process.env.NODE_ENV === 'production' ?  'https://mast-ventures-backend.herokuapp.com/graphql' : 'http://localhost4000/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "x-jwt": authTokenVar() || "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  uri: process.env.NODE_ENV === 'production' ?  'https://mast-ventures-backend.herokuapp.com/graphql' : 'http://localhost4000/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedInVar();
            }
          },
          token: {
            read() {
              return authTokenVar();
            },
          }
        }
      }
    }
  })
});