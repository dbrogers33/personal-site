import React from 'react'
import Container from '../components/container'
import P from '../components/typography/p'
import styled from "styled-components"
import H2 from './typography/h2'
import H3 from './typography/h3'

const About = () => {
    return (
        <Container>
            <Flex>
                <div>
                    <H3>Who do I build websites for?</H3>
                    <P>Thanks for taking the time to get in contact. If you fill out the form below, I’ll send you my free getting started guide that will see if we’re a good fit!</P>
                    <P>I just completed this project <ExternalLink href="https://lovelessoutdooradventures.com" target="_blank">here</ExternalLink>.</P>
                </div>
                <div>
                    <H2>Your business is unique, your website should be too.</H2>
                </div>
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
const ExternalLink = styled.a`
    color: black;
    border-bottom: #FFCC00 5px solid;
    text-decoration: none;
    transition: ease .2s;
    &:hover {
        color: rgba(0,0,0,.75);
    }
`


export default About;