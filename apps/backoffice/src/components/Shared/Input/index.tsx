import React from 'react'

import styles from './Input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  icon?: string
  className?: string
}

const Input = ({icon, className, ...rest}: InputProps) => {
  return (
    <div className={styles.input}>
      {icon &&<i className={icon} ></i>}
      <input {...rest} className={`${styles.input_element} ${className == 'none' && styles.input_none}`}  />
    </div>
  )
}

export default Input
