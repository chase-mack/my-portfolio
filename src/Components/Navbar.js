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

const NavLink = styled.a`
    text-decoration: none;
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
`;

const NavList = styled.ul`
    list-style: none;
    display: flex;
    padding-left: 0;
    align-items: center;
`;

const NavListItem = styled.li`
    display: inline-block;
    margin: 0 2rem;
`;

export { Navbar, NavLink, NavList };