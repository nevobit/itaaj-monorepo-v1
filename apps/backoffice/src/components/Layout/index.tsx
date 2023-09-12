import React from 'react'
import Header from './Header'
import styles from './Layout.module.css'
import { Outlet } from 'react-router-dom'

interface Props {
    children?:React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <>
      <Header />
      <Outlet />
      {children}        
    </>
  )
}

export default Layout
