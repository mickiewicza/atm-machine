import React from 'react';
import { Account } from '@/domain/Account';

const INITIAL_BALANCE = 100;

export const Screens = {
  welcome: 'welcome',
  balance: 'balance',
  withdraw: 'withdraw',
  deposit: 'deposit',
} as const;

export type Screen = (typeof Screens)[keyof typeof Screens];

export interface ATMContextValue {
  account: Account;
  showedScreen: Screen;
  setShowedScreen: (screen: Screen) => void;
  goToScreen: (screen: Screen) => void;
  cancel: () => void;
  submit: () => void;
  clear: () => void;
  onNumberButtonClick: (numberButton: string) => void;
  numberString: string;
  error: string | null;
}

export const ATMContext = React.createContext<ATMContextValue>({
  account: new Account(INITIAL_BALANCE),
  showedScreen: Screens.welcome,
  setShowedScreen: () => {},
  goToScreen: () => {},
  cancel: () => {},
  submit: () => {},
  clear: () => {},
  onNumberButtonClick: () => {},
  numberString: '',
  error: null,
});

export const useATMContext = () => {
  const context = React.useContext(ATMContext);
  if (!context) throw new Error('useATMContext must be used within a ATMContextProvider');
  return context;
};
