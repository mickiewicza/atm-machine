import { ATMContext, Screens, type Screen } from '@/context/ATMContext';
import { Account } from '@/domain/Account';
import React, { useState } from 'react';

const INITIAL_BALANCE = 100;

export const ATMContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [account] = useState(new Account(INITIAL_BALANCE));
  const [showedScreen, setShowedScreen] = React.useState<Screen>(Screens.welcome);
  const [numberString, setNumberString] = useState('');

  const [error, setError] = useState<string | null>(null);

  const screensWithNumberAvailableKeyboardButtons: Screen[] = [Screens.deposit, Screens.withdraw];

  const clearErrorsAndNumberString = () => {
    setNumberString('');
    setError(null);
  };

  const goToScreen = (screen: Screen) => {
    setShowedScreen(screen);
    clearErrorsAndNumberString();
  };

  const cancel = () => {
    goToScreen(Screens.welcome);
    clearErrorsAndNumberString();
  };

  const submit = () => {
    try {
      if (showedScreen === Screens.deposit) {
        account.deposit(Number(numberString));
      }
      if (showedScreen === Screens.withdraw) {
        account.withdraw(Number(numberString));
      }
      goToScreen(Screens.welcome);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  const onNumberButtonClick = (numberButton: string) => {
    if (!screensWithNumberAvailableKeyboardButtons.includes(showedScreen)) {
      return;
    }
    setError(null);
    setNumberString(state => state + numberButton);
  };

  const clear = () => {
    if (!screensWithNumberAvailableKeyboardButtons.includes(showedScreen)) {
      return;
    }
    clearErrorsAndNumberString();
  };

  return (
    <ATMContext.Provider
      value={{ account, showedScreen, setShowedScreen, goToScreen, cancel, submit, clear, onNumberButtonClick, numberString, error }}
    >
      {children}
    </ATMContext.Provider>
  );
};
