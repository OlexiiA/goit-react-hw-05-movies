import React from 'react';
import {Nav, NavList, NavItem} from './Header.styled'


const headerItems = [
    { to: "/", title: "Home" },
    { to: "/movies", title: "Movies" },
]



export const Header = () => {
    return <Nav>
        <NavList>
            {headerItems.map(e => <li key={e.title}>
<NavItem to={e.to}>{e.title}</NavItem>
            </li>)}
        </NavList>
    </Nav>
}