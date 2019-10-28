import React from 'react'
import Topography from '../components/topography'
import H1 from '../components/typography/h1'
import Container from '../components/container'
import P from '../components/typography/p'
import H3 from '../components/typography/h3'
import Button from '../components/button'
import styled from "styled-components"
import Profile from '../components/profile'

const Hero= () => {
    return (
        <Flex>
            <Column>
            <Topography>
                <Container>
                    <Padding>
                        
                        <H3>Nice to meet you.</H3>
                        <H1>I'm Denham Rogers.</H1>
                        <P>I build websites that are high quality, low-maintance, and centered around your business goals. After all, a website is an investment and I want to show you a return. Sound like a good fit? Try my getting started guide.</P>
                        <Button link="/" buttonLabel="Get Started" />
                        
                    </Padding>
                </Container>
            </Topography>
            </Column>
            <Column>
            <ProfileWrapper>
                <Profile />
                </ProfileWrapper>
            </Column>
        </Flex>
    );
};

const Padding = styled.div`
    padding: 7em  0 17em 0;
    @media (min-width: 800px) {
        padding: 7em  0 0 0;
    }
`

const Flex = styled.div`
    @media (min-width: 800px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
    }    
`
const Column = styled.div`
    @media (min-width: 800px) {
        display: flex;
        flex-direction: column;
        flex-basis: 100%;
        flex: 1;
    }
`

const ProfileWrapper = styled.div`
    @media (max-width: 800px) {
        position: relative;
        top: -13rem;
        width: 90%;
        margin: 0 auto;
    }
`

export default Hero;