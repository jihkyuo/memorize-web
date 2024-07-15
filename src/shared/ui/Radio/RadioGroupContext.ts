import { createContext, InputHTMLAttributes, useContext } from 'react';

export interface GroupProps {
  disabled?: boolean;
  value?: string | null;
  defaultChecked?: string;
  innerProps?: InputHTMLAttributes<HTMLInputElement>;
}

export const RadioGroupContext = createContext<GroupProps>({});
export const useRadioGroupContext = () => useContext(RadioGroupContext);
