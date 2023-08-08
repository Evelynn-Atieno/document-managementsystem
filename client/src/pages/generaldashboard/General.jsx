import React from 'react'
import  "./generaldashboard.scss"

const General = () => {
  return (
    <div className="login-page">
      <h1>LOGIN AS</h1>
      <button className="login-button employee" type='submit'>EMPLOYEE</button>
      <button className="login-button admin" type="submit">ADMIN</button>
    </div>
  )
}

export default General