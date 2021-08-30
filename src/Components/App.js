import React from 'react';
import { Navbar, NavList, ListItem, NavLink } from './Styles/NavbarStyles';
import { Intro } from './Styles/IntroStyles';
import { Container } from './Styles/ContainerStyles';
import { MissionStatement } from './Styles/MissionStatementStyles';
import { Projects, Card } from './Styles/ProjectStyles';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header>
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
                </header>
                <main>
                    <Intro>
                        <Container>
                            <h1>Hi, my name is <span style={{color: 'rgb(255, 40, 75)'}}>Chase Mack</span>
                                <br />
                                And I'm a Web Developer.
                            </h1>
                        </Container>
                    </Intro>
                    <MissionStatement>
                        <Container smmedia>
                            <h2 style={{fontSize: '2rem'}}>A Little About Me</h2>
                            <hr style={{width: '20rem'}}/>
                            <p style={{fontSize: '1.5rem'}}>
                                With my background in the energy industry, I have learned value lies in delivering
                                the highest quality product in the shortest amount of time possible. Those principles
                                will translate but I knew I wanted that product to change while working on my first
                                original project. Programming is challenging, frustrating, rewarding, and I love it.
                                I am excited to see what I am able to build when I have the opportunity to work full
                                time as a developer.
                            </p>
                        </Container>
                    </MissionStatement>
                    <Projects>

                    </Projects>
                </main>
                <footer>

                </footer>
            </React.Fragment>
        )
    }
}

export default App;