import React from 'react'
import Layout from '../templates/layout'
import Hero from '../components/hero'
import About from '../components/about'
import MyProcess from '../components/myprocess'
import Container from '../components/container'
import styled from 'styled-components'
import H2 from '../components/typography/h2'
import P from '../components/typography/p'
import Mailchimp from '../components/mailchimp'




const IndexPage = ( ) => (
  <Layout
    title="Denham Rogers | Web development and design for outdoor businesses"
    description="I build great websites for great businesses around the country. I specialize in the outdoor industry but always looking to take on new challenges."
    keywords="Outdoor Website Developer"
    image="/meta.jpg"
  >
    <main>
      <Hero />
      <About />
      <MyProcess />
      <Contact>
        <Container id="contact">
          <H2 textAlign="center">Ready? Get the Guide</H2>
          <ParagraphWrapper>
          <P textAlign="center">Here it is. The free guide I've been talking about. Fill out the form, get the guide. If you don't want to proceed any further after that, just discard it and I'll never bother you again. Cheers to hopefully doing business together in the future.</P>
          </ParagraphWrapper>
          <Mailchimp />
        </Container>
      </Contact>
    </main> 
  </Layout>
)

const Contact = styled.section`
  padding: 6rem 0;
  @media(min-width: 800px) {
    padding: 10rem 0;
  }
`
const ParagraphWrapper = styled.div`
  max-width: 100%;
  width: 550px;
  margin: 0 auto;
`

export default IndexPage