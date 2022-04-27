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
    max-width: 60%;
    @media (max-width: 660px) {
        max-width: 80%
    }
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

const TextArea = styled.textarea`
    min-height: 6rem;
    width: 100%;
    resize: vertical;
    border-radius: 5px;
`;

const Contact = () => {
    return (
        <section>
            <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>Contact Me Here</h2>
            <Form id='contact-form' method='post' name='contact'>
                <input type="hidden" name="form-name" value="contact" />
                <FormGroup>
                    <label htmlFor='name'>Name:</label>
                    <Input type="text" name="name" placeholder="Enter your name" />
                </FormGroup>
                <FormGroup>
                    <label htmlFor='email'>Email:</label>
                    <Input type="email" name="email" placeholder="Enter your email" />
                </FormGroup>
                <FormGroup>
                    <label htmlFor='message'>Message:</label>
                    <TextArea name="message" id="email-text" placeholder="Write your message here" />
                </FormGroup>
                <FormGroup>
                    <Input type="submit" name="submit" />
                </FormGroup>
            </Form>
        </section>
    )
}

export { Contact };