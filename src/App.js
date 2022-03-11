import React from 'react';
import { Navbar } from './Components/Navbar';
import { Intro } from './Components/Styles/IntroStyles';
import { Container } from './Components/Styles/ContainerStyles';
import { MissionStatement } from './Components/Styles/MissionStatementStyles';
import { Projects, Card } from './Components/Styles/ProjectsStyles';
import { Footer } from './Components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelope);

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <Navbar />
                </header>
                <main>
                    <Intro>
                        <Container>
                            <h1>Hi, my name is <span style={{ color: 'rgb(255, 40, 75)' }}>Chase Mack</span>
                                <br />
                                And I'm a Web Developer.
                            </h1>
                        </Container>
                    </Intro>
                    <MissionStatement>
                        <Container smmedia>
                            <h2 style={{ fontSize: '2rem' }}>A Little About Me</h2>
                            <hr style={{ width: '20rem' }} />
                            <p style={{ fontSize: '1.5rem' }}>
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
                <Footer />
            </React.Fragment>
        )
    }
}

export default App;