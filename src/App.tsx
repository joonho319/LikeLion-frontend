import { useReactiveVar } from '@apollo/client';
import React from 'react';
import {LoggedOutRouter} from './routers/logged-out-router';
import {LoggedInRouter} from './routers/logged-in-router';
import { isLoggedInVar } from './apollo';
import { Helmet } from 'react-helmet-async';

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <div>
      <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
      <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.8.js"></script>
      <LoggedOutRouter />
    </div>
  );
}

export default App;
