import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faCodepen } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const FooterDiv = styled.div`
    height: 5rem;
    width: 100%;
    background-color: rgb(40, 40, 40);
    display: flex;
    justify-content: center;
`;

const FooterUL = styled.ul`
    list-style: none;
    display: flex;
    padding-left: 0;
    align-items: center;
`;

const FooterLI = styled.li`
    list-style: none;
    display: inline-block;
    margin: 0 2rem;
    padding: 1rem:
`;

const FootLink = styled.a`
    text-decoration: none;
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
`;

const Footer = () => {
    return (
        <FooterDiv>
            <FooterUL>
                <FooterLI>
                    <FootLink
                        href="https://www.linkedin.com/in/chase-mack-098a16213/"
                        target="_blank">
                        <FontAwesomeIcon icon={faLinkedinIn} size="xl" className='hovered' />
                    </FootLink>
                </FooterLI>
                <FooterLI>
                    <FootLink>
                        <FontAwesomeIcon icon={faEnvelope} color="rgb(255, 40, 75)" size="xl" className='hovered' />
                    </FootLink>
                </FooterLI>
                <FooterLI>
                    <FootLink
                        href="https://github.com/chase-mack"
                        target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="xl" className='hovered' />
                    </FootLink>
                </FooterLI>
                <FooterLI>
                    <FootLink
                        href="https://codepen.io/chase-mack"
                        target="_blank">
                        <FontAwesomeIcon icon={faCodepen} size="xl" className='hovered' />
                    </FootLink>
                </FooterLI>
            </FooterUL>
        </FooterDiv >
    )
}

export { Footer };