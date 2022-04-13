import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faChevronCircleUp, faEnvelope } from '@fortawesome/free-solid-svg-icons';

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

const ScrollBtn = styled.a`
    display: block;
    position: fixed;
    bottom: 100px;
    color: rgb(255, 40, 75);
    font-size: 2.5rem;
    left: 50%;
    margin-left: -1.25rem;
    transition: .3s ease;
    border-radius: 50%;
`;

const Footer = () => {
    const [isScrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        setScrolled((window.innerHeight + window.scrollY) >= document.body.scrollHeight);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <React.Fragment>
            <ScrollBtn href="#intro" className={isScrolled ? 'slide-up' : 'slide-down'} >
                <FontAwesomeIcon icon={faChevronCircleUp} />
            </ScrollBtn>
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
        </React.Fragment >
    )
}

export { Footer };