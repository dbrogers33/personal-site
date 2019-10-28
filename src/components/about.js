import React from 'react'
import Container from '../components/container'
import P from '../components/typography/p'
import styled from "styled-components"


const About = () => {
    return (
        <Container>
            <Flex>
                <Column>
                    <P>Who do I build websites for?</P>
                    <P>Thanks for taking the time to get in contact. If you fill out the form below, I’ll send you my free getting started guide that will see if we’re a good fit!</P>
                    <P>I just completed this project here</P>
                </Column>
                <Column>
                    <P>Your business is unique, your website should be too.</P>
                </Column>
            </Flex>
        </Container>
    );
};

const Flex = styled.div`
    display: flex;
`
const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    padding: 5rem;
`



export default About;