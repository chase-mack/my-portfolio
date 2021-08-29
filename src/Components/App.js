import React from 'react';
import { Navbar } from './Navbar';
import './style.css';

class App extends React.Component {
    render() {
        return (
            <Navbar>
                <ul id="lg-media-list" className="nav-list">
                    <li><a class="nav-link" href="#project-link">Projects</a></li>
                    <li><a class="nav-link" href="#contact-form">Contact</a></li>
                    <li><a class="nav-link" target="_blank"
                            href="https://www.linkedin.com/in/chase-mack-098a16213/">LinkedIn</a></li>
                    <li><a class="nav-link" target="_blank" href="https://github.com/chase-mack">GitHub</a></li>
                </ul>
                <ul id="sm-media-list" className="nav-list">
                    <li><a class="nav-link" href="#project-link">Projects</a></li>
                    <li><a class="nav-link" href="#contact-form">Contact</a></li>
                </ul>
            </Navbar>
        )
    }
}

export default App;