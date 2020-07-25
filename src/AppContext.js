import React, { Component } from 'react';

import AppRouter from "./AppRouter"

//context
import { ThemeContextProvider } from './context/ThemeContext';
import { AuthContextProvider } from './context/AuthContext';
import { CounterContextProvider } from './context/CounterContext';


export class AppContext extends Component {
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
export default AppContext;
