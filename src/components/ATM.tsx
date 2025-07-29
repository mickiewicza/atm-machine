import type { FC } from 'react';
import styled from 'styled-components';

import BalanceDisplay from '@/components/screens/BalanceDisplay';
import Deposit from '@/components/screens/Deposit';
import Withdraw from '@/components/screens/Withdraw';
import WelcomeScreen from '@/components/screens/WelcomeScreen';

import Keyboard from '@/components/Keyboard';

import { useATMContext } from '@/context/ATMContext';
import { ATMContextProvider } from '@/context/ATMProvider';

const ATMComponent: FC = () => {
  const { showedScreen } = useATMContext();

  const renderContent = () => {
    switch (showedScreen) {
      case 'welcome':
        return <WelcomeScreen />;
      case 'balance':
        return <BalanceDisplay />;
      case 'withdraw':
        return <Withdraw />;
      case 'deposit':
        return <Deposit />;
    }
    showedScreen satisfies never;
  };

  return (
    <Wrapper>
      <Header>ATM</Header>
      <ScreenWrapper>
        <Screen>{renderContent()}</Screen>
      </ScreenWrapper>
      <Bottom>
        <Keyboard />
      </Bottom>
    </Wrapper>
  );
};

const ATM: FC = () => {
  return (
    <ATMContextProvider>
      <ATMComponent />
    </ATMContextProvider>
  );
};

export default ATM;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  background: grey;
`;

const Header = styled.header`
  padding: 12px;
  background-color: #0056b3;
  color: #fff;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  font-size: 64px;
`;

const ScreenWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  background-color: darkgray;
  margin: 0px 100px;
  padding: 20px;
`;
const Screen = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 76%;
  box-sizing: border-box;

  padding: 12px;
  margin: 0px auto;

  text-align: center;
  color: white;
  background-color: blue;
  font-size: 20px;
`;

const Bottom = styled.div`
  border-bottom: 230px solid lightgray;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  height: 0;
`;
