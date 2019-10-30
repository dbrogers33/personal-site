import React from 'react'
import Container from './container'
import H1 from './typography/h1'
import Topography from './topography-white'
import styled from "styled-components"
import Card from './card'


const Process = () => {
    return (
        <Topography>
            <Container>
                <H1 textAlign="center">Where do we start??</H1>
                <Flex>
                    <Card
                        number="1"
                        title="Getting Started"
                        description="The hard part.. showing up is half the battle. To start the process, you just need to go to go to the bottom of this page and fill out the form"
                    />
                    <Card
                        number="2"
                        title="Getting know me"
                        description="Goodbye"
                    />
                    <Card
                        number="3"
                        title="Getting to know you"
                        description="Goodbye"
                    />
                    <Card
                        number="4"
                        title="Consultion"
                        description="Goodbye"
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