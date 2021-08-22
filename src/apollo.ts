import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

export const isLoggedInVar = makeVar(false);
export const free_or_paid = makeVar('free');


export const client = new ApolloClient({
  uri: 'http://localhost:3000',
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
              return free_or_paid();
            },
          }
        }
      }
    }
  })
});