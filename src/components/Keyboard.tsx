import type { FC } from 'react';
import styled from 'styled-components';
import { useATMContext } from '@/context/ATMContext';

const Keyboard: FC = () => {
  const { onNumberButtonClick, submit, cancel, clear } = useATMContext();
  return (
    <Wrapper>
      <ButtonsWrapper>
        {Array(9)
          .fill(0)
          .map((_, index) => (
            <Button key={index + 1} onClick={() => onNumberButtonClick((index + 1).toString())}>
              {index + 1}
            </Button>
          ))}
        <EmptyButton disabled></EmptyButton>
        <Button onClick={() => onNumberButtonClick('0')}>0</Button>
        <EmptyButton disabled></EmptyButton>
      </ButtonsWrapper>
      <LeftButtonsWrapper>
        <CancelButton onClick={() => cancel()}>Cancel</CancelButton>
        <Button onClick={() => clear()}>Clear</Button>
        <EmptyButton disabled></EmptyButton>
        <SubmitButton onClick={() => submit()}>Submit</SubmitButton>
      </LeftButtonsWrapper>
    </Wrapper>
  );
};

export default Keyboard;

const Button = styled.button`
  width: 80px;
  height: 30px;
  display: inline-block;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }
`;

const EmptyButton = styled(Button)`
  background-color: gray;
`;

const SubmitButton = styled(Button)`
  background-color: green;
`;

const CancelButton = styled(Button)`
  background-color: red;
`;

const Wrapper = styled.div`
  display: flex;
  transform: skew(-19deg);
  gap: 10px;
  padding: 30px;
  max-width: 70%;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  width: 240px;
  flex-wrap: wrap;
`;

const LeftButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
