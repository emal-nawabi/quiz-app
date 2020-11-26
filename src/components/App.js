import React from 'react'
import { useGlobalContext } from '../context/context'
import QuizSetupForm from './QuizSetupForm'
import DisplayQuestions from './DisplayQuestion'
import Modal from './Modal'
const App = () => {
  const { isStarted } = useGlobalContext()
  return (
    <div>
      <Modal />
      {!isStarted ? <QuizSetupForm /> : null}
      {isStarted ? <DisplayQuestions /> : null}
    </div>
  )
}

export default App
