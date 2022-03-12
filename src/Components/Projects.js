import React from 'react';
import styled from 'styled-components';

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
    transition: 0.3s;
`;

class Projects extends React.Component {
    render() {
        return (
            <Grid>
                <Card></Card>
            </Grid>
        )
    }
}

export { Projects };