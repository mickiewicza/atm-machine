import type { FC } from 'react';
import { useATMContext } from '@/context/ATMContext';

import { ScreenButton, ScreenButtonsWrapper } from '@/components/elements';

const BalanceDisplay: FC = () => {
  const { account, goToScreen } = useATMContext();

  return (
    <>
      <p>Your balance is:</p>
      <p>${account.balance}</p>
      <ScreenButtonsWrapper>
        <ScreenButton onClick={() => goToScreen('welcome')}>Back</ScreenButton>
      </ScreenButtonsWrapper>
    </>
  );
};

export default BalanceDisplay;
