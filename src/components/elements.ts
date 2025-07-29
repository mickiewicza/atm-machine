import styled from 'styled-components';

export const ScreenButton = styled.button`
  padding: 6px 12px;
  border-radius: 4px;
  border: none;

  background-color: #007bff;
  color: #fff;

  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ScreenButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;
  margin-left: auto;
`;

export const Input = styled.p`
  font-weight: bold;
`;

export const Error = styled.p`
  color: red;
`;
