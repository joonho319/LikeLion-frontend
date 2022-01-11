import { ApolloClient, createHttpLink, InMemoryCache, makeVar, split } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import { getMainDefinition } from '@apollo/client/utilities';
import { LOCALSTORAGE_TOKEN } from './constant';

const token = localStorage.getItem(LOCALSTORAGE_TOKEN);
const TodayWebtoon = localStorage.getItem('TodayWebtoon');
const EditorRecommend = localStorage.getItem('EditorRecommendWebtoon');

export const isLoggedInVar = makeVar(Boolean(token));
export const authTokenVar = makeVar(token);

export const TodayWebtoonVar = makeVar(TodayWebtoon);
export const EditorRecommendVar = makeVar(EditorRecommend);

const httpLink = createHttpLink({
  uri:
    process.env.NODE_ENV === "production"
      ? "https://scoop-house-backend.herokuapp.com/graphql"
      : "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "x-jwt": authTokenVar() || "",
    },
  };
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  authLink.concat(httpLink)
);

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
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