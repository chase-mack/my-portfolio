import React from 'react';
import { Navbar, NavList, NavListItem, NavLink } from './Navbar';

class App extends React.Component {
    render() {
        return (
            <Navbar>
                <NavList id="lg-media-list">
                    <NavListItem>
                        <NavLink href="#project-link">Projects</NavLink>
                    </NavListItem>
                    <NavListItem>
                        <NavLink href="#contact-form">Contact</NavLink>
                    </NavListItem>
                    <NavListItem>
                        <NavLink target="_blank" href="https://www.linkedin.com/in/chase-mack-098a16213/">LinkedIn</NavLink>
                    </NavListItem>
                    <NavListItem>
                        <NavLink target="_blank" href="https://github.com/chase-mack">GitHub</NavLink>
                    </NavListItem>
                </NavList>
                <NavList id="sm-media-list">
                    <NavListItem>
                        <NavLink href="#project-link">Projects</NavLink>
                    </NavListItem>
                    <NavListItem>
                        <NavLink href="#contact-form">Contact</NavLink>
                    </NavListItem>
                </NavList>
            </Navbar>
        )
    }
}

export default App;