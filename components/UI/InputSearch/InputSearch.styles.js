import styled from 'styled-components';
import { device } from '../../../public/styles/devices';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  margin-bottom: 22px;

  @media ${device.mobile} {
    flex-direction: column;
  }

  @media ${device.tablet} {
    flex-direction: row;
    max-width: 500px;
  }
`;

export const Input = styled.input`
  height: 30px;
  padding-left: 12px;
  font-family: 'Roboto', sans-serif;

  @media ${device.mobile} {
    width: 100%;
  }

  @media ${device.tablet} {
    width: 350px;
  }
`;

export const ButtonContainer = styled.div`
  display:flex;
  justify-content: space-between;
  
  @media ${device.mobile} {
    width: 100%;
  }

  @media ${device.tablet} {
    width: auto;
  }
`;