import './App.css';
import 'typeface-roboto';


import React, { Component } from 'react';

import AppRouter from "./AppRouter"

//context
import { ThemeContextProvider } from './context/ThemeContext';
import { AuthContextProvider } from './context/AuthContext';
import { CounterContextProvider } from './context/CounterContext';
import 'react-toastify/dist/ReactToastify.css';
export class App extends Component {
  render() {
    return (
      <AuthContextProvider value={true}>
        <ThemeContextProvider>
          <CounterContextProvider>
          <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
            <AppRouter />

          </CounterContextProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
    )
  }
}
export default App;
