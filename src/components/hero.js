import React from 'react'
import Topography from '../components/topography'
import H1 from '../components/typography/h1'
import P from '../components/typography/p'
import H3 from '../components/typography/h3'
import Button from '../components/button'
import styled from "styled-components"
import Profile from '../components/profile'
import { Link } from 'gatsby'

const Hero= () => {
    return (
        <Flex>
            <Column>
            <Topography>
          
                    <Padding>
                        <div>
                        <H3>Nice to meet you.</H3>
                        <H1>I'm Denham Rogers.</H1>
                        <P>I build websites that look good, perform well, and business centric. If you are looking for someone who's good, easy to work with, and actually is responsive to your emails, calls, and text.. I'm your guy. Want to see if we're a good fit to work together? Get my <u>FREE</u> getting started guide.</P>
                        <Button link="/#contact" buttonLabel="Get the Guide" />
                        </div>
                    </Padding>
                
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
    width: 90%;
    max-width: 500px;
    margin: 0 auto;
    @media (min-width: 800px) {
        padding: 0;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
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
    @media (max-width: 800px) {
        &:nth-child(2) {
            margin-bottom: -12rem;
        }
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