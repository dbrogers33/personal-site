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
                    <H3>I don't build websites for just anybody...</H3>
                    <P>So who do I build them for? People and businesses that understand that a website is an investment and not just a check in the box for starting a business. Because when I work with a client, it's a partnership. I care about your business doing the best that it can using my expertises. Sound like a good fit?</P>
                    <P>Here's a project I just finished: <ExternalLink href="https://lovelessoutdooradventures.com" target="_blank">here</ExternalLink>.</P>
                </div>
                <div>
                    <H2>I build from the ground up custom websites for businesses like yours.</H2>
                </div>
            </Flex>
        </Container>
    );
};

const Flex = styled.div`
    margin: 4rem 0;
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