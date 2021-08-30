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

export { Navbar, NavLink, NavList, ListItem };