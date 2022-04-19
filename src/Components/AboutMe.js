import React from 'react';
import styled from 'styled-components'
import chase from '../Assets/chase.jpg';

const Heading = styled.h2`
    fontSize: 2rem;
    text-align: center;
    padding-top: 2rem;J
`;

const AboutSection = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 4rem;
    flex-direction: row;
    @media (max-width: 875px) {
        flex-direction: column};
    }
    font-weight: 600;
`;

const Container = styled.div`
    text-align: center;
`;

const AboutMe = () => {
    return (
        <section style={{ fontSize: '1.5rem' }}>
            <Heading>A Little About Me</Heading>
            <hr style={{ width: '80%' }} />
            <AboutSection>
                <Container>
                    <img src={chase} alt="Chase" id="headshot"></img>
                </Container>
                <Container>
                    <p style={{ maxWidth: '22rem', display: 'inline-block' }}>
                        With my background in the energy industry, I have learned value lies in delivering the highest quality product in the shortest amount of time possible. Those principles will translate but I knew I wanted that product to change while working on my first original project. Programming is challenging, frustrating, rewarding, and I love it. I am excited to see what I am able to build when I have the opportunity to work full time as a developer.
                    </p>
                </Container>
            </AboutSection>
        </section>
    )
}

export { AboutMe }