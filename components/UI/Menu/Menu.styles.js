import styled from 'styled-components';
import { PRIMARY, SECONDARY, WHITE } from '../../../public/styles/colors';

export const Nav = styled.div`
  width: 100%;
  background: black;
`;
  
export const Ul = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-around;
`;
  
export const Li = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid ${props => props.isActive ? PRIMARY: SECONDARY};
  color: ${WHITE};
`;