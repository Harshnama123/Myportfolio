import { useState, useEffect } from 'react'
import Head from 'next/head'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Harsh Namdev - Full-Stack Software Engineer</title>
      </Head>
      <Layout>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </Layout>
    </>
  )
}