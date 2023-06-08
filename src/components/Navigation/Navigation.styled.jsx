import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
`;

export const NavLinkStyled = styled(NavLink)`
  text-transform: uppercase;
  font-size: 25px;
  font-weight: 300;

  color: black;

  transition: all 500ms;

  &.active {
    border-bottom: 1px solid black;
    font-size: 28px;
    font-weight: 400;

    &:hover {
        font-size: 28px;
        font-weight: 400;
    }
  }

  &:hover {
    border-bottom: 1px solid black;
    font-size: 28px;
    font-weight: 400;
  }
`;