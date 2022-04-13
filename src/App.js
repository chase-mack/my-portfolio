import React from 'react';
import GlobalStyle from './GlobalStyles';
import { Header } from './Components/Header';
import { Intro } from './Components/Intro';
import { Footer } from './Components/Footer';
import { AboutMe } from './Components/AboutMe';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';

const App = () => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Header />
            <main>
                <Intro />
                <AboutMe />
                <Projects />
            </main>
            <Contact />
            <Footer />
        </React.Fragment>
    )
}

export default App;