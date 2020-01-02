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
                    <P>I build websites for businesses that really want to take their business to the next level. I get along with people who work hard and know that a website is investment in the future.</P>
                    <P>Here's a project I just finished: <ExternalLink href="https://lovelessoutdooradventures.com" target="_blank">here</ExternalLink>.</P>
                </div>
                <div>
                    <H2>Taking outdoor focused companies websites to the next level.</H2>
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
    & > div {
        margin: 4rem 0;
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