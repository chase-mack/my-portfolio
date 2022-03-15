import React from 'react';
import styled from 'styled-components';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterDiv = styled.div`
    height: 5rem;
    width: 100%;
    background-color: rgb(40, 40, 40);
    display: flex;
    justify-content: center;
`;

const FooterUL = styled.ul`
    list-style: none;
    padding-left: 0;
    align-items: center;
    @media (min-width: 660px) {
        display: ${props => props.lgmedia ? 'flex' : 'none'};
    }
    @media (max-width: 660px) {
        display: ${props => props.smmedia ? 'flex' : 'none'};
    }
`;

const FooterLI = styled.li`
    list-style: none;
    display: inline-block;
    margin: 0 2rem;
`;

const FootLink = styled.a`
    text-decoration: none;
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
`;

class Footer extends React.Component {
    render() {
        return (
            <FooterDiv>
                <FooterUL>
                    <FooterLI>
                        <FootLink href="https://www.linkedin.com/in/chase-mack-098a16213/" target="_blank"></FootLink>
                        <FootLink>
                            <FontAwesomeIcon icon={faEnvelope} /> This doesn't work!!!!!!
                        </FootLink>
                        <FootLink href="https://github.com/chase-mack" target="_blank"></FootLink>
                        <FootLink href="https://codepen.io/chase-mack" target="_blank"></FootLink>
                    </FooterLI>
                </FooterUL>
            </FooterDiv>
        )
    }
}

export { Footer };