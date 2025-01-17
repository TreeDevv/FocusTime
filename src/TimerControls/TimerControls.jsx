import React from 'react'
import TextInput from "../TextInput/TextInput"
import styles from './TimerControls.module.css'
import { Button } from 'react-bootstrap'

const TimerControls = () => {
  return (
    <div className={styles.timerControls}>
      <TextInput placeholder="What are you working on?"></TextInput>
      <div className={styles.buttons}>
        <Button className={styles.button} variant='success'>Start</Button>
        <Button className={styles.button} variant='success'>Reset</Button>
      </div>
    </div>
  )
}

export default TimerControls