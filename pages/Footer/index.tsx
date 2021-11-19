import React, { ReactNode } from 'react'
import './footer.css'
import { discordLink, githubLink } from '../contact/contactLinks'
import { Center } from '../../utils/Center'

export default Footer

function Footer() {
  return (
    <Container>
      <Section>
        <Header>Resources</Header>

        <Link href="/">What is the Lsos</Link>
        <Link href="/state-of-the-art">State of the Art</Link>
        <Link href="/faq">FAQ</Link>
      </Section>

      <Section>
        <Header>Lsos</Header>

        <Link href="/about">About</Link>
        <Link href={discordLink}>Discord</Link>
        <Link href={githubLink}>GitHub</Link>
        <Link href="/contact">Contact</Link>
        {/*
        <Link href="/jobs">Jobs</Link>
        */}
      </Section>

      <Section>
        <Header>Identity</Header>

        <Link href="/mission">Mission</Link>
        <Link href="/culture">Culture</Link>
        <Link href="/values">Values</Link>
        <Link href="/conduct">Conduct</Link>
      </Section>

      <Section>
        <Header>Legal</Header>

        <Link href="/terms">Terms</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/imprint">Imprint</Link>
      </Section>
    </Container>
  )
}

function Container({ children }: { children: ReactNode }) {
  return (
    <div id="footer-container">
      <div id="footer">{children}</div>
      <NoCookie />
    </div>
  )
}

function Section({ children }: { children: ReactNode }) {
  return <div className="footer_section">{children}</div>
}

function Header({ children }: { children: ReactNode }) {
  return (
    <h4
      style={{
        marginBottom: 7,
        fontWeight: 600
      }}
    >
      {children}
    </h4>
  )
}

function Link({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      style={{
        display: 'block',
        textDecoration: 'none',
        color: 'inherit'
      }}
    >
      {children}
    </a>
  )
}

function NoCookie() {
  return (
    <Center style={{ marginTop: 36, marginBottom: -20 }}>
      <a href="/min" style={{ fontSize: '0.85em' }}>
        No cookie. No JS.
      </a>
    </Center>
  )
}
