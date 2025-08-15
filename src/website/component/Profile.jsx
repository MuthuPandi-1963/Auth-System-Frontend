import React from 'react'
import { useParams } from 'react-router'

const Profile = () => {
  const {id}=useParams();
  return (
    <div>
      <h1>Profile</h1>
      <p>user id:{id}</p>
    </div>
  )
}

export default Profile
