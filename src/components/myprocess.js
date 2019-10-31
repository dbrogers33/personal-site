import React from 'react'
import Container from './container'
import H2 from './typography/h2'
import Topography from './topography-white'
import styled from "styled-components"
import Card from './card'


const Process = () => {
    return (
        <Topography>
            <Container>
                <H2 textAlign="center">So.. how does this work?</H2>
                <Flex>
                    <Card
                        number="1"
                        title="Get the Guide"
                        description="To get started simply fill at the form at the bottom of this page and I'll send you my 'Getting Started Guide'. You won't be added to any kind of mailing list, or receive any spam. Promise."
                    />
                    <Card
                        number="2"
                        title="Getting to know me"
                        description="The guide will tell you a little bit about my background and what I can offer you. It also covers pricing and my availability. This is where we find out if we're a good fit for each other."
                    />
                    <Card
                        number="3"
                        title="Getting to know you"
                        description="Once you read over the guide, there will be a link at the bottom of the email. This will take you to my 'business discovery' quesetionaire. It helps me get my footing around your business and you before we take it to the next step."
                    />
                    <Card
                        number="4"
                        title="Consultation"
                        description="You've filled out the business discovery doc, now it's time for us to put some time on the calendar for a 30-minute consulation. I'll send you and email where you can select what time slot works best for you. We'll do a video call so I can find out more about you and what I can do for you."
                    />
                </Flex>
            </Container>
        </Topography>
    );
};

const Flex = styled.div`
    @media(min-width: 800px) {
        display: grid;
        grid-template-columns: 50% 50%;
    }
`



export default Process;