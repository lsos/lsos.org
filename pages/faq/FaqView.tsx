import React from 'react'
import { assert } from '@brillout/assert'
import { P } from "../../utils/P";

export { FaqHeader }
export { FaqContent }
export type FaqQuestion = {
  question: string
  answer: React.ReactElement
  hash: string
}

function FaqHeader({ questions }: { questions: FaqQuestion[] }) {
  const hashes: Record<string, boolean> = {}
  return (
    <>
      {questions.map(({ question, hash }, i: number) => {
        assert(!hashes[hash], 'Duplicated FAQ hash: ' + hash)
        hashes[hash] = true
        return (
          <div key={i}>
            <a href={'#' + hash}>{question}</a>
          </div>
        )
      })}
    </>
  )
}

function FaqContent({ questions }: { questions: FaqQuestion[] }) {
  return (
    <>
      {questions.map(({ question, answer, hash }, i: number) => {
        return (
        <React.Fragment key={i}>
          <h2 id={hash}>{question}</h2>
          <P>{answer}</P>
          <ScrollToTop />
        </React.Fragment>
        )
      })}
    </>
  )
}

function ScrollToTop() {
  return (
    <a
      href="#"
      style={{
        fontSize: '1.6em',
        padding: 10,
        margin: -10,
        marginLeft: -12,
        color: 'inherit'
      }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"></path>
      </svg>
    </a>
  )
}
