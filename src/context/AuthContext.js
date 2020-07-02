import React, { Component } from "react"

export const AuthContext = React.createContext({
  userId: 0,
  session: 0,
  doLogin: () => {
  },
  doLogout: () => {
  }
});

export class AuthContextProvider extends Component {
  state = {
    userId: 0,
    session: 0,
    doLogin: () => {
    },
    doLogout: () => {
    }
  }
  render() {
    return <AuthContext.Provider value={this.state}>
      {this.props.children}
    </AuthContext.Provider>
  }
}