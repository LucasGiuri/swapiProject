import styled from 'styled-components';

export const Img = styled.img`
  padding-top: 8px;
  padding-bottom: 8px;
  width: ${props => props.isLogo ? '100px': '200px'};
`;