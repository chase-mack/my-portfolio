import React from 'react';
import styled from 'styled-components';

const IntroSection = styled.section`
height: 100vh;
width: 100%;
background-color: rgb(40, 40, 40);
display: flex;
justify-content: center;
align-items: center;
text-align: center;
color: white;
font-size: 1.5rem;
`;

const Intro = () => {
    return (
        <IntroSection id="intro">
            <h1>
                Hi, my name is
                <span style={{ color: 'rgb(255, 40, 75)' }}> Chase Mack</span>
                <br />
                And I'm a Software Developer.
            </h1>
        </IntroSection>
    )
}

export { Intro }