import { createContext, useContext } from 'react';

export const RadioThemeContext = createContext({ disabled: false, checked: false });
export const useRadioThemeContext = () => useContext(RadioThemeContext);
