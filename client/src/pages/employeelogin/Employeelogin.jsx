import React from 'react'
import "./employeelogin.scss"
import  {useState} from "react"
import axios from "axios"
import{useNavigate} from 'react-router-dom'

const Employeelogin = () => {



    const [values, setValues] = useState({
        email:'',
        password:'',
      })
      axios.defaults.withCredentials=true;
      const navigate = useNavigate()
      const [error, setError]= useState('')
      
     const handleSubmit =(event) =>{
      event.preventDefault();
      axios.post('http://localhost:8081/employeelogin', values)
      .then(res => {
        if(res.data.Status ==='Success'){
         navigate('/userdashboard');
        }else{
         setError(res.data.Error);
        }
      })
    
      .catch(err =>console.log(err));
     }
  return (
    <div className="login-form-container">
     
    <h1>DOCUMENT MANAGEMENT SYSTEM</h1>
    <div className='text-danger'>
      {error && error}
    </div>
    <form onSubmit={handleSubmit} >
      <div className="form-group">
        <label htmlFor="email">email:</label>
        <input type="text" id="email" 
        onChange={e => setValues({...values, email: e.target.value})}
        
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password"
          onChange={e => setValues({...values, password: e.target.value})}
        />
      </div>

     
      
       <div className='options'>
        
     
         <button type ="submit">Login</button>
     
    </div>


  
    </form>
  </div>
  )
}

export default Employeelogin