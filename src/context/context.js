import React, { useContext, useState, useEffect } from 'react'
import { difficultyType } from '../data'

const AppContext = React.createContext()

const Provider = ({ children }) => {
  const [index, setIndex] = useState(0)
  const [questions, setQuestions] = useState([])
  const [isStarted, setIsStarted] = useState(false)
  const [counter, setCounter] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [quizDetail, setQuizDetail] = useState({
    questionAmount: 2,
    category: 'history',
    difficulty: 'easy',
  })

  const fetchQuestions = ({ questionAmount, category, difficulty }) => {
    const difficultyLevel = difficultyType.find((item) => item.level === difficulty)
    const categoryType = difficultyLevel.category.find((item) => item.type === category)
    const categoryQuestions = categoryType.questions.slice(0, questionAmount)

    setQuestions(categoryQuestions)
  }

  const nextQuestion = () => {
    setIndex((oldIndex) => {
      console.log(oldIndex)
      const index = oldIndex + 1
      if (index > questions.length - 1) {
        console.log('questions finished')
        // Open Modal
        setIsModalOpen(true)
        return 0
      } else {
        return index
      }
    })
  }
  const checkAnswer = (answer) => {
    if (answer && isStarted) {
      setCounter((oldCounter) => {
        const counter = oldCounter + 1
        return counter
      })
    } else {
      setCounter(counter)
    }
    nextQuestion()
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setIsStarted(false)
    setCounter(0)
  }
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setQuizDetail({ ...quizDetail, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsStarted(true)

    //const { questionAmount, category, difficulty } = quizDetail
    fetchQuestions({ ...quizDetail })
  }
  return (
    <AppContext.Provider
      value={{
        quizDetail,
        handleChange,
        handleSubmit,
        isStarted,
        questions,
        index,
        nextQuestion,
        checkAnswer,
        counter,
        isModalOpen,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
export default Provider
