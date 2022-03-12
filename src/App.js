import React from 'react';
import GlobalStyle from './GlobalStyles';
import { Header } from './Components/Header';
import { Intro } from './Components/Intro';
import { Footer } from './Components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { AboutMe } from './Components/AboutMe';
import { Projects } from './Components/Projects';

library.add(fab, faEnvelope);

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <GlobalStyle />
                <Header />
                <main>
                    <Intro />
                    <AboutMe />
                    <Projects />
                </main>
                <Footer />
            </React.Fragment>
        )
    }
}

export default App;