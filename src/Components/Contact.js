import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    color: white;
    background-color: rgb(40, 40, 40);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin: 0 auto 4rem auto;
    padding-top: 1.5rem;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin:0 auto 2rem auto;
    border-radius: 5px;
    border: none;
`;

const Input = styled.input`
    height: 2rem;
    border-radius: 5px;
`;

class Contact extends React.Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <Input type={text} placeholder="Enter your name" />
                </FormGroup>
            </Form>
        )
    }
}

export { Contact }