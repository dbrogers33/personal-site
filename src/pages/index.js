import React from 'react'
import Layout from '../templates/layout'
import Hero from '../components/hero'
import About from '../components/about'
import MyProcess from '../components/myprocess'




const IndexPage = ( ) => (
  <Layout>
    <main>
      <Hero />
      <About />
      <MyProcess />
    </main> 
  </Layout>
)

export default IndexPage