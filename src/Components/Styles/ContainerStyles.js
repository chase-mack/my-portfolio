import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: auto;
    max-width: 30rem;
    @media (max-width: 700px) {
        max-width: ${props => props.smmedia ? '25rem' : '30rem'};
    }
`;

export { Container };