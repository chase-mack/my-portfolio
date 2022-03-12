import React from 'react';
import styled from 'styled-components'
import { Container } from './Styles/ContainerStyles';
import chase from '../Assets/chase.jpg';

const Description = styled.section`
    font-size: 1.25rem;
`;

class AboutMe extends React.Component {
    render() {
        return (
            <Description>
                <Container smmedia>
                    <h2 style={{ fontSize: '2rem' }}>A Little About Me</h2>
                    <hr style={{ width: '20rem' }} />
                    <img src={chase} alt="Chase" id="headshot"></img>
                    <p style={{ fontSize: '1.5rem' }}>
                        With my background in the energy industry, I have learned value lies in delivering
                        the highest quality product in the shortest amount of time possible. Those principles
                        will translate but I knew I wanted that product to change while working on my first
                        original project. Programming is challenging, frustrating, rewarding, and I love it.
                        I am excited to see what I am able to build when I have the opportunity to work full
                        time as a developer.
                    </p>
                </Container>
            </Description>
        )
    }
}

export { AboutMe }