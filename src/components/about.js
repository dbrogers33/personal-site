import React from 'react'
import Container from '../components/container'
import P from '../components/typography/p'
import styled from "styled-components"
import H1 from './typography/h1'

const About = () => {
    return (
        <Container>
            <Flex>
                <Column>
                    <P><span></span>Who do I build websites for?</P>
                    <P>Thanks for taking the time to get in contact. If you fill out the form below, I’ll send you my free getting started guide that will see if we’re a good fit!</P>
                    <P>I just completed this project here</P>
                </Column>
                <Column>
                    <H1>Your business is unique, your website should be too.</H1>
                </Column>
            </Flex>
        </Container>
    );
};

const Flex = styled.div`
    @media(min-width: 800px) {
        display: grid;
        grid-template-columns: 45% 45%;
        justify-content: space-between;
        margin: 5rem 0;
        align-items: center;
    }
`
const Column = styled.div`
    
`



export default About;