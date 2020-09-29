import styled from '@emotion/styled';

export const ContrastButton = styled.button`
  background-color: ${({ light }) => {
    return light ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)';
  }};
  border-radius: 10px;
  border: 2px solid;
  margin: 13em 1em;
  padding: 1em 5em;
  position: flex;
  width: 212px;
  height: 54px;
  font-family: Roboto;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${({ light }) => {
    return light ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)';
  }};
  outline: none;
`;
