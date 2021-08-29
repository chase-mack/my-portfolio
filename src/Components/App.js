import React from 'react';
import { Navbar, NavList } from './Navbar';
import '../';

class App extends React.Component {
    render() {
        return (
            <Navbar>
                <NavList id="lg-media-list">
                    <li><a className="nav-link" href="#project-link">Projects</a></li>
                    <li><a className="nav-link" href="#contact-form">Contact</a></li>
                    <li><a className="nav-link" target="_blank"
                            href="https://www.linkedin.com/in/chase-mack-098a16213/">LinkedIn</a></li>
                    <li><a className="nav-link" target="_blank" href="https://github.com/chase-mack">GitHub</a></li>
                </NavList>
                <NavList id="sm-media-list">
                    <li><a className="nav-link" href="#project-link">Projects</a></li>
                    <li><a className="nav-link" href="#contact-form">Contact</a></li>
                </NavList>
            </Navbar>
        )
    }
}

export default App;