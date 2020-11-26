import React from 'react'
import { useGlobalContext } from '../context/context'

const Modal = () => {
  const { isModalOpen, closeModal, counter } = useGlobalContext()
  return (
    <div className={`${isModalOpen ? 'modal-container isOpen' : 'modal-container'}`}>
      <div className='modal-content'>
        <h2>congrats!</h2>
        <p>You answer {counter} questions correctly</p>
        <button className='close-btn' onClick={closeModal}>
          play again
        </button>
      </div>
    </div>
  )
}
export default Modal
