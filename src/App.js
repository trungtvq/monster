import logo from './logo.svg';
import './App.css';
import 'typeface-roboto';


import React, { Component } from 'react';

import AppRouter from "./AppRouter"

//context
import { ThemeContextProvider } from './context/ThemeContext';
import { AuthContextProvider } from './context/AuthContext';
import { CounterContextProvider } from './context/CounterContext';

export class App extends Component {
  render() {
    return (
      <AuthContextProvider value={true}>
        <ThemeContextProvider>
          <CounterContextProvider>
            <AppRouter />
          </CounterContextProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
    )
  }
}
export default App;
