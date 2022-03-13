import React from 'react';
import styled from 'styled-components';
import { Container } from './Styles/ContainerStyles';
import textGame from '../Assets/text-game.png';
import carpentry from '../Assets/carpentry.png';

const Grid = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: 2rem;
`;

const Card = styled.div`
    width: 20rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 5rem;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    transition: 0.3s;
    border-radius: 0 0 5px 5px;
`;

const Image = styled.img`
    max-width: 100%;
    height: 14rem;
    border-radius: 5px 5px 0 0;
`;

const LinkContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const CardLink = styled.div`
    display: inline-block;
    height: 2rem;
    width: 5rem;
    border-radius: 5px;
    font-weight: 700;
    background-color: rgb(40, 40, 40);
    color: white;
    line-height: 2rem;
    margin-bottom: 1rem;
`;

class Projects extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <h2>Have a look at some of my projects.</h2>
                </Container>
                <Grid>
                    <Card>
                        <div>
                            <a href="text-game/textGame.html" target="_blank">
                                <Image src={textGame} />
                            </a>
                        </div>
                        <div class="description">
                            <p>A text adventure game using HTML/CSS and Vanilla JS.</p>
                        </div>
                        <LinkContainer>
                            <CardLink href="text-game/textGame.html">Live</CardLink>
                            <CardLink
                                href="https://github.com/chase-mack/text-game/blob/5a45beaaba0e6d9e283b4f2f4881ca6befe71c92/textGame.js"
                                target="_blank">Code
                            </CardLink>
                        </LinkContainer>
                    </Card>
                    <Card>
                        <div>
                            <a href="dad-site/index.html" target="_blank">
                                <Image src={carpentry} />
                            </a>
                        </div>
                        <div class="description">
                            <p>A mock site for a carpentry business using HTML/CSS and Vanilla JS.</p>
                        </div>
                        <LinkContainer>
                            <CardLink href="dad-site/index.html">Live</CardLink>
                            <CardLink
                                href="https://github.com/chase-mack/dad-site/blob/d42c4568a77085dcdf66ddc5372c40f1575c0b2e/dad-site.js"
                                target="_blank">Code
                            </CardLink>
                        </LinkContainer>
                    </Card>
                </Grid>
            </React.Fragment>
        )
    }
}

export { Projects };