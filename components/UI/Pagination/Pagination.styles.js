import styled from 'styled-components';
import { device } from '../../../public/styles/devices';

export const PaginationContainer = styled.div`
  padding-left: 14px;
  padding-right: 14px;
  
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const TitleContainer = styled.div`
  @media ${device.mobile} {
    width: 100%;
  }

  @media ${device.tablet} {
    width: auto;
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