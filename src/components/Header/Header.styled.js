import styled from 'styled-components';
import { NavLink } from "react-router-dom";


export const Nav = styled.nav`
background-color: burlywood;
padding: 5px;
margin-bottom: 40px;
border-radius: 50px;
box-shadow: 0px 4px 19px 8px rgba(0,0,0,1);
-webkit-box-shadow: 0px 4px 19px 8px rgba(0,0,0,1);
-moz-box-shadow: 0px 4px 19px 8px rgba(0,0,0,1);
`;

export const NavList = styled.ul`
display: flex;
justify-content: space-evenly;
margin: 25px;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: larger;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  padding: 15px;

  &.active {
    color: white;
    border-radius: 20px;
    background-color: orange;
   
    color: wite;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: orange;
    text-shadow: 0px 0px 17px rgba(0,0,0,1);
  }
`;