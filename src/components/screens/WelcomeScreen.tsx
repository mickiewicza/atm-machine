import type { FC } from 'react';

import { ScreenButton, ScreenButtonsWrapper } from '@/components/elements';

import { useATMContext } from '@/context/ATMContext';

const WelcomeScreen: FC = () => {
  const { goToScreen } = useATMContext();

  return (
    <>
      <p>Welcome to the ATM</p>
      <p>Please choose an option to continue.</p>
      <ScreenButtonsWrapper>
        <ScreenButton onClick={() => goToScreen('balance')}>See your balance</ScreenButton>
        <ScreenButton onClick={() => goToScreen('withdraw')}>Go to withdraw</ScreenButton>
        <ScreenButton onClick={() => goToScreen('deposit')}>Go to deposit</ScreenButton>
      </ScreenButtonsWrapper>
    </>
  );
};

export default WelcomeScreen;
