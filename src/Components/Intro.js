import React from 'react';
import styled from 'styled-components';
import { Container } from './Styles/ContainerStyles';

const IntroSection = styled.section`
height: 100vh;
width: 100%;
background-color: rgb(40, 40, 40);
display: flex;
justify-content: center;
align-items: center;
color: white;
font-size: 1.5rem;
`;

class Intro extends React.Component {
    render() {
        return (
            <IntroSection id="intro">
                <Container>
                    <h1>
                        Hi, my name is
                        <span style={{ color: 'rgb(255, 40, 75)' }}> Chase Mack</span>
                        <br />
                        And I'm a Software Developer.
                    </h1>
                </Container>
            </IntroSection>
        )
    }
}

export { Intro }