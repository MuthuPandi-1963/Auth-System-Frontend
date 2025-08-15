import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router'
const Home = () => {
  return (
    <div>
      <Nav/>
      <h1>Home Content</h1>
       <Link to="/login/profile/101">Go to User 101 Profile</Link>
    </div>
  )
}

export default Home
