import React from 'react'
import styles from './TextInput.module.css'

const TextInput = (props) => {
  return (
    <input type='text' placeholder={props.placeholder}/>
  )
}

export default TextInput