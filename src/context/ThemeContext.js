import React,{Component} from "react"
export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};
export const ThemeContext = React.createContext({
    theme: themes.light,
    toggleTheme: () => {
      
    },
  });

  export class ThemeContextProvider extends Component {
    state = {
      theme: 10,
      toggleTheme: () => {
            this.setState({
              theme:
                this.state.theme === themes.dark
                  ? themes.light
                  : themes.dark,
            })
        }
    }
    render() {
        return <ThemeContext.Provider value={this.state}>
          {this.props.children}
        </ThemeContext.Provider>
    }
}