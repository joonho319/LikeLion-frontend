import { useQuery, useReactiveVar } from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react';
import {LoggedOutRouter} from './routers/logged-out-router';
import {LoggedInRouter} from './routers/logged-in-router';
import { isLoggedInVar } from './apollo';

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <div className="bg-gray-500">
      <h1 className="text-gray-100">스쿱하우스</h1>
      {isLoggedIn ? <LoggedInRouter /> : <LoggedOutRouter />}
    </div>
  );
}

export default App;
