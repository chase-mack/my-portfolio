import React from 'react';
import styled from 'styled-components'
import { Container } from './Styles/ContainerStyles';
import chase from '../Assets/chase.jpg';

const Heading = styled.h2`
    fontSize: 2rem;
    text-align: center;
`;

const AboutSection = styled.div`
    display: flex;
    flex-direction: row;
    padding: 4rem 0;
    justify-content: space-between;
`;

const AboutMe = () => {
    return (
        <section style={{ fontSize: '1.25rem' }}>
            <Heading>A Little About Me</Heading>
            <hr style={{ width: '20rem' }} />
            <AboutSection>
                <Container smmedia>
                    <img src={chase} alt="Chase" id="headshot"></img>
                </Container>
                <Container style={{ maxWidth: '25rem' }}>
                    <p style={{ fontSize: '1.5rem' }}>
                        With my background in the energy industry, I have learned value lies in delivering
                        the highest quality product in the shortest amount of time possible. Those principles
                        will translate but I knew I wanted that product to change while working on my first
                        original project. Programming is challenging, frustrating, rewarding, and I love it.
                        I am excited to see what I am able to build when I have the opportunity to work full
                        time as a developer.
                    </p>
                </Container>
            </AboutSection>
        </section>
    )
}

export { AboutMe }