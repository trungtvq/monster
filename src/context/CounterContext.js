import React, { Component } from "react"

export const CounterContext = React.createContext({
    number: 0,
    inc: () => {         
    },
});

export class CounterContextProvider extends Component {
    state = {
        number: 10,
        inc: () => {
            this.setState({ number: this.state.number + 1 })
        }
    }
    render() {
        return <CounterContext.Provider value={this.state}>
          {this.props.children}
        </CounterContext.Provider>
    }
}