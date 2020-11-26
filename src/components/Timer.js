import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/context'

const Timer = () => {
  const COUNTDOWNTIME = 10000
  let timer
  //const [timerstart, setTimerStart] = useState(0)
  const [timerTime, setTimerTime] = useState(COUNTDOWNTIME)
  const { index, questions, nextQuestion } = useGlobalContext()
  //const [totalTime, setTotalTime] = useState(COUNTDOWNTIME)

  const timeConverter = (milliseconds) => {
    const hours = ('0' + Math.floor((milliseconds / 3600000) % 60)).slice(-2)
    const minutes = ('0' + Math.floor((milliseconds / 60000) % 60)).slice(-2)
    let seconds
    if (milliseconds === COUNTDOWNTIME) {
      seconds = ('0' + Math.floor(milliseconds / 1000)).slice(-2)
    } else {
      seconds = ('0' + (Math.floor((milliseconds / 1000) % 60) % 60)).slice(-2)
    }
    return {
      hours,
      minutes,
      seconds,
    }
  }

  const startTimer = () => {
    timer = setInterval(() => {
      const newTime = timerTime - 1000
      console.log(timerTime)
      console.log(newTime)
      if (newTime >= 0) {
        setTimerTime(newTime)
      } else {
        console.log('next question is going to be called')
        console.log(index)
        if (index < questions.length) {
          setTimerTime(COUNTDOWNTIME)
          console.log('run for how often')
        }
        nextQuestion()
      }
    }, 700)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(timer)
  })
  const { hours, minutes, seconds } = timeConverter(timerTime)

  return <div className='timer'>{seconds}</div>
}
export default Timer
