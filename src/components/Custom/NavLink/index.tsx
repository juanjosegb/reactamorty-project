import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CustomNavLink = styled(NavLink)`
  text-align: center;
  text-decoration:none;
  font-weight: bold;
  color: white;
  &:hover{
    text-decoration: none;
    color: white;
  }
  &:active:{
    color: red;
  }
`;


export const CustomNavLinkSidenav = styled(NavLink)`
  text-align: center;
  text-decoration:none;
  font-weight: bold;
  &:hover{
    text-decoration: none;
    color: white;
  }
  a.active > &:{
    color: red;
  }
`;
