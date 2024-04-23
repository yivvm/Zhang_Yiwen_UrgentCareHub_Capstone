import React from 'react'
import UserHeader from '../../components/account/UserHeader'
import Hero from '../../components/Home/Hero'
import Main from '../../components/Home/Main'
import './home.css'

export default function Home() {
  return (
    <div>
      <UserHeader />
      <Hero />
      <Main />
    </div>
  )
}
