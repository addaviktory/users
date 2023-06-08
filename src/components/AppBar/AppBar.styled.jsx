import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AppBarContainer = styled.div`
  padding: 15px 30px 15px 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  border-bottom: 1px solid white;

  box-shadow: 0px 0px 9px 1px rgba(255, 255, 255, 0.75);
`;
export const TitleLink = styled(NavLink)`
  cursor: pointer;
`;
export const TitleLogo = styled.img`
  width: 40px;
`;
