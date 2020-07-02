import {ThemeContext} from '../../context/ThemeContext';
import React from 'react';

class DardTheme extends React.Component {
  render() {
    let props = this.props;

    return (
        <ThemeContext.Consumer>
        {(theme,toggleTheme) => (
          <button
          {...props}
          onClick={toggleTheme}
          style={{backgroundColor: theme.background}}>
            {theme.background}
          </button>
         ) }
      </ThemeContext.Consumer>
    );
  }
}
DardTheme.contextType = ThemeContext;

export default DardTheme;