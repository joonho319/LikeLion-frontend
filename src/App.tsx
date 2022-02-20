import { useReactiveVar } from '@apollo/client';
import React from 'react';
import {Routers} from './routers/router';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <div>
      <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
      <Routers />
    </div>
  );
}

export default App;
