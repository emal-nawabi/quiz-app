import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/context'
import Timer from './Timer'

const DisplayQuestion = () => {
  const { questions, index, nextQuestion, checkAnswer, counter } = useGlobalContext()
  const { question, answers, correctAnswer } = questions[index]

  return (
    <section className='quiz'>
      <Timer />
      <p className='correct-answers'>{`Correct Answer:${index}/${counter}`}</p>
      <div className='container'>
        <h2>{String(question)}</h2>

        <div className='btn-container'>
          {answers.map((answer, index) => {
            return (
              <button
                key={index}
                className='answer-btn'
                onClick={() => checkAnswer(answer === correctAnswer)}
              >
                {answer}
              </button>
            )
          })}
        </div>
      </div>
      <button className='next-question' onClick={nextQuestion}>
        Next Question
      </button>
    </section>
  )
}
export default DisplayQuestion
