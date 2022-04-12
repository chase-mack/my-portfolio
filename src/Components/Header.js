import React from 'react';
import styled from 'styled-components';
import logo from '../Assets/Logo.png';

const Navbar = styled.nav`
    position: fixed;
    display: flex;
    height: 5rem;
    background-color: rgb(40, 40, 40);
    border-bottom: 2px solid rgb(255, 40, 75);
    width: 100%;
    justify-content: space-between;
    @media (max-width: 700px) {
        justify-content: center;
    }
`;

const NavList = styled.ul`
    list-style: none;
    padding-left: 0;
    align-items: center;
    display: flex;
`;

const ListItem = styled.li`
    list-style: none;
    display: inline-block;
    margin: 0 2rem;
    @media (min-width: 700px) {
        display: ${props => props.lgmedia ? 'flex' : 'none'};
    }
    @media (max-width: 700px) {
        display: ${props => props.smmedia ? 'flex' : 'none'};
    }
`;

const NavLink = styled.a`
    text-decoration: none;
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
`;

const Logo = styled.img`
    height: 3.5rem;
`;

const LogoContainer = styled.div`
    width: 6rem;
    margin: 0 2rem;
    align-items: center;
    display: flex;
    @media (max-width: 700px) {
        display: none;
    }
`;

class Header extends React.Component {
    render() {
        return (
            <Navbar>
                <LogoContainer>
                    <NavLink href="#">
                        <Logo src={logo} />
                    </NavLink>
                </LogoContainer>
                <NavList>
                    <ListItem lgmedia smmedia>
                        <NavLink href="#project-link">Projects</NavLink>
                    </ListItem>
                    <ListItem lgmedia>
                        <NavLink target="_blank" href="https://github.com/chase-mack">GitHub</NavLink>
                    </ListItem>
                    <ListItem smmedia>
                        <NavLink href="#"><Logo src={logo} alt='logo' /></NavLink>
                    </ListItem>
                    <ListItem lgmedia>
                        <NavLink target="_blank" href="https://www.linkedin.com/in/chase-mack-098a16213/">LinkedIn</NavLink>
                    </ListItem>
                    <ListItem lgmedia smmedia>
                        <NavLink href="#contact-form">Contact</NavLink>
                    </ListItem>
                </NavList>
            </Navbar>
        )
    }
}

export { Header };