import styled from 'styled-components';

interface ColorButtonProps {
  color: string;
  active?: boolean;
}
export const ColorButton = styled.button<ColorButtonProps>`
  height: 50px;
  width: 50px;
  border: none;
  background-color: ${(props) => props.color};
  margin-right: 10px;
  outline: ${(props) => props.active && 'black solid 2px'};
`;
