import type { FC } from 'react';
import { useATMContext } from '@/context/ATMContext';
import { Input, Error, ScreenButtonsWrapper, ScreenButton } from '@/components/elements';

const Withdraw: FC = () => {
  const { numberString, error, goToScreen } = useATMContext();
  return (
    <>
      <p>Enter amount to withdraw</p>
      <Input>${numberString}</Input>
      {error && <Error>{error}</Error>}
      <ScreenButtonsWrapper>
        <ScreenButton onClick={() => goToScreen('welcome')}>Back</ScreenButton>
      </ScreenButtonsWrapper>
    </>
  );
};

export default Withdraw;
