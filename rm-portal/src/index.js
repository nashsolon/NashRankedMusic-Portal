import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
// import Amplify from "aws-amplify";
// import awsExports from "./aws-exports";
// Amplify.configure(awsExports);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);