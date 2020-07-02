import { ThemeContext } from '../../context/ThemeContext';
import { AuthContext } from '../../context/AuthContext';
import { CounterContext } from '../../context/CounterContext';

import React, { useContext } from 'react';

const useTheme = () => useContext(ThemeContext)
const useCounter = () => useContext(CounterContext)

const LightTheme = props => {
    const theme = useTheme()
    const counter = useCounter()

    return (
        <div>
            <button
                onClick={theme.toggleTheme}
                style={{ backgroundColor: theme.theme.background }}>
                Toggle Theme
        </button>
            <button onClick={counter.inc}>INC TO {counter.number}</button>
        </div>
    );

}

export default LightTheme;