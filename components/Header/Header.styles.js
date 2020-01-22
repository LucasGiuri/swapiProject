import styled from 'styled-components';
import { WHITE } from '../../public/styles/colors';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: ${WHITE}
`;

export const Nav = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;