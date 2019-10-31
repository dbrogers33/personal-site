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
  <Layout>
    <main>
      <Hero />
      <About />
      <MyProcess />
      <Contact>
        <Container>
          <H2 textAlign="center">Let's Talk</H2>
          <ParagraphWrapper>
          <P textAlign="center">Thanks for taking the time to get in contact. If you fill out the form below, I’ll send you my free getting started guide that will see if we’re a good fit!</P>
          </ParagraphWrapper>
          <Mailchimp />
        </Container>
      </Contact>
    </main> 
  </Layout>
)

const Contact = styled.section`
  padding: 10rem 0;
`
const ParagraphWrapper = styled.div`
  max-width: 100%;
  width: 550px;
  margin: 0 auto;
`

export default IndexPage