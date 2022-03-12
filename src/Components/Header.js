import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
    position: fixed;
    display: flex;
    height: 5rem;
    background-color: rgb(40, 40, 40);
    border-bottom: 2px solid rgb(255, 40, 75);
    width: 100%;
    justify-content: center;
`;

const NavList = styled.ul`
    list-style: none;
    padding-left: 0;
    align-items: center;
    @media (min-width: 660px) {
        display: ${props => props.lgmedia ? 'flex' : 'none'};
    }
    @media (max-width: 660px) {
        display: ${props => props.smmedia ? 'flex' : 'none'};
    }
`;

const ListItem = styled.li`
    list-style: none;
    display: inline-block;
    margin: 0 2rem;
`;

const NavLink = styled.a`
    text-decoration: none;
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
`;


class Header extends React.Component {
    render() {
        return (
            <Navbar>
                <NavList lgmedia>
                    <ListItem>
                        <NavLink href="#project-link">Projects</NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink href="#contact-form">Contact</NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink target="_blank" href="https://www.linkedin.com/in/chase-mack-098a16213/">LinkedIn</NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink target="_blank" href="https://github.com/chase-mack">GitHub</NavLink>
                    </ListItem>
                </NavList>
                <NavList smmedia>
                    <ListItem>
                        <NavLink href="#project-link">Projects</NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink href="#contact-form">Contact</NavLink>
                    </ListItem>
                </NavList>
            </Navbar>
        )
    }
}

export { Header };