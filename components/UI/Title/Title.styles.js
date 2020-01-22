import styled from 'styled-components';
import { PRIMARY } from '../../../public/styles/colors';

export const Text = styled.p`
  margin-bottom:  ${props => props.isSmall ? '0': '22px'};
  padding-left: 14px;
  padding-right: 14px;
  font-family: 'Roboto', sans-serif;
  color: ${PRIMARY};
  font-size: ${props => props.isSmall ? '16px': '22px'};
  text-align: ${props => props.centered ? 'center' : 'left'};
  font-weight: ${props => props.isBold ? 'bold' : 'normal'};
`;