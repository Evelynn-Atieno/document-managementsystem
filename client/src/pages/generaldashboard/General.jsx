import React from 'react'
import  "./generaldashboard.scss"
import { useNavigate } from 'react-router-dom'

const General = () => {

  const navigate =useNavigate()
  return (
    <div className="login-page">
      <h1>LOGIN AS</h1>
      <button className="login-button employee" type='submit' onClick={e => navigate('/employeelogin') }>EMPLOYEE</button>
      <button className="login-button admin" type="submit" onClick={e => navigate('/login') }>ADMIN</button>
    </div>
  )
}

export default General