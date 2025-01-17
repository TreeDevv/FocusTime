import React from 'react'
import styles from "./SidebarElement.module.css"

const SidebarElement = (props) => {
  return (
    <div className={styles.element}>
      <props.icon className={styles.icon}/>
      <p className={styles.label}>{props.txt}</p>
    </div>
  )
}

export default SidebarElement