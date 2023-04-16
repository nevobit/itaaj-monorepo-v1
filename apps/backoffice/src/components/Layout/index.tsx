import React from 'react'
import Header from './Header'
import styles from './Layout.module.css'

interface Props {
    children:React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <>
      <Header />
      {children}        
    </>
  )
}

export default Layout
