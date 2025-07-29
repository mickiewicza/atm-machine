import type { FC } from 'react';
import { useATMContext } from '@/context/ATMContext';
import { Error, Input, ScreenButtonsWrapper, ScreenButton } from '@/components/elements';

const Deposit: FC = () => {
  const { numberString, error, goToScreen } = useATMContext();
  return (
    <>
      <p>Enter amount to deposit</p>
      <Input>${numberString}</Input>
      {error && <Error>{error}</Error>}
      <ScreenButtonsWrapper>
        <ScreenButton onClick={() => goToScreen('welcome')}>Back</ScreenButton>
      </ScreenButtonsWrapper>
    </>
  );
};

export default Deposit;
