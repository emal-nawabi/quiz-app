import React from 'react'
import { useGlobalContext } from '../context/context'
const QuizSetupForm = () => {
  const { quizDetail, handleChange, handleSubmit } = useGlobalContext()
  return (
    <main>
      <div className='quiz quiz-small'>
        <form className='setup-form'>
          <h2>Select Your Options</h2>
          <div className='form-control'>
            <label htmlFor='amount'>Number of Questions</label>
            <input
              name='questionAmount'
              type='number'
              max='5'
              className='form-input'
              value={quizDetail.questionAmount}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='category'>Select Category</label>
            <select
              name='category'
              className='form-input'
              value={quizDetail.category}
              onChange={handleChange}
            >
              <option value='sports'>sports</option>
              <option value='history'>history</option>
            </select>
          </div>

          <div className='form-control'>
            <label htmlFor='difficulty'>Select Difficulty</label>
            <select
              name='difficulty'
              className='form-input'
              value={quizDetail.difficulty}
              onChange={handleChange}
            >
              <option value='easy'>easy</option>
              <option value='medium'>medium</option>
              <option value='hard'>hard</option>
            </select>
            <button type='submit' className='submit-btn' onClick={handleSubmit}>
              Start
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
export default QuizSetupForm
