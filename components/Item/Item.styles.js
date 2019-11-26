import styled from 'styled-components';
import { WHITE, OLD_GREY } from '../../static/styles/colors';

export const ItemContainer = styled.div`
  padding: 14px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  border-bottom: 1px solid ${OLD_GREY};
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  transition: 0.25s;
  color: ${OLD_GREY};
  &:hover {
    color: ${WHITE};
  }
`;