import styled from 'styled-components';
import { WHITE, BLACK, OLD_GREY } from '../../static/styles/colors';
import { device } from '../../static/styles/devices';

export const Btn = styled.button`
  padding: 10px;
  color: ${props => props.isDisabled ? OLD_GREY : WHITE};
  cursor: ${props => props.isDisabled ? 'default' : 'pointer'};
  border-color: ${props => props.isDisabled ? OLD_GREY : WHITE};
  background-color: ${BLACK};
  font-size: 14px;
  
  @media ${device.mobile} {
    width: 49%;
  }
  
  @media ${device.tablet} {
    width: auto;
    margin-left: 14px;
  }
`;